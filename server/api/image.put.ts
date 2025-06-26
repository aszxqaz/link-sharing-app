import { supabase } from "../supabase";

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  const formData = await readMultipartFormData(event);
  if (formData) {
    const file = formData[0];
    await supabase.storage.from("profile").upload(`${user.id}`, file.data, {
      upsert: true,
      contentType: file.type,
    });
  }
});
