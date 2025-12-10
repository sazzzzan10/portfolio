"use server";
import { Resend } from 'resend';

export type FormState = {
  message: string;
};

export async function formAction(
  prev: FormState,
  formData: FormData
): Promise<FormState> {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const fullName = `${formData.get("fullName")}`;
  const email = `${formData.get("email")}`;
  const data = `${formData.get("data")}`;
        try{ resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'sazzzan10@gmail.com',
  subject: `Portfolio Website-${fullName}`,
  html: `<p><strong>${email}-</string><br>${data}</p>`
});
        }
        catch(error){
            return{message: "Couldn't send message. Ran into a problem."}
        }
  return { message: "Message sent successfully." };
}
