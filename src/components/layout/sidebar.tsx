"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Workflow, 
  Bot, 
  Store, 
  Wallet, 
  Settings,
  BrainCircuit,
  TerminalSquare,
  X,
  AppWindow,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

const navigation = [
  { name: "Workspace", href: "/", icon: LayoutDashboard },
  { name: "Automations", href: "/automations", icon: Workflow },
  { name: "AI Agents", href: "/agents", icon: Bot },
  { name: "AI Apps", href: "/apps", icon: AppWindow },
  { name: "Marketplace", href: "/marketplace", icon: Store },
  { name: "Task Runner", href: "/task-runner", icon: TerminalSquare },
  { name: "Usage / Wallet", href: "/usage", icon: Wallet },
]

interface SidebarProps {
  onClose?: () => void
  isCollapsed?: boolean
  onCollapse?: () => void
}

export function Sidebar({ onClose, isCollapsed = false, onCollapse }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn(
      "flex h-full w-full flex-col border-r border-zinc-200/60 bg-white/50 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/50 transition-all duration-300",
      isCollapsed ? "items-center" : ""
    )}>
      <div className={cn(
        "flex h-16 shrink-0 items-center justify-between px-6 transition-all",
        isCollapsed ? "px-0 justify-center w-full" : "px-6"
      )}>
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400 group"
          onClick={onClose}
        >
          <div className="bg-indigo-600 dark:bg-indigo-500 rounded-lg p-1.5 transition-transform group-hover:rotate-12">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && <span className="text-gradient">AI-Pass</span>}
        </Link>
        {onClose && !isCollapsed && (
          <button 
            onClick={onClose}
            className="lg:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      
      <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
        <nav className={cn("flex-1 space-y-2", isCollapsed ? "px-2" : "px-4")}>
          {navigation.map((item) => {
            const isActive = 
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                title={isCollapsed ? item.name : undefined}
                className={cn(
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 shadow-[inset_4px_0_0_0_#4f46e5] dark:shadow-[inset_4px_0_0_0_#818cf8]"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100",
                  "group flex items-center rounded-xl py-2.5 text-sm font-semibold transition-all duration-300",
                  isCollapsed ? "justify-center px-0 w-12" : "px-4"
                )}
              >
                <item.icon
                  className={cn(
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
                    "h-5 w-5 shrink-0 transition-all duration-300 group-hover:scale-110",
                    isCollapsed ? "" : "mr-3"
                  )}
                  aria-hidden="true"
                />
                {!isCollapsed && item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      
      <div className={cn("mt-auto flex flex-col gap-2 p-4", isCollapsed ? "items-center" : "")}>
        <Link
          href="/settings"
          onClick={onClose}
          title={isCollapsed ? "Settings" : undefined}
          className={cn(
            pathname === "/settings"
              ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
              : "text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800",
            "group flex items-center rounded-xl py-2.5 text-sm font-semibold transition-all",
            isCollapsed ? "justify-center w-12 px-0" : "px-4"
          )}
        >
          <Settings className={cn(
            "h-5 w-5 shrink-0 text-zinc-400 group-hover:text-indigo-500 transition-colors",
            isCollapsed ? "" : "mr-3"
          )} />
          {!isCollapsed && "Settings"}
        </Link>

        {onCollapse && (
          <button
            onClick={onCollapse}
            className="hidden lg:flex items-center justify-center w-full rounded-xl py-2.5 text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : (
              <div className="flex items-center gap-3 px-4 w-full">
                <ChevronLeft className="h-5 w-5" />
                <span className="text-sm font-semibold">Collapse</span>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
