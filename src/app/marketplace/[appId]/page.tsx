import { MOCK_APPS } from "@/lib/mock-data"
import AppDetailsClientPage from "./client-page"

export function generateStaticParams() {
  return MOCK_APPS.map((app) => ({
    appId: app.id,
  }))
}

export default function AppDetailsPage() {
  return <AppDetailsClientPage />
}
