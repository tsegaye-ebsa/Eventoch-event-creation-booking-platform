'use server'

'use server' // This tells Next.js: "This code NEVER goes to the browser"
import { createClient } from '@supabase/supabase-js'

export async function submitEvent(formData) {
  // 1. Initialize the connection
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  // 2. Extract data from the form
  const title = formData.get("title")
  const location = formData.get("location")
  const description = formData.get("description")

  // 3. The "Insert" Command
  const { data, error } = await supabase
    .from('events') // The table name you created
    .insert([
      { title, location, description } // The columns you created
    ])

  if (error) {
    console.error("Error saving to backend:", error.message)
    return { success: false }
  }

  console.log("Success! Data saved.")
  return { success: true }
}