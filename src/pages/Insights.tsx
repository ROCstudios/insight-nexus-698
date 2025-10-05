import { useState } from "react";
import { Search, TrendingUp, Clock, Users, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const insights = [
  {
    id: 1,
    title: "Connect to Data Sources & Develop Ranking System",
    metric: "Relevevancy Ranking System IP",
    impact: "high",
    category: "Research",
    description: "For every needed data point of the Relevency Ranking System we'll research, test, and validate data sources to ensure accuracy and reliability. These data sources will be sraped and saved locally. Regular calls with be scheduled to decide on the exact scoring and ranking method we'll use to power the entire applicaiton.",
    quote: "The Relevency Ranking System will use a combination of calculations in relation to BTC being the unit of mesure. We will need to integrate with the Github API and others. Apify Bots will be employed for additional market data..",
    source: "Tech Talk",
    teams: ["IP Development", "Databases", "Apify", "Data Science", "Web Scraping", "API Integration", "Python"],
  },
  {
    id: 2,
    title: "Backend API Development. Frontend Designs",
    metric: "Receive Rankings In Real Time",
    impact: "high",
    category: "Development",
    description: "With the Ranking System complete we'll need to make this accessible and easy to use. I'll develop a backend API that will power the entire application and make it easy to integrate with other systems. In addition, I'll design a beautiful frontend that is intuitive and user-friendly.",
    quote: "With the API complete and hostied we'll be able to access all of the information we need using simple API calls via our simple UI or any other HTTP tool",
    source: "Tech Talk",
    teams: ["Python", "Flask", "Google Cloud", "Postman", "Figma"],
  },
  {
    id: 3,
    title: "Frontend Dashboard & Details",
    metric: "Beautiful, Intuitive UI",
    impact: "high",
    category: "Frontend",
    description: "The frontend will be the face of the application and the first thing users will see. I'll design a beautiful dashboard that is easy to navigate and provides all the information users need at a glance. In addition, I'll develop detailed views for each data point that provide more in-depth information and insights.",
    quote: "We'll need to understand the existing tech stack of your website for a seamless integration. We plan to use React, TailwindCSS, and Typescript for a responsive and fast user experience.",
    source: "Tech Talk",
    teams: ["React", "TailwindCSS", "TypeScript", "Figma" ],
  },
  {
    id: 4,
    title: "User Acceptance Testing & Site Integration",
    metric: "Optional Feedback Loop",
    impact: "low",
    category: "Customer Satisfaction",
    description: "Before launching the application, you'll get a copy of the app to ensure that everything is working as expected and that you are satisfied with the experience. I'll incorporate your feedback and make any necessary adjustments before launching the application to the public.",
    quote: "I'll publish a staging build (not yet public) with full access that you'll be able to use in real-time with synced data from trusted sources. Code will be ready to add to your site once you approve of the UI and UX. ",
    source: "Tech Talk",
    teams: ["Testing", "Quality Assurance", "Customer Feedback", "Deployment", "Documentation"],
  }
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
          <h1 className="text-3xl font-bold mb-2">Development Milestones</h1>
          <p className="text-muted-foreground">
            Explore the exact steps that we're going to take to build you a comprehensice app that's unlike anything else out there.
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
                <p className="text-xs text-muted-foreground">Total Milestones</p>
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
                <p className="text-2xl font-bold metric-number">100+</p>
                <p className="text-xs text-muted-foreground">Hours of Development</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-warning/10 p-2">
                <Users className="h-4 w-4 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold metric-number">37</p>
                <p className="text-xs text-muted-foreground">Total Features</p>
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
                  <p className="text-xs text-muted-foreground">Guaranteed Result</p>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-xs text-muted-foreground">— {insight.source}</p>
                <p className="text-sm italic mb-2">"{insight.quote}"</p>
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
