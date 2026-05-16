"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MOCK_APPS } from "@/lib/mock-data"
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react"
import Link from "next/link"

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
    <div className="flex flex-col gap-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Marketplace
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Discover and install AI apps and integrations for your workspace!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input 
            className="pl-9 bg-zinc-50 dark:bg-zinc-900 border-none h-10" 
            placeholder="Search for apps..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex w-full md:w-auto gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <div className="flex items-center gap-2 border-r border-zinc-200 dark:border-zinc-800 pr-2 mr-2 shrink-0">
            <SlidersHorizontal className="h-4 w-4 text-zinc-500" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Filters</span>
          </div>
          
          <select 
            className="h-10 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 shrink-0"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c} Categories</option>
            ))}
          </select>

          <select 
            className="h-10 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 shrink-0"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <Card key={app.id} className="flex flex-col overflow-hidden hover:shadow-md transition-all hover:border-indigo-500/30 group">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl border border-indigo-100 dark:border-indigo-500/20">
                  {app.name.substring(0, 2).toUpperCase()}
                </div>
                <Badge variant={app.pricing === "Free" ? "success" : "secondary"}>
                  {app.pricing}
                </Badge>
              </div>
              <CardTitle>{app.name}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-xs font-normal text-zinc-500">
                  {app.category}
                </Badge>
                {app.status !== "Available" && (
                  <Badge variant="warning" className="text-xs font-normal">
                    {app.status}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3">
                {app.description}
              </p>
            </CardContent>
            <CardFooter className="pt-4 border-t border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/20">
              <Link href={`/marketplace/${app.id}`} className="w-full">
                <Button className="w-full gap-2 group-hover:bg-indigo-600 group-hover:text-white transition-colors" variant="secondary">
                  Open <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}

        {filteredApps.length === 0 && (
          <div className="col-span-full py-24 text-center border border-dashed rounded-xl border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center bg-white dark:bg-zinc-950/50">
            <Search className="h-10 w-10 text-zinc-300 dark:text-zinc-700 mb-4" />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">No apps found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm">
              We couldn't find any apps matching your current filters. Try adjusting your search criteria.
            </p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => {
                setSearchQuery("")
                setFilterCategory("All")
                setFilterPricing("All")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
