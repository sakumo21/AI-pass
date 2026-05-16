"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_APPS } from "@/lib/mock-data"
import { ArrowLeft, CheckCircle2, ChevronRight, FileText, Settings2, ShieldCheck, UploadCloud, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AppDetailsClientPage() {
  const params = useParams()
  const appId = params.appId as string
  const app = MOCK_APPS.find(a => a.id === appId)
  
  const [isActivating, setIsActivating] = useState(false)
  const [isActivated, setIsActivated] = useState(false)

  const handleActivate = () => {
    setIsActivating(true)
    setTimeout(() => {
      setIsActivating(false)
      setIsActivated(true)
    }, 1500)
  }

  if (!app) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">App not found</h2>
        <p className="text-zinc-500 mt-2 mb-6">The app you are looking for does not exist.</p>
        <Link href="/marketplace">
          <Button>Back to Marketplace</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/marketplace" className="hover:text-zinc-900 dark:hover:text-zinc-50 flex items-center gap-1 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Marketplace
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-900 dark:text-zinc-50 font-medium">{app.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: App Info & Demo */}
        <div className="flex-1 w-full space-y-8">
          <div className="flex items-start gap-6">
            <div className="h-24 w-24 shrink-0 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-4xl border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
              {app.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {app.name}
                </h1>
                <Badge variant={app.pricing === "Free" ? "success" : "secondary"}>
                  {app.pricing}
                </Badge>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl">
                {app.description}
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="gap-2"
                  onClick={handleActivate}
                  disabled={isActivating || isActivated}
                >
                  {isActivating ? (
                    <>Activating...</>
                  ) : isActivated ? (
                    <><CheckCircle2 className="h-5 w-5" /> Installed</>
                  ) : (
                    <><Zap className="h-5 w-5" /> Install & Activate</>
                  )}
                </Button>
                <Button variant="outline" size="lg">
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Interactive Demo</h2>
            
            {app.id === "invoice-ai" ? (
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-zinc-50/50 dark:bg-zinc-900/20 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <UploadCloud className="h-4 w-4 text-zinc-500" />
                      Input
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                    <FileText className="h-12 w-12 text-zinc-300 dark:text-zinc-700 mb-4" />
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">INV-2023-084.pdf</p>
                    <p className="text-xs text-zinc-500 mt-1">Acme Corp • 2.4 MB</p>
                  </CardContent>
                </Card>
                
                <Card className="border-emerald-500/30 shadow-sm shadow-emerald-500/5">
                  <CardHeader className="pb-3 border-b border-zinc-100 dark:border-zinc-800/50">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Settings2 className="h-4 w-4 text-indigo-500" />
                        Extraction Result
                      </CardTitle>
                      <Badge variant="success" className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20">
                        PASS
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 text-sm border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                        <span className="text-zinc-500">Vendor</span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100 text-right">Acme Corporation</span>
                      </div>
                      <div className="grid grid-cols-2 text-sm border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                        <span className="text-zinc-500">Date</span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100 text-right">Oct 24, 2023</span>
                      </div>
                      <div className="grid grid-cols-2 text-sm border-b border-zinc-100 dark:border-zinc-800/50 pb-2">
                        <span className="text-zinc-500">Total Amount</span>
                        <span className="font-medium text-emerald-600 dark:text-emerald-400 text-right">$4,250.00</span>
                      </div>
                      <div className="grid grid-cols-2 text-sm">
                        <span className="text-zinc-500">Tax ID</span>
                        <span className="font-medium text-zinc-900 dark:text-zinc-100 text-right">US-987654321</span>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50 dark:bg-emerald-500/10 rounded-lg p-3 text-sm text-emerald-800 dark:text-emerald-300 mt-4 flex gap-2">
                      <ShieldCheck className="h-5 w-5 shrink-0" />
                      <p>
                        High confidence match (99%). All required fields extracted. Tax ID verified against company registry.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-12 text-center text-zinc-500 border border-zinc-200 dark:border-zinc-800">
                Interactive demo not available for this app yet.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Metadata */}
        <div className="w-full lg:w-80 space-y-6 shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Category</p>
                <p className="font-medium">{app.category}</p>
              </div>
              <div>
                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Developer</p>
                <p className="font-medium flex items-center gap-2">
                  <span className="h-5 w-5 rounded bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black flex items-center justify-center text-[10px] font-bold">AI</span>
                  AI-Pass Native
                </p>
              </div>
              <div>
                <p className="text-zinc-500 dark:text-zinc-400 mb-1">Version</p>
                <p className="font-medium">2.4.1</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" /> 99.9% extraction accuracy</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" /> Multi-language support (50+)</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" /> Automatic fraud detection</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" /> ERP integration ready</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
