// app/thank-you/page.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 opacity-0 animate-fadeIn">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Thank you!</h1>
        <p className="text-gray-600 mb-6">
          Your message has been successfully sent. We’ll get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
