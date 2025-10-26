// app/login/page.tsx
import Link from 'next/link'
import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <form className="flex flex-col max-w-sm mx-auto mt-20 space-y-4">
            <h1 className="text-2xl font-semibold mb-2 text-center text-black">
                Log In
            </h1>

            <label htmlFor="email" className="text-black">
                Email:
            </label>
            <input
                id="email"
                name="email"
                type="email"
                required
                className="border rounded-md px-3 py-2 border-black text-black"
            />

            <label htmlFor="password" className="text-black">
                Password:
            </label>
            <input
                id="password"
                name="password"
                type="password"
                required
                className="border rounded-md px-3 py-2 border-black text-black"
            />

            <button
                formAction={login}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
                Log In
            </button>
            <p className="text-center text-sm text-gray-600 mt-2">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-indigo-600 hover:underline">
                    Sign up
                </Link>
            </p>
        </form>
    )
}
