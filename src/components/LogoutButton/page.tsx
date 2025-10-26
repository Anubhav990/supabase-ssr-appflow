'use client'

import { signOut } from '@/app/logout/actions'

export default function LogoutButton() {
    return (
        <form action={signOut}>
            <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition"
            >
                Logout
            </button>
        </form>
    )
}
