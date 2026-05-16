"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_USAGE_STATS } from "@/lib/mock-data"
import { ArrowUpRight, CreditCard, Zap } from "lucide-react"

export default function UsagePage() {
  const usagePercentage = (MOCK_USAGE_STATS.requestsUsed / MOCK_USAGE_STATS.requestsTotal) * 100

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Usage & Wallet
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Monitor your API credit consumption and manage your billing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Current Billing Cycle</CardTitle>
            <CardDescription>Oct 1, 2023 - Oct 31, 2023</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <div className="flex items-end justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">Total Requests Used</p>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {MOCK_USAGE_STATS.requestsUsed.toLocaleString()} <span className="text-base font-normal text-zinc-500">/ {MOCK_USAGE_STATS.requestsTotal.toLocaleString()}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">Remaining</p>
                  <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                    {MOCK_USAGE_STATS.creditsRemaining.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="h-4 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden mt-4">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    usagePercentage > 90 ? "bg-red-500" : usagePercentage > 75 ? "bg-yellow-500" : "bg-indigo-600"
                  }`} 
                  style={{ width: `${usagePercentage}%` }}
                />
              </div>
              <p className="text-xs text-zinc-500 mt-2 flex justify-between">
                <span>0</span>
                <span>{usagePercentage.toFixed(1)}% Used</span>
                <span>{MOCK_USAGE_STATS.requestsTotal.toLocaleString()}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-lg">
                <p className="text-sm text-zinc-500 mb-1">Compute Hours</p>
                <p className="text-lg font-semibold">124.5h</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-lg">
                <p className="text-sm text-zinc-500 mb-1">Storage</p>
                <p className="text-lg font-semibold">12.4 GB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col bg-zinc-950 text-zinc-50 dark:bg-indigo-950 dark:border-indigo-900 border-zinc-900 shadow-xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-indigo-500/20 blur-2xl"></div>
          
          <CardHeader className="relative z-10">
            <Badge className="w-fit mb-2 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border-none">Current Plan</Badge>
            <CardTitle className="text-2xl">{MOCK_USAGE_STATS.plan}</CardTitle>
            <CardDescription className="text-zinc-400">
              $49.00 / month
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 relative z-10 space-y-4 text-sm text-zinc-300">
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /> 10,000 API requests</li>
              <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /> Priority Support</li>
              <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /> Advanced Analytics</li>
              <li className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /> 50GB Storage</li>
            </ul>
          </CardContent>
          <CardFooter className="relative z-10 pt-4 border-t border-zinc-800/50">
            <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200 gap-2">
              Upgrade Plan <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Manage how you pay for your AI-Pass usage.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg max-w-md">
            <div className="flex items-center gap-4">
              <div className="h-10 w-14 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <CreditCard className="h-5 w-5 text-zinc-500" />
              </div>
              <div>
                <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">•••• •••• •••• 4242</p>
                <p className="text-xs text-zinc-500">Expires 12/2025</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
