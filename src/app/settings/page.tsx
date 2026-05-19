"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Key, Shield, User, Globe, Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col gap-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Settings
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Manage your account, workspace, and security preferences.
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6 bg-zinc-100 dark:bg-zinc-900 p-1">
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="workspace" className="gap-2">
            <Globe className="h-4 w-4" /> Workspace
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your photo and personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl font-bold border-4 border-white dark:border-zinc-950 shadow-sm">
                  JD
                </div>
                <div className="space-y-1">
                  <Button variant="outline" size="sm">Change Avatar</Button>
                  <p className="text-xs text-zinc-500">JPG, GIF or PNG. Max size of 800K</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="JohnDoe@example.com" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how the platform looks for you.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: "light", label: "Light", icon: Sun },
                  { id: "dark", label: "Dark", icon: Moon },
                  { id: "system", label: "System", icon: Laptop },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTheme(item.id)}
                    className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
                      theme === item.id
                        ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 ring-1 ring-indigo-500"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${theme === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-500"}`} />
                    <span className={`text-sm font-medium ${theme === item.id ? "text-indigo-900 dark:text-indigo-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workspace" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workspace Settings</CardTitle>
              <CardDescription>Configure your organization defaults.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ws-name">Workspace Name</Label>
                <Input id="ws-name" defaultValue="Acme Corp AI" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ws-url">Workspace URL</Label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-500">
                    ai-pass.com/
                  </div>
                  <Input id="ws-url" defaultValue="acme-corp" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
              <Button>Update Workspace</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Use these keys to authenticate with our API.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Production Key</p>
                  <p className="text-xs font-mono text-zinc-500">pk_live_••••••••••••••••••••4242</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Reveal</Button>
                  <Button variant="outline" size="sm">Revoke</Button>
                </div>
              </div>
              <Button variant="outline" className="w-full border-dashed border-2 gap-2 py-6">
                <Key className="h-4 w-4" /> Create New API Key
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-full">
                  <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Authentication is enabled</p>
                  <p className="text-xs text-zinc-500">Using Google Authenticator</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Disable</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
