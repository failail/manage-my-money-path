import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { questionGroups } from "@/data/questionGroups";
import QuestionRenderer from "@/components/assessment/QuestionRenderer";
import { useToast } from "@/hooks/use-toast";

const Assessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [visibleGroups, setVisibleGroups] = useState<string[]>(['personal-basics']);

  // Helper function to check if question should be shown based on conditional logic
  const shouldShowQuestion = (question: any) => {
    if (!question.conditional) return true;
    
    // Handle array of conditions (all must be satisfied)
    if (Array.isArray(question.conditional)) {
      return question.conditional.every(condition => {
        const dependentValue = responses[condition.dependsOn];
        return condition.values.includes(dependentValue);
      });
    }
    
    // Handle single condition
    const dependentValue = responses[question.conditional.dependsOn];
    return question.conditional.values.includes(dependentValue);
  };

  // Calculate total questions and progress
  const totalQuestions = questionGroups
    .filter(group => visibleGroups.includes(group.id))
    .reduce((sum, group) => {
      const visibleQuestions = group.questions.filter(shouldShowQuestion);
      return sum + visibleQuestions.length;
    }, 0);
  
  const answeredQuestions = Object.keys(responses).length;
  const progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;

  // Get current questions to display (10 per page)
  const allQuestions = questionGroups
    .filter(group => visibleGroups.includes(group.id))
    .flatMap(group => group.questions.filter(shouldShowQuestion));
  
  const questionsPerPage = 10;
  const currentQuestions = allQuestions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );
  
  const totalPages = Math.ceil(allQuestions.length / questionsPerPage);

  // Handle conditional logic for showing/hiding groups
  useEffect(() => {
    // Calculate total owned properties
    const calculateOwnedProperties = () => {
      let total = 0;
      
      // Primary residence if owned
      if (responses['housingType'] === 'Own it') {
        total += 1;
      }
      
      // Additional properties from Q12 (for owners) or Q26 (for renters)
      const additionalProperties = responses['housingType'] === 'Rent it' 
        ? responses['ownedHomesCount'] 
        : responses['additionalProperties'];
        
      if (additionalProperties && additionalProperties !== '0') {
        const count = additionalProperties === '4 or more' ? 4 : parseInt(additionalProperties);
        total += count;
      }
      
      return total;
    };

    const ownedPropertiesCount = calculateOwnedProperties();

    const triggers = {
      'rental-housing': responses['housingType'] === 'Rent it',
      'owned-properties': ownedPropertiesCount > 0,
      'housing': responses['housingType'] === 'Own it' || responses['additionalProperties'] !== '0',
      'additional-properties': responses['additionalProperties'] && responses['additionalProperties'] !== '0',
      'vehicles-common': responses['hasVehicles'] && responses['hasVehicles'] !== '0',
      'vehicles-insurance-loans': responses['hasVehicles'] && responses['hasVehicles'] !== '0',
      'children': responses['hasChildren'] && responses['hasChildren'] !== '0',
      'dependents': responses['hasFinancialDependents'] === 'Yes',
      'personal-loans': responses['hasPersonalLoans'] === 'Yes'
    };

    const newVisibleGroups = ['personal-basics']; // Always show basics
    
    // Add conditional groups if triggered
    Object.entries(triggers).forEach(([groupId, shouldShow]) => {
      if (shouldShow) {
        newVisibleGroups.push(groupId);
      }
    });
    
    // Always show the final groups
    newVisibleGroups.push('insurance', 'monthly-expenses-1', 'monthly-expenses-2', 'annual-expenses', 'investments', 'assets', 'income');
    
    setVisibleGroups(newVisibleGroups);
  }, [responses]);

  const handleResponseChange = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const validateCurrentPage = () => {
    const requiredQuestions = currentQuestions.filter(q => q.required);
    const missingRequired = requiredQuestions.filter(q => !responses[q.id]);
    
    if (missingRequired.length > 0) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields before continuing.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentPage()) return;
    
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Assessment complete, go to results
      navigate('/results', { state: { responses } });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Progress:</span>
            <Progress value={progress} className="flex-1" />
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              Financial Assessment - Part {currentPage + 1}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentQuestions.map((question) => (
              <QuestionRenderer
                key={question.id}
                question={question}
                value={responses[question.id]}
                onChange={(value) => handleResponseChange(question.id, value)}
              />
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-2xl mx-auto mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Questions {(currentPage * questionsPerPage) + 1} - {Math.min((currentPage + 1) * questionsPerPage, allQuestions.length)} of {allQuestions.length}
          </div>
          
          <Button
            onClick={handleNext}
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover"
          >
            {currentPage < totalPages - 1 ? 'Next' : 'Complete Assessment'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Assessment;