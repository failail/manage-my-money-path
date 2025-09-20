import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { CheckCircle, TrendingUp, Shield, Calculator } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: "12 Key Financial Ratios",
      description: "Comprehensive analysis covering all aspects of your financial health"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Professional Assessment",
      description: "Get insights typically reserved for financial advisory clients"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Anonymous & Secure",
      description: "No registration required. Your data is processed securely and privately"
    }
  ];

  const ratios = [
    "Debt Servicing Ratio", "Emergency Buffer Analysis", "Savings Rate Assessment",
    "Investment Allocation", "Cash Flow Analysis", "Asset Distribution",
    "Liquidity Position", "Debt-to-Income Ratio", "Expense Management",
    "Financial Stability Score", "Risk Assessment", "Growth Potential"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <Logo size="lg" className="text-center" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Know Your Financial Health
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional financial assessment with 12 key ratios. Get actionable insights 
            about your money management in just 10 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary-hover"
              onClick={() => navigate('/assessment')}
            >
              Start Your Financial Checkup
            </Button>
            <div className="text-sm text-muted-foreground">
              ✓ Anonymous • ✓ Secure • ✓ Professional Analysis
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive financial health report with personalised recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  12 Financial Ratios Analysed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {ratios.map((ratio, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {ratio}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Professional Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Overall financial health score (0-100)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Priority recommendations for improvement
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Comparison to healthy benchmarks
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Downloadable PDF report
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Actionable next steps
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Understand Your Money?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands who've taken control of their financial future
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-primary hover:bg-primary-hover"
            onClick={() => navigate('/assessment')}
          >
            Start Your Financial Checkup
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <Logo size="sm" className="mb-4" />
          <p className="text-sm text-muted-foreground">
            Professional financial health assessment • Anonymous & secure
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;