"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_APPS } from "@/lib/mock-data"
import { AppWindow, ExternalLink, Play, Search, Settings, Grid2X2, List } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AppsPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  
  // For the prototype, we'll consider all 'Available' apps as 'Installed'
  const installedApps = MOCK_APPS.filter(app => app.status === "Available")

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            AI Apps <AppWindow className="h-7 w-7 text-indigo-500" />
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Access and manage your active AI-powered applications.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input 
              placeholder="Search apps..." 
              className="pl-9 pr-4 py-2 text-sm rounded-md border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-950 dark:border-zinc-800"
            />
          </div>
          <div className="flex rounded-md border border-zinc-200 dark:border-zinc-800 p-1">
            <Button 
              variant={view === "grid" ? "secondary" : "ghost"} 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setView("grid")}
            >
              <Grid2X2 className="h-4 w-4" />
            </Button>
            <Button 
              variant={view === "list" ? "secondary" : "ghost"} 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className={view === "grid" ? "grid md:grid-cols-3 lg:grid-cols-4 gap-6" : "flex flex-col gap-4"}>
        {installedApps.map((app) => (
          <Card key={app.id} className={`group hover:border-indigo-500/50 transition-all ${view === "list" ? "flex flex-row items-center p-4 gap-4" : ""}`}>
            {view === "grid" ? (
              <>
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-100 dark:border-indigo-500/20 mb-2">
                    {app.name.substring(0, 2).toUpperCase()}
                  </div>
                  <CardTitle className="text-lg">{app.name}</CardTitle>
                  <CardDescription className="line-clamp-2 text-xs">{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{app.category}</Badge>
                </CardContent>
                <div className="p-4 pt-0 flex gap-2">
                  <Link href={`/marketplace/${app.id}`} className="flex-1">
                    <Button className="w-full gap-2" size="sm">
                      <Play className="h-3 w-3" /> Launch
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="h-12 w-12 shrink-0 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-100 dark:border-indigo-500/20">
                  {app.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-50">{app.name}</h3>
                    <Badge variant="outline" className="text-[10px]">{app.category}</Badge>
                  </div>
                  <p className="text-xs text-zinc-500 truncate">{app.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/marketplace/${app.id}`}>
                    <Button className="gap-2" size="sm">
                      <ExternalLink className="h-3 w-3" /> Open
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </Card>
        ))}
        
        <Card className={`border-dashed flex flex-col items-center justify-center p-8 text-center bg-zinc-50/50 dark:bg-zinc-900/10 ${view === "list" ? "py-4 flex-row" : ""}`}>
          <div className={`h-12 w-12 rounded-full border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-4 ${view === "list" ? "mb-0 mr-4" : ""}`}>
            <Search className="h-5 w-5 text-zinc-400" />
          </div>
          <div className={view === "list" ? "text-left flex-1" : ""}>
            <p className="text-sm font-medium">Looking for more?</p>
            <p className="text-xs text-zinc-500">Discover new apps in the Marketplace.</p>
          </div>
          <Link href="/marketplace" className={view === "list" ? "ml-4" : "mt-4"}>
            <Button variant="outline" size="sm">Browse Marketplace</Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
