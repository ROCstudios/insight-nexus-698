import { Users, Clock, AlertCircle, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teams = [
  {
    id: 1,
    name: "Crypto Relevancy Ranking System Calculated From Data Sources. No Frontend.",
    cost: 2000,
    painPoints: [
      {
        "title": "Research and reliably fetch data sources and save them to our cloud database.",
        "description": "We will set up a reliable pull of the key data at regular intervals and store it in one place. This creates a clean history so we can track changes over time and run simple backtests. It makes the score usable inside your app and reports.",
        "severity": "medium"
      },
      {
        "title": "Integrate with APIs like GitHub and social communities.",
        "description": "We will connect to GitHub and major social platforms to collect the basics we need. Mentions, engagement, and project activity. We will keep access keys safe and follow each platform’s rules so the feeds stay stable.",
        "severity": "medium"
      },
      {
        "title": "Develop our Crypto Relevancy Ranking System. Test against benchmarks.",
        "description": "We will turn raw numbers into clear scores and one simple 0 to 100. We will smooth out noise so results do not jump hour to hour. Then we will compare against simple baselines to make sure the score is steady and useful.",
        "severity": "high"
      },
    ],
    opportunities: [
      "Faster development",
      "Portable",
    ],
  },
  {
    id: 2,
    name: "Complete Crypto Relevancy Ranking API With Real-Time Rankings. Simple Frontend.",
    cost: 2750,
    painPoints: [
      {
        title: "Crypto Relevancy Ranking System Calculated From Data Sources",
        description: "Everything from the previous package(s)",
        severity: "high",
      },
      {
        "title": "Production level backend architecture initialized for scalability and use with front-end applications.",
        "description": "We will stand up a secure, scalable backend that stores clean history, schedules data pulls, and serves results quickly. This includes cloud database setup, job scheduling, basic monitoring and alerts, and safe key management so the system is ready for growth.",
        "severity": "medium"
      },
      {
        "title": "Real-Time scoring enabled with frequent and reactive updates to our data sources",
        "description": "Enable frequent updates so scores refresh on a reliable cadence, with the option to react faster when key signals spike. Data is smoothed to avoid jitter and each asset shows a freshness indicator so you know when it last updated.",
        "severity": "medium"
      },
      {
        "title": "Reliable and complete API endpoints. Extensive documentation for other developers. Thurough network security.",
        "description": "Provide stable endpoints for rankings, asset details, history, and search with clear examples and usage limits. Documentation will cover request and response shapes, common filters, and error handling. Security includes HTTPS, keys, rate limits, and basic abuse protection.",
        "severity": "high"
      },
      {
        "title": "Emeddable frontend dashboard and details view..",
        "description": "Clean design system with thoughtful design that seamlessly shows the frontend.",
        "severity": "medium"
      }
    ],
    opportunities: ["Responsive", "Accurate", "Affordable"],
  },
  {
    id: 3,
    name: "Complete Package. Complete Real-Time API & Beautiful Modern, Reactive Frontend",
    cost: 5500,
    painPoints: [
      {
        title: "Complete Crypto Relevancy Ranking API With Real-Time Rankings",
        description: "Everything from the previous package(s)",
        severity: "high",
      },
      {
        "title": "Modern frontend development using the latest platforms to seamlessly integrate into your existing site.",
        "description": "Deliver an embeddable, responsive widget that drops into your current site and loads fast. It will show the rank table, asset drawer, and simple filters, with a lightweight install on WordPress or a direct script include for other setups.",
        "severity": "high"
      },
      {
        "title": "Design, UI, and one-of-a-kind user experience priority. Animations and custom digital assets.",
        "description": "Clean design system with thoughtful motion and custom icons so the score is easy to read and remember. Empty states, tooltips, and accessibility basics are included, alongside performance tuning for smooth interactions.",
        "severity": "medium"
      },
      {
        "title": "Side-by-side compare view",
        "description": "Pick any two projects and see their scores, pillars, and key signals lined up next to each other. Fast, simple comparisons your team can use in stories, calls, and decks.",
        "severity": "high"
      },
      {
        "title": "Custom branded embeds and themes",
        "description": "Match the look to your brand with your logo, colors, and dark mode. Generate ready-to-paste embeds for posts and partner pages so everything feels native.",
        "severity": "medium"
      },
      {
        "title": "Admin console for complete control of the scoring parameters and display of the app",
        "description": "Tweak weights, fix ticker names, and decide what shows on the page. Publish changes with one click and see a clear history of what changed and why.",
        "severity": "high"
      },
      {
        "title": "One-click data downloads for your team and partners",
        "description": "Export today’s rankings or a date range to CSV or JSON in seconds. Perfect for decks, reports, and sharing with media or sponsor partners without extra work.",
        "severity": "high"
      }
    ],
    opportunities: ["Engaging user experience", "Top tier designs", "Industry leading application"],
  },
  {
    id: 4,
    name: "Complete Package. Action Takers Offer (Only Available Until October 7)",
    cost: 3900,
    painPoints: [
      {
        title: "Complete Package. Complete Real-Time API & Beautiful Modern, Reactive Frontend",
        description: "Everything from the previous package(s)",
        severity: "high",
      },
      {
        title: "Big discount for clients that take action and want to win in life",
        description: "I, personally, prefer to work with people who make decisions. People who want to go somewhere in life and achieve things. Working with people like myself means that communication will be smoother and results will greatly exceed expectations. To work with these people I'm willing to discount my work.",
        severity: "low",
        quotes: ["Status updates interrupt our workflow"],
      },
    ],
    opportunities: ["Everything included", "One hell of a deal"],
  },
];

export default function Teams() {
  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Scroll to the bottom and pick the option that's best for you.</h1>
          <p className="text-muted-foreground">
            Build once. That's our motto. We'll recommend a few options with a few prices for what we have in mind for the price below OR select any of the combined features for custom pricing.
          </p>
        </div>

        {/* Teams List */}
        <div className="space-y-6">
          {teams.map((team) => (
            <Card key={team.id} className="p-8 hover-lift animate-fade-in">
              {/* Team Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{team.name}</h2>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-3xl font-bold metric-number ${team.cost === 3900 ? 'text-success' : 'text-default'}`}>${team.cost}
                  </p>
                </div>
              </div>

              {/* Pain Points */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  What it includes
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
                          {pain.severity} difficulty
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{pain.description}</p>
                      
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Opportunities */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Benefits of this package
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
