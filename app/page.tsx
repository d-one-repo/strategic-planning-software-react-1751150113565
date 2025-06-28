import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, DollarSign, Target, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { kpis, recentInitiatives, upcomingMilestones } from "@/lib/data"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Strategic Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Igor. Here's your company performance overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                {kpi.change > 0 ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={kpi.change > 0 ? "text-green-500" : "text-red-500"}>
                  {kpi.change > 0 ? "+" : ""}
                  {kpi.change}%
                </span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Strategic Initiatives */}
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Strategic Initiatives</CardTitle>
                <CardDescription>Current progress on key company initiatives</CardDescription>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/initiatives">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentInitiatives.map((initiative) => (
              <div key={initiative.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{initiative.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {initiative.department} • Due {initiative.dueDate}
                    </p>
                  </div>
                  <Badge
                    variant={
                      initiative.status === "On Track"
                        ? "default"
                        : initiative.status === "At Risk"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {initiative.status}
                  </Badge>
                </div>
                <Progress value={initiative.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">{initiative.progress}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Milestones */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Key dates and deliverables</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingMilestones.map((milestone) => (
              <div key={milestone.id} className="flex items-center space-x-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{milestone.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {milestone.date} • {milestone.department}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and navigation shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/initiatives">
                <Target className="h-6 w-6" />
                <span>Manage Initiatives</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/projects">
                <Users className="h-6 w-6" />
                <span>View Projects</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Link href="/departments">
                <TrendingUp className="h-6 w-6" />
                <span>Department Performance</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <DollarSign className="h-6 w-6" />
              <span>Budget Review</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
