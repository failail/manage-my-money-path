import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";
import QuestionRenderer from "@/components/assessment/QuestionRenderer";
import { questionGroups, Question } from "@/data/questionGroups";
import { getSessionToken, createSession, getSessionId, saveResponses } from "@/utils/sessionStorage";
import { toast } from "sonner";

const QUESTIONS_PER_PAGE = 5;

const Assessment = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);

  // Initialize session
  useEffect(() => {
    const initSession = async () => {
      const token = getSessionToken();
      let sid = await getSessionId(token);
      
      if (!sid) {
        sid = await createSession(token);
      }
      
      if (sid) {
        setSessionId(sid);
      }
    };
    
    initSession();
  }, []);

  // Check if a question should be shown based on conditionals
  const shouldShowQuestion = (question: Question): boolean => {
    if (!question.conditional) return true;

    // Handle array of conditionals (AND logic)
    if (Array.isArray(question.conditional)) {
      return question.conditional.every(cond => {
        const responseValue = responses[cond.dependsOn];
        return responseValue && cond.values.includes(responseValue);
      });
    }

    // Handle single conditional
    const responseValue = responses[question.conditional.dependsOn];
    return responseValue && question.conditional.values.includes(responseValue);
  };

  // Get all visible questions (filtered by conditionals)
  const allVisibleQuestions = questionGroups.flatMap(group => 
    group.questions.filter(shouldShowQuestion)
  );

  // Get current page questions
  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const currentQuestions = allVisibleQuestions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);
  
  const totalPages = Math.ceil(allVisibleQuestions.length / QUESTIONS_PER_PAGE);
  const progress = (allVisibleQuestions.filter(q => responses[q.id]).length / allVisibleQuestions.length) * 100;

  // Handle response change
  const handleResponseChange = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Validate current page
  const validateCurrentPage = (): boolean => {
    return currentQuestions.every(q => {
      if (!q.required) return true;
      const value = responses[q.id];
      return value !== undefined && value !== null && value !== '';
    });
  };

  // Handle next
  const handleNext = async () => {
    if (!validateCurrentPage()) {
      toast.error("Please answer all required questions before continuing");
      return;
    }

    // Save responses to database
    if (sessionId) {
      await saveResponses(sessionId, responses);
    }

    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Assessment complete
      if (sessionId) {
        await saveResponses(sessionId, responses);
      }
      navigate('/results', { state: { responses, sessionId } });
    }
  };

  // Handle previous
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <div className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {Math.round(progress)}% complete
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Financial Assessment
            </h2>
            <p className="text-muted-foreground">
              Please answer the following questions honestly for accurate results.
            </p>
          </div>

          <div className="space-y-6">
            {currentQuestions.map(question => (
              <QuestionRenderer
                key={question.id}
                question={question}
                value={responses[question.id]}
                onChange={(value) => handleResponseChange(question.id, value)}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!validateCurrentPage()}
            >
              {currentPage < totalPages - 1 ? 'Next' : 'Complete Assessment'}
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Assessment;
