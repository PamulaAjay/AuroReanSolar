"use server";

export type ContactEnquiry = {
  full_name: string;
  email: string;
  phone: string;
  property_type: string;
  city: string;
  average_monthly_electricity_bill?: string;
  how_can_we_help?: string;
};

type ContactSubmissionResult = {
  success: boolean;
  message: string;
};

const submissionError = {
  success: false,
  message: "We couldn’t submit your enquiry. Please try again.",
};

export async function submitContactEnquiry(
  enquiry: ContactEnquiry,
): Promise<ContactSubmissionResult> {
  const apiBaseUrl = process.env.API_BASE_URL;

  if (!apiBaseUrl) {
    return submissionError;
  }

  try {
    const apiUrl = new URL("/api/contact/", apiBaseUrl);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(enquiry),
      signal: AbortSignal.timeout(10000),
    });
    const result = (await response.json()) as Partial<ContactSubmissionResult> | null;

    if (!response.ok || result?.success !== true) {
      return submissionError;
    }

    return {
      success: true,
      message: typeof result.message === "string" && result.message.trim()
        ? result.message
        : "Your enquiry has been submitted successfully.",
    };
  } catch {
    return submissionError;
  }
}
