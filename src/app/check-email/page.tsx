import Link from "next/link";

export default function CheckEmailPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Check Your Email</h1>
                <p className="text-gray-600 mb-6">
                    We've sent a confirmation email to the address you provided. Please
                    open it and click the verification link to activate your account.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                    If you don’t see the email in a few minutes, check your spam folder or
                    try signing up again.
                </p>
                <Link
                    href="/login"
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
}
