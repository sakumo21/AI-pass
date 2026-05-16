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
