// app/private/page.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from '@/components/LogoutButton/page'

export default async function PrivatePage() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Welcome, {data.user.email}
                </h1>
                <p className="text-gray-600 mb-6">You are now logged in to your private dashboard.</p>

                <LogoutButton />
            </div>
        </div>
    )
}
