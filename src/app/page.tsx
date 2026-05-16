"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_RECENT_ACTIVITY, MOCK_USAGE_STATS } from "@/lib/mock-data"
import { ArrowRight, Bot, Play, Plus, Store } from "lucide-react"
import Link from "next/link"

export default function WorkspaceDashboard() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Welcome back, Ziad
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Here's what's happening in your AI workspace today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/task-runner" className="block">
          <Card className="hover:border-indigo-500/50 hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Run AI Task</CardTitle>
              <Play className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Execute a quick task like summarization or extraction.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/marketplace/invoice-ai" className="block">
          <Card className="hover:border-emerald-500/50 hover:shadow-md transition-all cursor-pointer h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Invoice AI</CardTitle>
              <Bot className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Process your latest pending invoices.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Card className="opacity-60 grayscale cursor-not-allowed">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Create Automation</CardTitle>
            <Plus className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Build a multi-step AI workflow (Coming soon).
            </p>
          </CardContent>
        </Card>
        <Link href="/marketplace" className="block">
          <Card className="hover:border-violet-500/50 hover:shadow-md transition-all cursor-pointer h-full bg-indigo-50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-indigo-900 dark:text-indigo-200">Explore Marketplace</CardTitle>
              <Store className="h-4 w-4 text-violet-500" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-indigo-700/80 dark:text-indigo-300/80">
                Discover new AI apps and tools.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 flex flex-col">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest workflow executions and app installations.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-6">
              {MOCK_RECENT_ACTIVITY.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.action} <span className="text-zinc-500 font-normal">{activity.target}</span>
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {activity.timestamp}
                    </p>
                  </div>
                  <Badge 
                    variant={activity.status === "Success" ? "success" : activity.status === "Failed" ? "destructive" : "secondary"}
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 flex flex-col">
          <CardHeader>
            <CardTitle>Usage Summary</CardTitle>
            <CardDescription>
              Your current billing cycle usage.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 flex-1">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-50">API Credits</span>
                <span className="text-zinc-500">{MOCK_USAGE_STATS.requestsUsed.toLocaleString()} / {MOCK_USAGE_STATS.requestsTotal.toLocaleString()}</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full" 
                  style={{ width: `${(MOCK_USAGE_STATS.requestsUsed / MOCK_USAGE_STATS.requestsTotal) * 100}%` }}
                />
              </div>
            </div>
            
            <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-5 border border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Current Plan</p>
                <p className="text-2xl font-bold mt-1 text-zinc-900 dark:text-zinc-50">{MOCK_USAGE_STATS.plan}</p>
              </div>
              <Link href="/usage">
                <Button variant="outline" size="sm" className="gap-2 rounded-full">
                  Details <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
