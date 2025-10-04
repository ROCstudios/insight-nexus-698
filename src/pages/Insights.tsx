import { useState } from "react";
import { Search, TrendingUp, Clock, Users, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const insights = [
  {
    id: 1,
    title: "Document Review Automation",
    metric: "480 hours/month",
    impact: "high",
    category: "Efficiency",
    description: "AI-powered document analysis can reduce manual review time by 60%",
    quote: "We spend 4-6 hours per case just reading through files",
    source: "Senior Associate, Litigation",
    teams: ["Case Teams", "Associates"],
  },
  {
    id: 2,
    title: "Automated Research Synthesis",
    metric: "35 hours/week",
    impact: "high",
    category: "Research",
    description: "Natural language AI can synthesize case law and precedents automatically",
    quote: "Initial research is repetitive and time-consuming",
    source: "Research Team Lead",
    teams: ["Research", "Case Teams"],
  },
  {
    id: 3,
    title: "Client Email Drafting",
    metric: "40% faster",
    impact: "medium",
    category: "Communication",
    description: "AI assistance for email drafting improves consistency and speed",
    quote: "Email drafting takes longer than it should",
    source: "Partner",
    teams: ["Partners", "Associates"],
  },
  {
    id: 4,
    title: "Contract Review Acceleration",
    metric: "65% reduction",
    impact: "high",
    category: "Efficiency",
    description: "AI can identify key clauses and risks in contracts automatically",
    quote: "Contract review is our biggest time sink",
    source: "Corporate Team",
    teams: ["Corporate", "Transactional"],
  },
  {
    id: 5,
    title: "Case Precedent Matching",
    metric: "8 hours/case",
    impact: "medium",
    category: "Research",
    description: "AI can find relevant precedents faster than manual search",
    quote: "Finding similar cases is like finding a needle in a haystack",
    source: "Senior Partner",
    teams: ["Litigation", "Research"],
  },
];

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter(
    (insight) =>
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Insights Repository</h1>
          <p className="text-muted-foreground">
            Explore key findings from diagnostic interviews and data analysis
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Ask a question about your diagnostic data..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            💡 Try: "document review", "research", "client communication"
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold metric-number">{insights.length}</p>
                <p className="text-xs text-muted-foreground">Total Insights</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-success/10 p-2">
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold metric-number">3</p>
                <p className="text-xs text-muted-foreground">High Impact</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 p-2">
                <Clock className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold metric-number">2,340</p>
                <p className="text-xs text-muted-foreground">Hours/Month</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-warning/10 p-2">
                <Users className="h-4 w-4 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold metric-number">12</p>
                <p className="text-xs text-muted-foreground">Teams Affected</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Insights List */}
        <div className="space-y-4">
          {filteredInsights.map((insight) => (
            <Card key={insight.id} className="p-6 hover-lift animate-fade-in">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{insight.title}</h3>
                    <Badge
                      variant={insight.impact === "high" ? "default" : "secondary"}
                      className={
                        insight.impact === "high"
                          ? "bg-success text-success-foreground"
                          : "bg-accent/20 text-accent-foreground"
                      }
                    >
                      {insight.impact} impact
                    </Badge>
                    <Badge variant="outline">{insight.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{insight.description}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-2xl font-bold metric-number text-primary">{insight.metric}</p>
                  <p className="text-xs text-muted-foreground">potential savings</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm italic mb-2">"{insight.quote}"</p>
                <p className="text-xs text-muted-foreground">— {insight.source}</p>
              </div>

              {/* Teams */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    {insight.teams.map((team) => (
                      <Badge key={team} variant="secondary" className="text-xs">
                        {team}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredInsights.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No insights found matching your search.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
