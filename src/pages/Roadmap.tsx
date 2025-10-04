import { Calendar, Clock, Target, Users, CheckCircle2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const phases = [
  {
    id: 1,
    name: "Phase 1: Quick Wins",
    timeline: "Weeks 1-8",
    status: "in-progress",
    opportunities: [
      {
        name: "Email Draft Assistant",
        team: "All Teams",
        hoursSaved: 120,
        status: "completed",
      },
      {
        name: "Billing Automation",
        team: "Finance",
        hoursSaved: 200,
        status: "in-progress",
      },
    ],
  },
  {
    id: 2,
    name: "Phase 2: Core Automation",
    timeline: "Weeks 9-20",
    status: "planned",
    opportunities: [
      {
        name: "AI Document Analysis",
        team: "Case Teams",
        hoursSaved: 480,
        status: "planned",
      },
      {
        name: "Legal Research Assistant",
        team: "Research",
        hoursSaved: 280,
        status: "planned",
      },
      {
        name: "Contract Review System",
        team: "Corporate",
        hoursSaved: 350,
        status: "planned",
      },
    ],
  },
  {
    id: 3,
    name: "Phase 3: Advanced Features",
    timeline: "Weeks 21-32",
    status: "planned",
    opportunities: [
      {
        name: "Client Portal Enhancement",
        team: "Client Services",
        hoursSaved: 150,
        status: "planned",
      },
      {
        name: "Predictive Analytics",
        team: "Strategy",
        hoursSaved: 180,
        status: "planned",
      },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-success text-success-foreground";
    case "in-progress":
      return "bg-accent text-accent-foreground";
    case "planned":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-4 w-4" />;
    case "in-progress":
      return <Clock className="h-4 w-4" />;
    case "planned":
      return <Target className="h-4 w-4" />;
    default:
      return <Target className="h-4 w-4" />;
  }
};

export default function Roadmap() {
  const totalHoursSaved = phases
    .flatMap((phase) => phase.opportunities)
    .reduce((sum, opp) => sum + opp.hoursSaved, 0);

  const completedHours = phases
    .flatMap((phase) => phase.opportunities)
    .filter((opp) => opp.status === "completed")
    .reduce((sum, opp) => sum + opp.hoursSaved, 0);

  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Implementation Roadmap
          </h1>
          <p className="text-muted-foreground">
            Phased approach to AI implementation with timeline and dependencies
          </p>
        </div>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Total Opportunities</p>
            </div>
            <p className="text-3xl font-bold metric-number">
              {phases.flatMap((p) => p.opportunities).length}
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-success/10 p-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Completed</p>
            </div>
            <p className="text-3xl font-bold metric-number">
              {phases.flatMap((p) => p.opportunities).filter((o) => o.status === "completed").length}
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-accent/10 p-2">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">In Progress</p>
            </div>
            <p className="text-3xl font-bold metric-number">
              {phases.flatMap((p) => p.opportunities).filter((o) => o.status === "in-progress").length}
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Hours Target</p>
            </div>
            <p className="text-3xl font-bold metric-number">{totalHoursSaved}</p>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.id} className="relative pl-20">
                {/* Phase marker */}
                <div className="absolute left-0 top-6 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                  {phaseIndex + 1}
                </div>

                {/* Phase card */}
                <Card className="p-8 hover-lift animate-fade-in">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{phase.name}</h2>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {phase.timeline}
                        </Badge>
                        <Badge className={getStatusColor(phase.status)}>
                          {getStatusIcon(phase.status)}
                          <span className="ml-1 capitalize">{phase.status.replace("-", " ")}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold metric-number text-primary">
                        {phase.opportunities.reduce((sum, opp) => sum + opp.hoursSaved, 0)}
                      </p>
                      <p className="text-sm text-muted-foreground">hours/month</p>
                    </div>
                  </div>

                  {/* Opportunities */}
                  <div className="space-y-3">
                    {phase.opportunities.map((opp, oppIndex) => (
                      <div
                        key={oppIndex}
                        className="bg-muted/30 rounded-lg p-4 border-l-4"
                        style={{
                          borderColor:
                            opp.status === "completed"
                              ? "hsl(var(--success))"
                              : opp.status === "in-progress"
                              ? "hsl(var(--accent))"
                              : "hsl(var(--border))",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            {getStatusIcon(opp.status)}
                            <div className="flex-1">
                              <h4 className="font-semibold">{opp.name}</h4>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {opp.team}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {opp.hoursSaved} hours saved
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(opp.status)} variant="secondary">
                            {opp.status.replace("-", " ")}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Footer */}
        <Card className="mt-12 p-8 bg-gradient-primary text-primary-foreground">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Expected Outcomes</h3>
              <p className="text-lg opacity-95">
                Upon completion of all phases, the organization will save {totalHoursSaved} hours monthly,
                valued at approximately ${((totalHoursSaved * 300) / 1000).toFixed(0)}k/month at standard
                billable rates.
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold metric-number">{completedHours}</p>
              <p className="text-sm opacity-90">hours saved so far</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
