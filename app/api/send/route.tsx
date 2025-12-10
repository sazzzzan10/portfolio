import {NextResponse} from 'next/server';
import { Resend } from 'resend';

export async function GET(){
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    try{


resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'sazzzan10@gmail.com',
  subject: 'Contacting through portfolio',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
        return NextResponse.json({"hello":"world"});
    } catch(error){
        return NextResponse.json({error})
    }
}