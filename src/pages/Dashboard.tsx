import React from 'react'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Zaprint Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Print Jobs</h3>
            <p className="text-3xl font-bold mt-4">0</p>
            <p className="text-sm text-muted-foreground mt-2">Ready for future API data</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Templates</h3>
            <p className="text-3xl font-bold mt-4">0</p>
            <p className="text-sm text-muted-foreground mt-2">Coming soon</p>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Settings</h3>
            <p className="text-3xl font-bold mt-4">—</p>
            <p className="text-sm text-muted-foreground mt-2">Configure your account</p>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>Your Zaprint desktop app is ready! 🚀</p>
          <p className="mt-2">Start building features here.</p>
        </div>
      </div>
    </div>
  )
}