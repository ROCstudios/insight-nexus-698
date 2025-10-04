import { Users, Clock, AlertCircle, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/MetricCard";

const teams = [
  {
    id: 1,
    name: "Case Teams",
    members: 45,
    hoursSaved: 680,
    painPoints: [
      {
        title: "Document Review Overhead",
        description: "4-6 hours per case spent on manual document review",
        severity: "high",
        quotes: ["We spend too much time just reading files", "Document prep is our biggest bottleneck"],
      },
      {
        title: "Research Time",
        description: "Extensive time spent on preliminary case research",
        severity: "medium",
        quotes: ["Research phase takes 2-3 days minimum"],
      },
    ],
    opportunities: ["AI Document Analysis Tool", "Legal Research Assistant"],
  },
  {
    id: 2,
    name: "Research Team",
    members: 12,
    hoursSaved: 280,
    painPoints: [
      {
        title: "Manual Precedent Search",
        description: "Time-intensive process of finding relevant case law",
        severity: "high",
        quotes: ["Finding similar cases is like finding a needle in a haystack"],
      },
      {
        title: "Synthesis Time",
        description: "Summarizing and synthesizing research takes hours",
        severity: "medium",
        quotes: ["We do the same type of research over and over"],
      },
    ],
    opportunities: ["Legal Research Assistant", "Case Precedent Matching"],
  },
  {
    id: 3,
    name: "Corporate Team",
    members: 28,
    hoursSaved: 420,
    painPoints: [
      {
        title: "Contract Review",
        description: "Manual review of contracts is extremely time-consuming",
        severity: "high",
        quotes: ["Contract review is our biggest time sink"],
      },
      {
        title: "Compliance Checks",
        description: "Manual compliance verification across documents",
        severity: "medium",
        quotes: ["Compliance review adds days to every deal"],
      },
    ],
    opportunities: ["Contract Review System", "Automated Compliance Checker"],
  },
  {
    id: 4,
    name: "Client Services",
    members: 18,
    hoursSaved: 180,
    painPoints: [
      {
        title: "Repetitive Client Inquiries",
        description: "Same questions asked repeatedly by clients",
        severity: "medium",
        quotes: ["We answer the same questions every day"],
      },
      {
        title: "Status Update Requests",
        description: "Manual updates take time away from billable work",
        severity: "low",
        quotes: ["Status updates interrupt our workflow"],
      },
    ],
    opportunities: ["Client Portal Enhancement", "AI Chatbot"],
  },
];

export default function Teams() {
  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Team Analysis</h1>
          <p className="text-muted-foreground">
            Deep dive into team-specific pain points and AI opportunities
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Teams"
            value={teams.length}
            icon={Users}
          />
          <MetricCard
            title="Team Members"
            value={teams.reduce((sum, team) => sum + team.members, 0)}
            icon={Users}
          />
          <MetricCard
            title="Total Hours Saved"
            value={`${teams.reduce((sum, team) => sum + team.hoursSaved, 0)}`}
            subtitle="per month"
            icon={Clock}
            trend="up"
          />
          <MetricCard
            title="Pain Points"
            value={teams.reduce((sum, team) => sum + team.painPoints.length, 0)}
            icon={AlertCircle}
          />
        </div>

        {/* Teams List */}
        <div className="space-y-6">
          {teams.map((team) => (
            <Card key={team.id} className="p-8 hover-lift animate-fade-in">
              {/* Team Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{team.name}</h2>
                    <p className="text-muted-foreground">{team.members} team members</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold metric-number text-success">{team.hoursSaved}</p>
                  <p className="text-sm text-muted-foreground">hours saved/month</p>
                </div>
              </div>

              {/* Pain Points */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  Pain Points
                </h3>
                <div className="space-y-4">
                  {team.painPoints.map((pain, index) => (
                    <div
                      key={index}
                      className="bg-muted/30 rounded-lg p-4 border-l-4"
                      style={{
                        borderColor:
                          pain.severity === "high"
                            ? "hsl(var(--destructive))"
                            : pain.severity === "medium"
                            ? "hsl(var(--warning))"
                            : "hsl(var(--muted-foreground))",
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{pain.title}</h4>
                        <Badge
                          variant={pain.severity === "high" ? "destructive" : "secondary"}
                          className={
                            pain.severity === "medium"
                              ? "bg-warning text-warning-foreground"
                              : ""
                          }
                        >
                          {pain.severity} priority
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{pain.description}</p>
                      
                      {/* Quotes */}
                      <div className="space-y-2">
                        {pain.quotes.map((quote, qIndex) => (
                          <div key={qIndex} className="bg-background rounded px-3 py-2">
                            <p className="text-xs italic">"{quote}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Opportunities */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Recommended AI Opportunities
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {team.opportunities.map((opp, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-sm bg-primary/5 hover:bg-primary/10 cursor-pointer transition-colors"
                    >
                      {opp}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
