import { Clock, TrendingUp, Users, Target, DollarSign } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-strategy.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();

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
              Here's Our Proposal For You, Yao 👋
            </h1>
            <p className="text-xl text-primary-foreground/90">
              The menu on the left have side will give you more information on timeline, options for "good, better, best", and pricing
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
              title="Dev Hours Saved With Us"
              value="234"
              subtitle="vs. competition"
              icon={Clock}
              trend="up"
            />
            <MetricCard
              title="Code Reuse From Past Work"
              value="45%"
              subtitle="already built"
              icon={TrendingUp}
              trend="up"
            />
            <MetricCard
              title="Time to Complete"
              value="4 weeks"
              subtitle="from handshake to live on your site"
              icon={Users}
            />
            <MetricCard
              title="Our Average Feedback"
              value="5 stars"
              subtitle="over 20 projects"
              icon={Target}
              trend="up"
            />
          </div>
        </section>

        {/* Vision Statement */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-xl font-bold mb-3">Our Shared Vision</h3>
            <p className="text-lg leading-relaxed opacity-95">
              You get a real-time Crypto Relevancy Ranking application. It ingests market, chain, social, and repo data. Working together at every step we will develop proprietary algorithms that turn these values in a industry leading ranking system. Our development process is transparent, stable, and collaborative. If at any point you're not satisfied with the work then you don't pay.
            </p>
          </Card>
        </section>

        {/* Key Insights Preview */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover-lift">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-success/10 p-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">We've Done This Before</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    I have already worked with crypto exchanges and traders to build similar ranking tools.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    "Adrian was an absolute pleasure to work with! He is simply amazing at his job. You will not be dissatisfied if you choose to work with Adrian. My team and I look forward to working with him in the near future."
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
                  <h4 className="font-semibold mb-2">Beautiful Frontend Design</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    While I do excel at deep backend work, I also have a strong eye for design and UX. More than willing to give up profits to bring in an expert to guarantee results.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    "Amazing work, hired twice and recommended to friends. Adrian is the man!"
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
                  <h4 className="font-semibold mb-2">Industry Expertise</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    In 2017, I co-founded a crypto platform as CTO and travelled China educating students on the Web3 ecosystem. Been in the trenches ever since.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    "Great work by Adrian; he got our AI tool completed in the time specified. Will used his service again."
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
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2" onClick={() => navigate("/milestones")}>
              <Target className="h-6 w-6 text-primary" />
              <span className="font-semibold">Explore Milestones</span>
              <span className="text-xs text-muted-foreground">View 4 Milestones</span>
            </Button>
            <Button variant="outline" className="h-auto py-6 flex flex-col gap-2"  onClick={() => navigate("/pricing")}>
              <DollarSign className="h-6 w-6 text-accent" />
              <span className="font-semibold">Explore Pricing</span>
              <span className="text-xs text-muted-foreground">View 4 Options</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
