"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { cn } from "@/lib/utils"

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="flex h-screen w-full bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-950 dark:text-zinc-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-zinc-950/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ease-in-out lg:relative lg:translate-x-0",
        isCollapsed ? "lg:w-20" : "lg:w-72",
        isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full"
      )}>
        <Sidebar 
          onClose={() => setIsSidebarOpen(false)} 
          isCollapsed={isCollapsed} 
          onCollapse={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header 
          onMenuClick={() => setIsSidebarOpen(true)} 
          isCollapsed={isCollapsed}
          onCollapse={() => setIsCollapsed(!isCollapsed)}
        />
        <main className="flex-1 overflow-y-auto bg-zinc-50/50 dark:bg-zinc-950 p-6 lg:p-10">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
