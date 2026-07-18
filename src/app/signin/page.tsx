import Link from 'next/link';
import { FiGoogle } from 'react-icons/fi';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold text-primary">ONE-HOME</span>
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-neutral-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 bg-white p-8 rounded-lg shadow-sm">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-neutral-900 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="input-field"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
              <span className="text-sm text-neutral-600">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn-primary w-full py-3 mt-6">
            Sign In
          </button>
        </form>

        {/* Social Sign In */}
        <div className="mt-6">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-neutral-600">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {['Google', 'Facebook', 'Apple'].map((provider) => (
              <button
                key={provider}
                type="button"
                className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                {provider === 'Google' && <FiGoogle className="mx-auto" size={20} />}
              </button>
            ))}
          </div>
        </div>

        {/* Terms */}
        <p className="mt-6 text-center text-xs text-neutral-600">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
