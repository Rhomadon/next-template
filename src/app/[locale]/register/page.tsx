"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const localeMatch = pathname?.match(/^\/([a-zA-Z-]{2})/)
  const locale = localeMatch ? localeMatch[1] : "en"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Account created 🚀") // bisa diganti router.push(`/${locale}/login`)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6 transition-colors duration-300"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100"
          >
            Create Account ✨
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500 transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 transition-all"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-2"
            >
              <Checkbox id="terms" required />
              <Label htmlFor="terms">
                I agree to the{" "}
                <Link href="#" className="text-indigo-500 dark:text-indigo-400 hover:underline">
                  Terms & Conditions
                </Link>
              </Label>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="pt-2"
            >
              <Button
                type="submit"
                className="w-full bg-indigo-500 dark:bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors duration-200"
                disabled={loading}
              >
                {loading ? "Creating..." : "Register"}
              </Button>
            </motion.div>
					</form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-gray-600 dark:text-gray-300"
          >
            Already have an account?{" "}
            <Link
              href={`/${locale}/login`}
              className="text-indigo-500 dark:text-indigo-400 font-medium hover:underline"
            >
              Login
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
