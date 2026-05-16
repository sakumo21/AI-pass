export interface AppItem {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: "Free" | "Pro" | "Enterprise";
  status: "Available" | "Beta" | "Coming Soon";
  icon?: string;
}

export interface RecentActivity {
  id: string;
  action: string;
  target: string;
  timestamp: string;
  status: "Success" | "Pending" | "Failed";
}

export interface UsageStats {
  plan: string;
  requestsUsed: number;
  requestsTotal: number;
  creditsRemaining: number;
}
