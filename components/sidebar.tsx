"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Target, Briefcase, Users, Settings, BarChart3 } from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Strategic Initiatives",
    href: "/initiatives",
    icon: Target,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    name: "Departments",
    href: "/departments",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r">
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/nativeunion.com" alt="Native Union" className="h-8 w-8 rounded" />
          <div>
            <div className="font-semibold">Native Union</div>
            <div className="text-xs text-muted-foreground">Strategic Planning</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Button
              key={item.name}
              asChild
              variant={isActive ? "secondary" : "ghost"}
              className={cn("w-full justify-start", isActive && "bg-secondary")}
            >
              <Link href={item.href}>
                <item.icon className="mr-3 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          )
        })}
      </nav>
    </div>
  )
}
