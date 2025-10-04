import { FileText, Download, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Reports & Export</h1>
          <p className="text-muted-foreground">
            Generate and share strategic reports with stakeholders
          </p>
        </div>

        <div className="space-y-6">
          {/* Interactive Report */}
          <Card className="p-8 hover-lift">
            <div className="flex items-start gap-6">
              <div className="rounded-lg bg-primary/10 p-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Interactive Report</h3>
                <p className="text-muted-foreground mb-4">
                  Share a live, interactive version of this platform with stakeholders. They can explore
                  insights, opportunities, and scenarios in real-time.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-gradient-primary hover-glow">
                    <Share2 className="h-4 w-4 mr-2" />
                    Generate Shareable Link
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                <Badge variant="secondary" className="mt-4">
                  Recommended for executives
                </Badge>
              </div>
            </div>
          </Card>

          {/* PDF Export */}
          <Card className="p-8 hover-lift">
            <div className="flex items-start gap-6">
              <div className="rounded-lg bg-accent/10 p-4">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">PDF Summary Report</h3>
                <p className="text-muted-foreground mb-4">
                  Export a comprehensive PDF summary including key metrics, insights, opportunities,
                  and implementation roadmap.
                </p>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    Include executive summary
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    Include detailed insights
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    Include opportunity analysis
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="rounded" />
                    Include implementation roadmap
                  </label>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </Card>

          {/* Presentation Deck */}
          <Card className="p-8 hover-lift">
            <div className="flex items-start gap-6">
              <div className="rounded-lg bg-success/10 p-4">
                <FileText className="h-8 w-8 text-success" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">PowerPoint Deck</h3>
                <p className="text-muted-foreground mb-4">
                  Generate a presentation-ready PowerPoint deck with visualizations and key findings
                  for board meetings and stakeholder presentations.
                </p>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export PPTX
                </Button>
                <Badge variant="secondary" className="ml-3">
                  Coming soon
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Tips */}
        <Card className="mt-8 p-6 bg-muted/30">
          <h4 className="font-semibold mb-3">Export Tips</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Interactive reports update in real-time as you modify the platform</li>
            <li>• PDF exports capture a snapshot of current data and analysis</li>
            <li>• Share interactive links with view-only access for stakeholders</li>
            <li>• Reports include attribution to source interviews and data</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
