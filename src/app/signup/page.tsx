// app/signup/page.tsx
"use client";

import { useState } from "react";
import { signup } from "./actions";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      e.preventDefault(); // prevent server action
      setError("Passwords do not match");
    }
  };

  return (
    <form
      className="flex flex-col max-w-sm mx-auto mt-20 space-y-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold mb-2 text-center text-black">
        Create Account
      </h1>

      <label htmlFor="name" className="text-black">
        Name:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="border rounded-md px-3 py-2 border-black text-black"
      />

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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded-md px-3 py-2 border-black text-black"
      />

      <label htmlFor="confirmPassword" className="text-black">
        Confirm Password:
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border rounded-md px-3 py-2 border-black text-black"
      />

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        formAction={signup}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-600 hover:underline">
          Log in
        </a>
      </p>
    </form>
  );
}
