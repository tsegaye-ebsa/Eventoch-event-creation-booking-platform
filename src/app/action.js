"use server"; 
import { createClient } from "@supabase/supabase-js";

export async function submitEvent(formData) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );
    // Extract values from the form
    const title = formData.get("title");
    const date = formData.get("date");
    const description = formData.get("description");
  
    // Example: log data (replace with DB logic)
    console.log({
      title,
      date,
      description,
    });
    const { data, error } = await supabase
    .from('events') // The table name you created
    .insert([
      { title: title, 
        description : date,
        date :  description

      } // The columns you created
    ])
    if (error) {
        console.error("Supabase error:", error);
        throw new Error("Failed to insert event");
      }n
    // Example: save to database here
    // await db.event.create({ data: { title, date, location } });
    console.log("Inserted:", data);
    return { success: true };
  }