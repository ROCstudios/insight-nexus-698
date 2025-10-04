import { useState } from "react";
import { Sparkles, Clock, DollarSign, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MetricCard } from "@/components/MetricCard";
import { Button } from "@/components/ui/button";

const allOpportunities = [
  { id: 1, name: "AI Document Analysis", hoursSaved: 480, cost: 15000, team: "Case Teams" },
  { id: 2, name: "Legal Research Assistant", hoursSaved: 280, cost: 12000, team: "Research" },
  { id: 3, name: "Contract Review System", hoursSaved: 350, cost: 18000, team: "Corporate" },
  { id: 4, name: "Email Draft Assistant", hoursSaved: 120, cost: 5000, team: "All Teams" },
  { id: 5, name: "Billing Automation", hoursSaved: 200, cost: 8000, team: "Finance" },
  { id: 6, name: "Client Portal", hoursSaved: 150, cost: 20000, team: "Client Services" },
];

export default function Simulator() {
  const [selectedOpportunities, setSelectedOpportunities] = useState<number[]>([1, 2, 3]);

  const toggleOpportunity = (id: number) => {
    setSelectedOpportunities((prev) =>
      prev.includes(id) ? prev.filter((oppId) => oppId !== id) : [...prev, id]
    );
  };

  const selectRecommended = () => {
    setSelectedOpportunities([1, 2, 3, 4, 5]); // Top 5 by impact
  };

  const selectAll = () => {
    setSelectedOpportunities(allOpportunities.map((opp) => opp.id));
  };

  const clearAll = () => {
    setSelectedOpportunities([]);
  };

  // Calculate totals
  const totalHoursSaved = allOpportunities
    .filter((opp) => selectedOpportunities.includes(opp.id))
    .reduce((sum, opp) => sum + opp.hoursSaved, 0);

  const totalCost = allOpportunities
    .filter((opp) => selectedOpportunities.includes(opp.id))
    .reduce((sum, opp) => sum + opp.cost, 0);

  const hourlyRate = 300; // Average billable rate
  const monthlyValue = totalHoursSaved * hourlyRate;
  const roi = totalCost > 0 ? ((monthlyValue * 12 - totalCost) / totalCost) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            Scenario Simulator
          </h1>
          <p className="text-muted-foreground">
            Plan and visualize the impact of different AI implementation scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Opportunity Selection */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Select Opportunities</h2>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={clearAll}>
                    Clear
                  </Button>
                  <Button size="sm" variant="outline" onClick={selectRecommended}>
                    Top 5
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {allOpportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="flex items-start gap-3 p-4 rounded-lg border transition-all hover:bg-muted/30"
                  >
                    <Switch
                      id={`opp-${opp.id}`}
                      checked={selectedOpportunities.includes(opp.id)}
                      onCheckedChange={() => toggleOpportunity(opp.id)}
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={`opp-${opp.id}`}
                        className="text-sm font-medium cursor-pointer"
                      >
                        {opp.name}
                      </Label>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {opp.hoursSaved}h
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          ${(opp.cost / 1000).toFixed(0)}k
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Impact Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetricCard
                title="Total Hours Saved"
                value={totalHoursSaved.toLocaleString()}
                subtitle="per month"
                icon={Clock}
                trend="up"
              />
              <MetricCard
                title="Monthly Value"
                value={`$${(monthlyValue / 1000).toFixed(0)}k`}
                subtitle="at $300/hour"
                icon={DollarSign}
                trend="up"
              />
              <MetricCard
                title="Implementation Cost"
                value={`$${(totalCost / 1000).toFixed(0)}k`}
                subtitle="one-time"
                icon={TrendingUp}
              />
              <MetricCard
                title="12-Month ROI"
                value={`${roi.toFixed(0)}%`}
                subtitle="return on investment"
                icon={TrendingUp}
                trend={roi > 0 ? "up" : "neutral"}
              />
            </div>

            {/* Timeline Visualization */}
            <Card className="p-8 bg-gradient-card">
              <h3 className="text-xl font-bold mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                {selectedOpportunities.length > 0 ? (
                  <div className="space-y-3">
                    {allOpportunities
                      .filter((opp) => selectedOpportunities.includes(opp.id))
                      .map((opp, index) => (
                        <div key={opp.id} className="flex items-center gap-4">
                          <div className="w-24 text-sm font-medium text-muted-foreground">
                            Week {index * 4 + 1}-{index * 4 + 4}
                          </div>
                          <div className="flex-1">
                            <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-semibold">{opp.name}</p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {opp.team}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold text-success">
                                    +{opp.hoursSaved}h
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    ${(opp.cost / 1000).toFixed(0)}k
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select opportunities to see implementation timeline</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Team Impact Breakdown */}
            {selectedOpportunities.length > 0 && (
              <Card className="p-8 bg-gradient-card">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Team Impact Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(
                    allOpportunities
                      .filter((opp) => selectedOpportunities.includes(opp.id))
                      .reduce((acc, opp) => {
                        acc[opp.team] = (acc[opp.team] || 0) + opp.hoursSaved;
                        return acc;
                      }, {} as Record<string, number>)
                  ).map(([team, hours]) => (
                    <div key={team} className="bg-muted/30 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">{team}</p>
                      <p className="text-2xl font-bold metric-number text-primary">
                        {hours}
                        <span className="text-sm font-normal text-muted-foreground ml-1">
                          hours/month
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
