import { useState } from "react";
import { Target, Clock, Zap, Users, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const opportunities = [
  {
    id: 1,
    title: "AI Document Analysis Tool",
    description: "Automated document review and key information extraction",
    impact: 9,
    effort: 6,
    hoursSaved: 480,
    teams: ["Case Teams", "Associates"],
    category: "Automation",
  },
  {
    id: 2,
    title: "Legal Research Assistant",
    description: "AI-powered case law research and precedent matching",
    impact: 8,
    effort: 5,
    hoursSaved: 280,
    teams: ["Research", "Litigation"],
    category: "Research",
  },
  {
    id: 3,
    title: "Contract Review System",
    description: "Automated contract analysis with risk flagging",
    impact: 9,
    effort: 7,
    hoursSaved: 350,
    teams: ["Corporate", "Transactional"],
    category: "Automation",
  },
  {
    id: 4,
    title: "Email Draft Assistant",
    description: "AI-powered email composition and response suggestions",
    impact: 6,
    effort: 3,
    hoursSaved: 120,
    teams: ["All Teams"],
    category: "Communication",
  },
  {
    id: 5,
    title: "Billing Automation",
    description: "Automated time tracking and billing code suggestions",
    impact: 7,
    effort: 4,
    hoursSaved: 200,
    teams: ["Finance", "Partners"],
    category: "Operations",
  },
  {
    id: 6,
    title: "Client Portal Enhancement",
    description: "Self-service client portal with AI chatbot",
    impact: 5,
    effort: 8,
    hoursSaved: 150,
    teams: ["Client Services"],
    category: "Client Experience",
  },
];

export default function Opportunities() {
  const [filterTeam, setFilterTeam] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesTeam = filterTeam === "all" || opp.teams.some(t => t.toLowerCase().includes(filterTeam.toLowerCase()));
    const matchesCategory = filterCategory === "all" || opp.category === filterCategory;
    return matchesTeam && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Opportunities</h1>
          <p className="text-muted-foreground">
            Identified opportunities for AI implementation across the organization
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
          </div>
          <Select value={filterTeam} onValueChange={setFilterTeam}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Teams" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teams</SelectItem>
              <SelectItem value="case">Case Teams</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Automation">Automation</SelectItem>
              <SelectItem value="Research">Research</SelectItem>
              <SelectItem value="Communication">Communication</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
            </SelectContent>
          </Select>

          <div className="ml-auto">
            <Badge variant="secondary" className="text-sm">
              {filteredOpportunities.length} opportunities
            </Badge>
          </div>
        </div>

        {/* Effort vs Impact Chart */}
        <Card className="p-8 mb-8 bg-gradient-card">
          <h3 className="text-lg font-semibold mb-6">Effort vs Impact Analysis</h3>
          <div className="relative h-96 bg-background rounded-lg border-2 border-border">
            {/* Axes */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-border" />
            
            {/* Labels */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
              Effort →
            </div>
            <div className="absolute top-1/2 -left-14 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
              Impact →
            </div>

            {/* Quadrant labels */}
            <div className="absolute top-4 right-4 text-xs font-medium text-success">Quick Wins</div>
            <div className="absolute top-4 left-4 text-xs font-medium text-primary">Strategic</div>
            <div className="absolute bottom-4 right-4 text-xs font-medium text-muted-foreground">Low Priority</div>

            {/* Opportunity bubbles */}
            {filteredOpportunities.map((opp) => {
              const x = (opp.effort / 10) * 100;
              const y = 100 - (opp.impact / 10) * 100;
              const size = Math.max(40, (opp.hoursSaved / 500) * 80);

              return (
                <div
                  key={opp.id}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="rounded-full bg-primary/20 border-2 border-primary hover:bg-primary/30 transition-all hover:scale-110 flex items-center justify-center"
                    style={{ width: size, height: size }}
                  >
                    <span className="text-xs font-bold text-primary">{opp.id}</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <Card className="p-3 shadow-xl">
                      <p className="font-semibold text-sm mb-1">{opp.title}</p>
                      <p className="text-xs text-muted-foreground mb-2">{opp.description}</p>
                      <div className="flex gap-2 text-xs">
                        <Badge variant="secondary">{opp.hoursSaved}h saved</Badge>
                        <Badge variant="outline">Impact: {opp.impact}</Badge>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp) => (
            <Card key={opp.id} className="p-6 hover-lift animate-fade-in">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{opp.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{opp.description}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-muted/30 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-success" />
                    <span className="text-xs text-muted-foreground">Hours Saved</span>
                  </div>
                  <p className="text-lg font-bold metric-number">{opp.hoursSaved}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Impact</span>
                  </div>
                  <p className="text-lg font-bold metric-number">{opp.impact}/10</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Effort</span>
                  </div>
                  <p className="text-lg font-bold metric-number">{opp.effort}/10</p>
                </div>
              </div>

              {/* Teams and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2 flex-wrap">
                    {opp.teams.map((team) => (
                      <Badge key={team} variant="secondary" className="text-xs">
                        {team}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
