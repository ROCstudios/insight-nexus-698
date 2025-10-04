import { Clock, TrendingUp, Users, Target } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-strategy.jpg";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={heroImage}
          alt="AI Strategy Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-primary-foreground mb-2">
              AI Strategy Overview
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Accelerating client excellence through intelligent automation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Strategic Objectives */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Strategic Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Hours Saved Monthly"
              value="2,340"
              subtitle="vs. baseline"
              icon={Clock}
              trend="up"
            />
            <MetricCard
              title="Case Prep Efficiency"
              value="45%"
              subtitle="improvement"
              icon={TrendingUp}
              trend="up"
            />
            <MetricCard
              title="Teams Impacted"
              value="12"
              subtitle="across organization"
              icon={Users}
            />
            <MetricCard
              title="Active Opportunities"
              value="23"
              subtitle="in pipeline"
              icon={Target}
              trend="up"
            />
          </div>
        </section>

        {/* Vision Statement */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-95">
              To become the most efficient and client-focused consulting firm by leveraging AI to eliminate 
              repetitive tasks, accelerate insight generation, and enable our team to focus on high-value 
              strategic work that drives exceptional client outcomes.
            </p>
          </Card>
        </section>

        {/* Key Insights Preview */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Key Insights</h2>
            <Button variant="outline">View All Insights</Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-success/10 p-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Document Processing</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI can reduce document review time by 60%, saving 480 hours monthly across case teams.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    "We spend 4-6 hours per case just reading through files" - Senior Associate
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Research Automation</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Automated research tools could save 35 hours per week in preliminary case research.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    "Initial research is repetitive and time-consuming" - Research Team
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-warning/10 p-2">
                  <div className="w-2 h-2 rounded-full bg-warning" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Client Communication</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI-assisted drafting could improve response time by 40% and consistency across teams.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    "Email drafting takes longer than it should" - Partner
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <Target className="h-6 w-6 text-primary" />
              <span className="font-semibold">Explore Opportunities</span>
              <span className="text-xs text-muted-foreground">View 23 AI opportunities</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <Users className="h-6 w-6 text-accent" />
              <span className="font-semibold">Team Analysis</span>
              <span className="text-xs text-muted-foreground">12 teams analyzed</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
              <Clock className="h-6 w-6 text-success" />
              <span className="font-semibold">Run Simulator</span>
              <span className="text-xs text-muted-foreground">Plan scenarios</span>
            </Button>
            <Button className="h-auto py-6 flex flex-col gap-2 bg-gradient-primary hover-glow">
              <span className="font-semibold">Generate Report</span>
              <span className="text-xs opacity-90">Export insights</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
