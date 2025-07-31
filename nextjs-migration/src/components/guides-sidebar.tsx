"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, Clock, FileText, Layers, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

interface SidebarNavItem {
  title: string
  href: string
  icon?: React.ReactNode
}

interface GuidesSidebarProps {
  items: SidebarNavItem[]
  className?: string
  onItemClick?: () => void
}

export function GuidesSidebar({
  items,
  className,
  onItemClick,
}: GuidesSidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Guides
          </h2>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "transparent"
                )}
                onClick={onItemClick}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const defaultGuideNavItems: SidebarNavItem[] = [
  {
    title: "Overview",
    href: "/guides",
    icon: <Book className="h-4 w-4" />,
  },
  {
    title: "Tracking Time",
    href: "/guides/tracking-time",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    title: "JLC Ordering",
    href: "/guides/jlc-ordering",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    title: "OSHWLab Stars",
    href: "/guides/oshwlab-stars",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    title: "PCB Resources",
    href: "/guides/pcb-resources",
    icon: <FileText className="h-4 w-4" />,
  },
]