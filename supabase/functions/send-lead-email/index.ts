import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadEmailRequest {
  name: string;
  email: string;
  phone: string;
  interests?: string[];
  pageUrl: string;
  step: "initial" | "interests";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, interests, pageUrl, step }: LeadEmailRequest = await req.json();
    
    console.log("Received lead email request:", { name, email, phone, interests, pageUrl, step });

    const timestamp = new Date().toISOString();
    const interestsList = interests && interests.length > 0 
      ? interests.join(", ") 
      : "None";
    
    const notes = step === "initial" 
      ? "Submitted initial form" 
      : "Completed interest selection";

    const subject = `Prentix Lead — ${name} — ${email}`;
    
    const htmlBody = `
      <h2>New Prentix Lead</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Selected Interests</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${interestsList}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timestamp</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Page URL</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${pageUrl}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Notes</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${notes}</td>
        </tr>
      </table>
    `;

    const textBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Selected interests: ${interestsList}
Timestamp: ${timestamp}
Page URL: ${pageUrl}
Notes: ${notes}
    `.trim();

    // Use Resend API directly via fetch
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Prentix <onboarding@resend.dev>",
        to: ["hello@prentix.ai"],
        subject: subject,
        html: htmlBody,
        text: textBody,
      }),
    });

    const emailResponse = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
