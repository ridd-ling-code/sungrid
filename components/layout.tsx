import Link from 'next/link'
import { Bell, User } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            LUMINOUS
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-primary-foreground/80">Home</Link>
            <Link href="/dashboard" className="hover:text-primary-foreground/80">Dashboard</Link>
            <Link href="/scheduling" className="hover:text-primary-foreground/80">Scheduling</Link>
            <Link href="/selling" className="hover:text-primary-foreground/80">Selling</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6" />
            <User className="h-6 w-6" />
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
