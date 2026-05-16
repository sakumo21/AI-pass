"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_RECENT_ACTIVITY, MOCK_USAGE_STATS } from "@/lib/mock-data"
import { ArrowRight, Bot, Play, Plus, Store, Sparkles, TrendingUp, Zap, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function WorkspaceDashboard() {
  return (
    <div className="flex flex-col gap-12 pb-10 relative">
      {/* Hero Background Glow */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[40%] right-[5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-8 py-8 md:py-12"
      >
        <div className="space-y-4">
          <Badge variant="premium" className="rounded-full px-4 py-1 text-xs font-black uppercase tracking-[0.2em]">
            Workspace Active
          </Badge>
          <h1 className="text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl lg:text-8xl leading-[1.1]">
            Welcome back,<br />
            <span className="text-gradient">Ziad</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Your AI orchestration platform is ready. You have <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">3 active agents</span> monitoring your workflows and <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">12 pending</span> tasks in the queue.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/task-runner">
            <Button variant="premium" size="lg" className="rounded-2xl px-8 h-14 text-lg">
              <Zap className="mr-3 h-6 w-6" /> Launch New Task
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="rounded-2xl px-8 h-14 text-lg shadow-sm">
            View System Logs
          </Button>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={item}>
          <Link href="/task-runner" className="block h-full group">
            <Card className="hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all cursor-pointer h-full border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Play className="h-12 w-12 text-indigo-500" />
              </div>
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-2">
                  <Play className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-lg">Run AI Task</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Quickly process documents, text, or data with our specialized models.
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/apps" className="block h-full group">
            <Card className="hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all cursor-pointer h-full border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Bot className="h-12 w-12 text-emerald-500" />
              </div>
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-2">
                  <Bot className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">AI Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Launch your active apps like Invoice AI or HR Assistant.
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/automations" className="block h-full group">
            <Card className="hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer h-full border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Plus className="h-12 w-12 text-blue-500" />
              </div>
              <CardHeader className="pb-2">
                <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-2">
                  <Plus className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Create Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Build sophisticated multi-step workflows to automate your business.
                </p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/marketplace" className="block h-full group">
            <Card className="hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all cursor-pointer h-full bg-indigo-600 dark:bg-indigo-600 text-white border-none overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity rotate-12">
                <Store className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90" />
              <CardHeader className="pb-2 relative z-10">
                <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center mb-2">
                  <Store className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Marketplace</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-indigo-100/90">
                  Discover new AI capabilities and install premium tools.
                </p>
                <div className="mt-4 flex items-center text-xs font-bold gap-1 text-white group-hover:gap-2 transition-all">
                  Browse Now <ArrowRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-4"
        >
          <Card className="h-full border-zinc-200/60 dark:border-zinc-800/60 shadow-sm glass-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>
                  Your latest workflow executions and app installations.
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-zinc-500">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {MOCK_RECENT_ACTIVITY.map((activity, i) => (
                  <div key={activity.id} className="flex items-center gap-4 relative">
                    <div className={cn(
                      "h-10 w-10 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                      activity.status === "Success" ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600" : "bg-red-50 dark:bg-red-500/10 text-red-600"
                    )}>
                      {activity.action === "Ran Task" ? <Zap className="h-4 w-4" /> : activity.action === "Installed" ? <Plus className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {activity.action} <span className="text-zinc-500 font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {activity.timestamp}
                      </p>
                    </div>
                    <Badge 
                      className="rounded-full px-2 py-0"
                      variant={activity.status === "Success" ? "success" : activity.status === "Failed" ? "destructive" : "secondary"}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="col-span-3 space-y-6"
        >
          <Card className="border-zinc-200/60 dark:border-zinc-800/60 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <TrendingUp className="h-24 w-24 text-indigo-500" />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-500" />
                Usage Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">API Credits</span>
                  <span className="text-zinc-500 font-medium">{MOCK_USAGE_STATS.requestsUsed.toLocaleString()} / {MOCK_USAGE_STATS.requestsTotal.toLocaleString()}</span>
                </div>
                <div className="h-3 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(MOCK_USAGE_STATS.requestsUsed / MOCK_USAGE_STATS.requestsTotal) * 100}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" 
                  />
                </div>
              </div>
              
              <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 p-5 border border-zinc-100 dark:border-zinc-800/50 flex justify-between items-center group hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Current Plan</p>
                  <p className="text-2xl font-black mt-1 text-zinc-900 dark:text-zinc-50 tracking-tight">{MOCK_USAGE_STATS.plan}</p>
                </div>
                <Link href="/usage">
                  <Button variant="outline" size="sm" className="gap-2 rounded-full h-8 px-4 text-xs">
                    Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-black border-none shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-[60px]" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-5 w-5 text-indigo-400" />
                Upgrade to Pro
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Unlock advanced agents and unlimited API requests.
              </CardDescription>
            </CardHeader>
            <CardFooter className="relative z-10 pt-0">
              <Button variant="premium" className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
