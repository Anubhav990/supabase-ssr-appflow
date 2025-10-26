'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const name = String(formData.get('name') ?? '')
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const supabase = await createClient()

  // Create the user in Supabase with metadata
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name, // save the name in user metadata
      },
    },
  })

  if (error) throw new Error(error.message)

  // If email confirmations are enabled, redirect user to a "check email" page
  redirect('/check-email')
}
