"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_AUTOMATIONS } from "@/lib/mock-data"
import { Plus, Workflow, Play, MoreHorizontal, Clock, ArrowRight } from "lucide-react"

export default function AutomationsPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            Automations <Workflow className="h-7 w-7 text-indigo-500" />
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Connect your favorite apps and AI models into seamless workflows.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Create Automation
        </Button>
      </div>

      <div className="grid gap-4">
        {MOCK_AUTOMATIONS.map((automation) => (
          <Card key={automation.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row md:items-center p-6 gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {automation.name}
                    </h3>
                    <Badge 
                      variant={automation.status === "Active" ? "success" : "secondary"}
                      className="rounded-full"
                    >
                      {automation.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-zinc-500">
                    <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-100 dark:border-zinc-800">
                      <span className="font-semibold text-[10px] uppercase tracking-wider text-zinc-400">When</span>
                      <span>{automation.trigger}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-zinc-300" />
                    <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300">
                      <span className="font-semibold text-[10px] uppercase tracking-wider text-indigo-400">Do</span>
                      <span>{automation.action}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0 md:pl-6">
                  <div className="text-right hidden sm:block">
                    <div className="flex items-center gap-1 text-xs text-zinc-500 mb-1">
                      <Clock className="h-3 w-3" /> Last run
                    </div>
                    <p className="text-sm font-medium">{automation.lastRun}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-500">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-10 w-10 text-zinc-500">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-6">Automation Templates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Email Summarizer", desc: "Summarize long emails and save to Notion.", category: "Productivity" },
            { title: "Lead Scraper", desc: "Extract lead data from LinkedIn profiles.", category: "Sales" },
            { title: "Expense Reporter", desc: "Group receipts from Gmail into a CSV report.", category: "Finance" }
          ].map((template, i) => (
            <Card key={i} className="hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all cursor-pointer">
              <CardHeader className="pb-3">
                <Badge variant="outline" className="w-fit mb-2">{template.category}</Badge>
                <CardTitle className="text-base">{template.title}</CardTitle>
                <CardDescription className="text-xs">{template.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full text-indigo-600 dark:text-indigo-400 p-0 hover:bg-transparent justify-start gap-2">
                  Use Template <ArrowRight className="h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
