"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MOCK_APPS } from "@/lib/mock-data"
import { Search, SlidersHorizontal, ArrowRight, Sparkles, Filter, Globe, Zap } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("All")
  const [filterPricing, setFilterPricing] = useState("All")

  const categories = ["All", ...Array.from(new Set(MOCK_APPS.map(app => app.category)))]

  const filteredApps = MOCK_APPS.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === "All" || app.category === filterCategory
    const matchesPricing = filterPricing === "All" || app.pricing === filterPricing

    return matchesSearch && matchesCategory && matchesPricing
  })

  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Badge variant="secondary" className="mb-4 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-none px-4 py-1">
            <Sparkles className="h-3 w-3 mr-2" /> Global Marketplace
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Discover <span className="text-gradient">AI Apps</span>
          </h1>
          <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Browse the world's most powerful AI integrations and deploy them to your workspace in seconds.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500 font-medium">
          <Globe className="h-4 w-4" /> 124+ Apps Available
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center glass-card p-2 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-lg">
        <div className="relative flex-1 w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" />
          <Input 
            className="pl-11 bg-transparent border-none h-12 focus-visible:ring-0 text-base" 
            placeholder="Search for agents, apps, or workflows..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-2 p-2 border-t lg:border-t-0 lg:border-l border-zinc-200/60 dark:border-zinc-800/60">
          <div className="flex items-center gap-3 px-3 py-2">
            <Filter className="h-4 w-4 text-zinc-400" />
            <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Refine</span>
          </div>
          
          <select 
            className="h-10 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 transition-all"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>
            ))}
          </select>

          <select 
            className="h-10 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 transition-all"
            value={filterPricing}
            onChange={(e) => setFilterPricing(e.target.value)}
          >
            <option value="All">All Pricing</option>
            <option value="Free">Free</option>
            <option value="Pro">Pro</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredApps.map((app) => (
            <motion.div
              key={app.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="flex flex-col h-full border-zinc-200/60 dark:border-zinc-800/60 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 group transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                  <Zap className="h-32 w-32 -rotate-12" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-2xl border border-indigo-100 dark:border-zinc-700 shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                      {app.name.substring(0, 2).toUpperCase()}
                    </div>
                    <Badge className={cn(
                      "rounded-full px-3 py-1 font-bold border-none",
                      app.pricing === "Free" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                    )}>
                      {app.pricing}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{app.name}</CardTitle>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 border-zinc-200 dark:border-zinc-800">
                      {app.category}
                    </Badge>
                    {app.status !== "Available" && (
                      <Badge className="text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-600 border-none">
                        {app.status}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href={`/marketplace/${app.id}`} className="w-full">
                    <Button 
                      className="w-full h-11 rounded-xl gap-2 font-bold transition-all duration-300" 
                      variant={app.pricing === "Free" ? "outline" : "default"}
                    >
                      View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredApps.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-32 text-center border-2 border-dashed rounded-3xl border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20"
          >
            <div className="h-20 w-20 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6">
              <Search className="h-8 w-8 text-zinc-300 dark:text-zinc-700" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">No matches found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm text-lg">
              We couldn't find any apps matching your current search.
            </p>
            <Button 
              variant="premium" 
              className="mt-8 rounded-full"
              onClick={() => {
                setSearchQuery("")
                setFilterCategory("All")
                setFilterPricing("All")
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
