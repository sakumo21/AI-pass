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
  TerminalSquare
} from "lucide-react"

const navigation = [
  { name: "Workspace", href: "/", icon: LayoutDashboard },
  { name: "Automations", href: "/automations", icon: Workflow },
  { name: "AI Agents / Skills", href: "/agents", icon: Bot },
  { name: "Marketplace", href: "/marketplace", icon: Store },
  { name: "Task Runner", href: "/task-runner", icon: TerminalSquare },
  { name: "Usage / Wallet", href: "/usage", icon: Wallet },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600 dark:text-indigo-400">
          <BrainCircuit className="h-6 w-6" />
          <span>AI-Pass</span>
        </Link>
      </div>
      
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = 
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors"
                )}
              >
                <item.icon
                  className={cn(
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300",
                    "mr-3 h-5 w-5 shrink-0 transition-colors"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
      
      <div className="mt-auto border-t border-zinc-200 p-4 dark:border-zinc-800">
        <Link
          href="/settings"
          className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 transition-colors"
        >
          <Settings className="mr-3 h-5 w-5 shrink-0 text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300" />
          Settings
        </Link>
      </div>
    </div>
  )
}
