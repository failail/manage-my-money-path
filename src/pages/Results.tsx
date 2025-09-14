import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Download, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface FinancialRatio {
  id: string;
  name: string;
  value: number;
  target: string;
  status: 'good' | 'warning' | 'poor';
  description: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const responses = location.state?.responses || {};
  const [ratios, setRatios] = useState<FinancialRatio[]>([]);
  const [overallScore, setOverallScore] = useState(0);

  useEffect(() => {
    if (Object.keys(responses).length === 0) {
      navigate('/assessment');
      return;
    }

    // Calculate financial ratios (placeholder logic)
    const calculatedRatios: FinancialRatio[] = [
      {
        id: 'core-expense',
        name: 'Core Expense Ratio',
        value: 0.65,
        target: '< 0.7',
        status: 'good',
        description: 'Core monthly expenses as percentage of net income'
      },
      {
        id: 'debt-servicing',
        name: 'Debt Servicing Ratio',
        value: 0.35,
        target: '< 0.3',
        status: 'warning',
        description: 'Monthly debt payments as percentage of gross income'
      },
      {
        id: 'emergency-buffer',
        name: 'Emergency Buffer',
        value: 3.2,
        target: '6+ months',
        status: 'poor',
        description: 'Months of expenses covered by emergency savings'
      },
      {
        id: 'savings-rate',
        name: 'Savings Rate',
        value: 0.15,
        target: '> 0.2',
        status: 'warning',
        description: 'Monthly savings as percentage of net income'
      }
    ];

    setRatios(calculatedRatios);
    
    // Calculate overall score
    const goodCount = calculatedRatios.filter(r => r.status === 'good').length;
    const warningCount = calculatedRatios.filter(r => r.status === 'warning').length;
    const score = Math.round((goodCount * 100 + warningCount * 60) / calculatedRatios.length);
    setOverallScore(score);
  }, [responses, navigate]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'poor':
        return <AlertTriangle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'border-success/20 bg-success/5';
      case 'warning':
        return 'border-warning/20 bg-warning/5';
      case 'poor':
        return 'border-destructive/20 bg-destructive/5';
      default:
        return '';
    }
  };

  const formatValue = (ratio: FinancialRatio) => {
    if (ratio.id === 'emergency-buffer') {
      return `${ratio.value} months`;
    }
    return `${Math.round(ratio.value * 100)}%`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo size="lg" />
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="hidden sm:inline-flex"
            >
              Take Another Assessment
            </Button>
          </div>
        </div>
      </header>

      {/* Results Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overall Score */}
        <Card className="mb-8 text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Your Financial Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-4">
              <div className="text-6xl font-bold text-primary">
                {overallScore}
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold">out of 100</div>
                <div className="text-sm text-muted-foreground">
                  {overallScore >= 80 ? 'Excellent' : 
                   overallScore >= 60 ? 'Good' : 
                   overallScore >= 40 ? 'Fair' : 'Needs Improvement'}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Ratios */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Financial Ratios</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {ratios.map((ratio) => (
              <Card key={ratio.id} className={`${getStatusColor(ratio.status)} border-2`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{ratio.name}</CardTitle>
                    {getStatusIcon(ratio.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">
                      {formatValue(ratio)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Target: {ratio.target}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {ratio.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Priority Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold">Build Your Emergency Fund</h4>
                <p className="text-sm text-muted-foreground">
                  Aim to save 6 months of expenses. Consider opening a high-yield savings account.
                </p>
              </div>
              <div className="border-l-4 border-warning pl-4">
                <h4 className="font-semibold">Reduce Debt Servicing</h4>
                <p className="text-sm text-muted-foreground">
                  Your debt payments are above the recommended 30%. Consider debt consolidation.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold">Increase Savings Rate</h4>
                <p className="text-sm text-muted-foreground">
                  Target saving at least 20% of your net income for long-term financial health.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center space-y-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF Report
          </Button>
          
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Take Another Assessment
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/assessment')}
            >
              Review Your Answers
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Logo size="sm" className="mb-4" />
          <p className="text-sm text-muted-foreground">
            Professional financial health assessment • Results generated on {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Results;