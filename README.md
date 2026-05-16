# AI-Pass Frontend Prototype

AI-Pass is a modern, modular AI orchestration platform prototype. This project provides a fully responsive and interactive frontend experience demonstrating a SaaS dashboard, marketplace, application details, and task runner.

## 🔗 Live Working Link
**[https://ai-pass-frontend-ziad-demo.loca.lt](https://ai-pass-frontend-ziad-demo.loca.lt)**

*(Note: If prompted by localtunnel, click "Click to Continue" to view the site. This link is served from a secure local tunnel connected to the dev environment).*

## 🏗️ Architecture
This project is built using:
- **Next.js 16 (App Router)**: For fast, scalable routing and rendering.
- **React 19**: Utilizing modern hooks and patterns.
- **Tailwind CSS 4**: For utility-first styling and robust theming.
- **TypeScript**: Ensuring type safety across all components and data structures.
- **Lucide React**: For scalable and consistent iconography.

The architecture emphasizes modularity and component reusability. It follows a pure frontend prototype approach, prioritizing UI/UX, responsive design, and state management over backend integration.

## 📁 Component Structure
The source code is organized to maintain a clean separation of concerns:

- **`src/app/`**: Next.js App Router definitions.
  - `layout.tsx`: Root layout and global typography.
  - `page.tsx`: Workspace Dashboard containing quick actions and recent activity.
  - `marketplace/page.tsx`: AI Marketplace with filtering controls.
  - `marketplace/[appId]/page.tsx`: Detailed app view (includes the interactive Invoice AI demo).
  - `task-runner/page.tsx`: Interactive interface for running simulated AI tasks.
  - `usage/page.tsx`: Billing and credit usage summary.
- **`src/components/ui/`**: Low-level, reusable design system components (Button, Card, Badge, Input).
- **`src/components/layout/`**: Application shell structure (Sidebar, Header, AppShell).
- **`src/lib/`**: Utilities and data.
  - `utils.ts`: Tailwind class merging utility (`cn`).
  - `mock-data.ts`: Contains all static mock data for the prototype.
- **`src/types/`**: TypeScript interfaces defining the shape of `AppItem`, `RecentActivity`, and `UsageStats`.

## 🎭 What is Mocked
As a frontend prototype, all dynamic data and API interactions are simulated on the client side:
1. **Marketplace Data**: Apps, categories, and pricing tiers are served from a static array.
2. **AI Task Runner**: The execution logic is simulated with `setTimeout` to mimic network latency, returning pre-defined analysis, summarization, or classification outputs with simulated reasoning traces.
3. **Invoice AI Demo**: The document upload and extraction results are statically presented to demonstrate the intended UI layout and confidence scoring mechanisms.
4. **Usage Statistics**: Credits, recent activity, and plan details are hardcoded to represent a realistic user state.

## 🚀 Improvements I Would Make
Given more time and resources, I would implement the following enhancements:
1. **State Management**: Integrate Zustand or Redux for complex state handling (e.g., preserving filter states or user preferences across navigations).
2. **Authentication Flow**: Add a secure login/registration screen using NextAuth.js or Clerk.
3. **Animations & Polish**: Incorporate Framer Motion for more sophisticated micro-interactions, page transitions, and skeleton loading states to elevate the premium feel.
4. **Backend Integration**: Connect to a real database (e.g., PostgreSQL via Prisma) and backend APIs (e.g., OpenAI or custom models) to replace the mocked data layer.
5. **Dark Mode Toggle**: Implement a functional theme switcher (currently defaults to dark mode aesthetics).
