import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-light tracking-wider">404</h1>
          <h2 className="text-2xl font-light tracking-wide">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 transition-colors duration-300"
        >
          <Home size={16} />
          Return Home
        </Link>
      </div>
    </div>
  )
}
