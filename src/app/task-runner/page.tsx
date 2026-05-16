"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Loader2, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react"

type TaskType = "summarize" | "analyze" | "classify"

export default function TaskRunnerPage() {
  const [taskType, setTaskType] = useState<TaskType>("summarize")
  const [inputText, setInputText] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleRunTask = () => {
    if (!inputText.trim()) return

    setIsRunning(true)
    setResult(null)

    // Simulate API call and processing
    setTimeout(() => {
      setIsRunning(false)
      
      if (taskType === "summarize") {
        setResult({
          decision: "Summary Generated",
          explanation: "Successfully condensed the text into key points while retaining main context.",
          confidence: 94,
          steps: ["Text preprocessing", "Entity extraction", "Abstractive summarization", "Formatting"],
          output: "The provided text discusses the importance of modular AI systems. It highlights how splitting complex workflows into smaller, specialized agents leads to higher reliability and easier maintenance compared to monolithic AI approaches."
        })
      } else if (taskType === "analyze") {
        setResult({
          decision: "Analysis Complete",
          explanation: "Identified financial patterns and extracted key entities from the provided text.",
          confidence: 88,
          steps: ["Named Entity Recognition", "Sentiment Analysis", "Financial context mapping"],
          output: "Entities found: \n- Organizations: 2\n- Monetary values: 4\n- Dates: 1\nSentiment: Neutral (Objective)"
        })
      } else {
        setResult({
          decision: "Request Class: Technical Support",
          explanation: "The text contains keywords associated with system errors and troubleshooting.",
          confidence: 97,
          steps: ["Intent classification", "Keyword matching", "Routing decision"],
          output: "Recommended Action: Route to Tier 2 Engineering Support.\nPriority: High\nSLA: 4 hours"
        })
      }
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
          AI Task Runner <Sparkles className="h-6 w-6 text-indigo-500" />
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Test AI models and prompts interactively.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Configure Task</CardTitle>
            <CardDescription>Select a task type and provide input data.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Task Type</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "summarize", label: "Summarize" },
                  { id: "analyze", label: "Analyze Data" },
                  { id: "classify", label: "Classify Intent" }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setTaskType(type.id as TaskType)}
                    className={`px-3 py-2 text-sm font-medium rounded-md border transition-colors ${
                      taskType === type.id 
                        ? "bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-500/10 dark:border-indigo-500/30 dark:text-indigo-400" 
                        : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 flex-1 flex flex-col">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Input Text</label>
              <textarea
                className="flex-1 w-full p-3 rounded-md border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 min-h-[200px] resize-none"
                placeholder="Enter the text you want the AI to process..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            <Button 
              className="w-full gap-2" 
              size="lg"
              onClick={handleRunTask}
              disabled={isRunning || !inputText.trim()}
            >
              {isRunning ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</>
              ) : (
                <><Play className="h-5 w-5" /> Run Task</>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className={`flex flex-col transition-all ${result ? 'border-indigo-200 dark:border-indigo-500/30 shadow-md shadow-indigo-500/5' : ''}`}>
          <CardHeader>
            <CardTitle>Execution Result</CardTitle>
            <CardDescription>AI output and reasoning traces.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            {!result && !isRunning ? (
              <div className="h-full flex flex-col items-center justify-center text-zinc-500 py-12 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg">
                <AlertCircle className="h-8 w-8 mb-2 opacity-20" />
                <p>Run a task to see results here.</p>
              </div>
            ) : isRunning ? (
              <div className="h-full flex flex-col items-center justify-center text-zinc-500 py-12">
                <Loader2 className="h-8 w-8 mb-4 animate-spin text-indigo-500" />
                <p className="animate-pulse">AI is thinking...</p>
                <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 animate-[pulse_1s_ease-in-out_infinite] w-2/3 rounded-full"></div>
                  </div>
                  <p className="text-xs text-center text-zinc-400">Executing sub-steps</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{result.decision}</h3>
                  <Badge variant={result.confidence > 90 ? "success" : "warning"}>
                    {result.confidence}% Confidence
                  </Badge>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-lg p-4 text-sm border border-zinc-100 dark:border-zinc-800">
                  <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed">
                    {result.output}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">Explanation</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {result.explanation}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-3">Execution Trace</h4>
                  <div className="space-y-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 dark:before:via-zinc-800 before:to-transparent">
                    {result.steps.map((step: string, index: number) => (
                      <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white dark:border-zinc-950 bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <CheckCircle2 className="h-3 w-3" />
                        </div>
                        <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-2 rounded border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
                          <div className="flex items-center justify-between space-x-2">
                            <span className="font-medium text-zinc-900 dark:text-zinc-100 text-xs">{step}</span>
                            <span className="text-[10px] text-zinc-500">{index * 150 + 200}ms</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
