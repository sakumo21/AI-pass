"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_AGENTS } from "@/lib/mock-data"
import { Bot, MessageSquare, MoreHorizontal, Sparkles, UserPlus } from "lucide-react"

export default function AgentsPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            AI Agents & Skills <Bot className="h-7 w-7 text-indigo-500" />
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Specialized AI workers trained for specific business functions.
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" /> Hire New Agent
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_AGENTS.map((agent) => (
          <Card key={agent.id} className="group overflow-hidden">
            <CardHeader className="relative pb-0">
              <div className="flex justify-between items-start">
                <div className={`h-16 w-16 rounded-2xl ${agent.avatarColor} flex items-center justify-center text-white shadow-lg shadow-black/10`}>
                  <Bot className="h-8 w-8" />
                </div>
                <div className="flex items-center gap-1">
                  <Badge 
                    variant="outline" 
                    className={`gap-1 px-2 py-0.5 ${
                      agent.status === "Online" ? "text-emerald-600 border-emerald-500/20" : 
                      agent.status === "Busy" ? "text-indigo-600 border-indigo-500/20" : 
                      "text-zinc-500 border-zinc-200"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      agent.status === "Online" ? "bg-emerald-500" : 
                      agent.status === "Busy" ? "bg-indigo-500" : 
                      "bg-zinc-400"
                    }`}></span>
                    {agent.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <CardTitle className="text-xl">{agent.name}</CardTitle>
                <p className="text-sm text-zinc-500 font-medium">{agent.role}</p>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-3 border border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                    <Sparkles className="h-3 w-3 text-indigo-500" /> Current Performance
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">98.4% Accuracy</span>
                    <span className="text-xs text-zinc-400">1.2k tasks done</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-zinc-50/50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800 p-4">
              <Button className="w-full gap-2" variant="outline">
                <MessageSquare className="h-4 w-4" /> Chat with {agent.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl font-bold mb-2">Train your own custom Agent</h2>
          <p className="text-indigo-100 mb-6">
            Upload your company documents, knowledge base, and processes to create an agent that knows exactly how your business works.
          </p>
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold">
            Start Training Session
          </Button>
        </div>
      </div>
    </div>
  )
}
