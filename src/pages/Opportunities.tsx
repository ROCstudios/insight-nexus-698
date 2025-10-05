import { useState } from "react";
import { Target, Clock, Zap, Users, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const opportunities = [
  {
    id: 1,
    title: "The \"I Can Do It Cheaper\" Developer",
    description: "Haling from a low-cost region, this developer claims to know everything but offers to do it for a fraction of the cost. Makes me think of the age of addage \"You get what you pay for.\"",
    impact: 2,
    effort: 2,
    hoursSaved: 9,
    teams: ["App crashes", "Takes call with shirt off", "Never delivers", "Asks for more money"],
  },
  {
    id: 2,
    title: "The Detached Agency Owner",
    description: "Runs a small agency with a team of freelancers. Promises big results but often misses deadlines and lacks communication. They seem more interested in upselling than delivering value.",
    impact: 6,
    effort: 4,
    hoursSaved: 2,
    teams: ["Great profile picture", "Blurred background on calls", "Salesman not coder", "Lacks communication", "High prices"],
  },
  {
    id: 3,
    title: "The Slimy Professional",
    description: "Seems to check all of the boxes using buzzwords and jargon to impress. As soon as you agree to a hire they start adding on extra costs and fees. You get the feeling they're more interested in making money than doing a good job.",
    impact: 5,
    effort: 7,
    hoursSaved: 6,
    teams: ["Expert", "Shares past apps", "Asks for upfront payment", "Adds on fees", "Offers to do it faster for more money"],
  },
  {
    id: 4,
    title: "The Faceless Freelancer",
    description: "Shares incredible case studies and a long list of skills but has no real online presence or reviews. They refuse to take calls saying they're busy with other clients or travelling at the moment. You can't help but wonder if they're even real.",
    impact: 3,
    effort: 3,
    hoursSaved: 2,
    teams: ["No voice no video", "No reviews", "No online presence", "Asks for payment upfront"],
  },
  {
    id: 5,
    title: "The Ghost",
    description: "The perfect candidate on paper but once hired they disappear. Missed deadlines, no communication, and excuses for everything. You start to wonder if they ever intended to do the work at all.",
    impact: 0,
    effort: 0,
    hoursSaved: 2,
    teams: ["Great profile", "Perfect reviews", "Misses deadlines", "No communication", "Disappears after hire"],
  },
  {
    id: 6,
    title: "The Best On Upwork With 100 Years of Experience",
    description: "Promises the world with a perfect profile and glowing reviews. But once hired they turn out to be a one-person operation juggling multiple clients. The quality of work suffers and deadlines are missed.",
    impact: 5,
    effort: 5,
    hoursSaved: 150,
    teams: ["Bold claims", "Perfect profile", "100% job success", "Overbooked", "Misses deadlines"],
  },
];

export default function Opportunities() {
  const [filterTeam, setFilterTeam] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesTeam = filterTeam === "all" || opp.teams.some(t => t.toLowerCase().includes(filterTeam.toLowerCase()));
    const matchesCategory = filterCategory === "all" ;
    return matchesTeam && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Here Are Your Alternatives If You Don't Work With Me</h1>
          <p className="text-muted-foreground">
            Remember, hiring the wrong freelancer or agency is going to double or triple your costs and you'll have to go through the entire hiring process again.
          </p>
        </div>

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
                    <span className="text-xs text-muted-foreground">Weeks To Delivery</span>
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
