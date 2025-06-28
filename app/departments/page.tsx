import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Briefcase } from "lucide-react"
import { departments } from "@/lib/data"

export default function DepartmentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Department Performance</h1>
        <p className="text-muted-foreground">Overview of performance metrics across all departments</p>
      </div>

      {/* Department Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <dept.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Team Size</span>
                  </div>
                  <div className="text-lg font-semibold">{dept.teamSize}</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Active Projects</span>
                  </div>
                  <div className="text-lg font-semibold">{dept.activeProjects}</div>
                </div>
              </div>

              {/* Budget Utilization */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Budget Utilization</span>
                  <span className="text-sm text-muted-foreground">{dept.budgetUtilization}%</span>
                </div>
                <Progress value={dept.budgetUtilization} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  ${dept.budgetUsed.toLocaleString()} of ${dept.totalBudget.toLocaleString()}
                </div>
              </div>

              {/* Performance Score */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Performance Score</span>
                  <Badge
                    variant={
                      dept.performanceScore >= 90
                        ? "default"
                        : dept.performanceScore >= 70
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {dept.performanceScore}/100
                  </Badge>
                </div>
                <Progress value={dept.performanceScore} className="h-2" />
              </div>

              {/* Key Initiatives */}
              <div className="space-y-2">
                <div className="text-sm font-medium">Key Initiatives</div>
                <div className="space-y-1">
                  {dept.keyInitiatives.map((initiative, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{initiative.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {initiative.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Head */}
              <div className="space-y-1 pt-2 border-t">
                <div className="text-xs text-muted-foreground">Department Head</div>
                <div className="text-sm font-medium">{dept.head}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Department Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Department Comparison</CardTitle>
          <CardDescription>Comparative analysis of key performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {departments.map((dept) => (
              <div key={dept.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                      <dept.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{dept.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {dept.teamSize} members • {dept.activeProjects} projects
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{dept.performanceScore}/100</div>
                    <div className="text-xs text-muted-foreground">Performance</div>
                  </div>
                </div>
                <Progress value={dept.performanceScore} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
