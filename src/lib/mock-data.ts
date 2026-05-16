import { AppItem, RecentActivity, UsageStats } from "@/types";

export const MOCK_APPS: AppItem[] = [
  {
    id: "invoice-ai",
    name: "Invoice AI",
    category: "Finance",
    description: "Automatically extract data from invoices with high accuracy.",
    pricing: "Pro",
    status: "Available",
  },
  {
    id: "hr-ai",
    name: "HR AI",
    category: "Human Resources",
    description: "Screen resumes and rank candidates based on job descriptions.",
    pricing: "Enterprise",
    status: "Available",
  },
  {
    id: "supply-chain-ai",
    name: "Supply Chain AI",
    category: "Operations",
    description: "Predict inventory shortages and optimize logistics.",
    pricing: "Pro",
    status: "Available",
  },
  {
    id: "analysis-studio",
    name: "Analysis Studio",
    category: "Data",
    description: "Generate insights and charts from raw CSV data.",
    pricing: "Free",
    status: "Available",
  },
  {
    id: "presence-audit",
    name: "Presence Audit",
    category: "Marketing",
    description: "Analyze your brand's digital presence across social media.",
    pricing: "Free",
    status: "Available",
  },
  {
    id: "compliance-ai",
    name: "Compliance AI",
    category: "Legal",
    description: "Check documents for regulatory compliance automatically.",
    pricing: "Pro",
    status: "Coming Soon",
  },
];

export const MOCK_RECENT_ACTIVITY: RecentActivity[] = [
  { id: "1", action: "Ran Task", target: "Invoice Analysis", timestamp: "2 mins ago", status: "Success" },
  { id: "2", action: "Created", target: "Email Automation", timestamp: "1 hour ago", status: "Success" },
  { id: "3", action: "Failed", target: "Data Sync", timestamp: "3 hours ago", status: "Failed" },
  { id: "4", action: "Installed", target: "Analysis Studio", timestamp: "1 day ago", status: "Success" },
];

export const MOCK_USAGE_STATS: UsageStats = {
  plan: "Netro Plan",
  requestsUsed: 4520,
  requestsTotal: 10000,
  creditsRemaining: 5480,
};

export interface Automation {
  id: string;
  name: string;
  trigger: string;
  action: string;
  status: "Active" | "Inactive";
  lastRun: string;
}

export const MOCK_AUTOMATIONS: Automation[] = [
  {
    id: "auto-1",
    name: "Invoice to ERP",
    trigger: "New Invoice in Dropbox",
    action: "Extract & Upload to SAP",
    status: "Active",
    lastRun: "15 mins ago",
  },
  {
    id: "auto-2",
    name: "Customer Sentiment Alert",
    trigger: "New Zendesk Ticket",
    action: "Analyze Sentiment & Notify Slack",
    status: "Active",
    lastRun: "2 hours ago",
  },
  {
    id: "auto-3",
    name: "Weekly Compliance Check",
    trigger: "Schedule (Every Monday)",
    action: "Run Compliance AI on /docs",
    status: "Inactive",
    lastRun: "5 days ago",
  },
];

export interface Agent {
  id: string;
  name: string;
  role: string;
  skills: string[];
  status: "Online" | "Idle" | "Busy";
  avatarColor: string;
}

export const MOCK_AGENTS: Agent[] = [
  {
    id: "agent-1",
    name: "Finley",
    role: "Financial Analyst",
    skills: ["Forecasting", "Tax Compliance", "Anomaly Detection"],
    status: "Online",
    avatarColor: "bg-emerald-500",
  },
  {
    id: "agent-2",
    name: "Nova",
    role: "HR Specialist",
    skills: ["Resume Screening", "Interview Prep", "Policy Search"],
    status: "Busy",
    avatarColor: "bg-indigo-500",
  },
  {
    id: "agent-3",
    name: "Atlas",
    role: "Supply Chain Expert",
    skills: ["Inventory Prediction", "Vendor Risk", "Logistics Optimization"],
    status: "Idle",
    avatarColor: "bg-orange-500",
  },
];
