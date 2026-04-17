import LegalLayout from "../components/ui/LegalLayout";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Return & Refund Policy"
      highlightWord="Refund"
      lastUpdated="1 April 2026"
      intro="AIBDF values every donor and is committed to ensuring your satisfaction with your contribution. If you are not completely satisfied with a donation, we will process a return or refund in accordance with the following policy."
      sections={[
        {
          heading: "Returns",
          paragraphs: [
            "If you have made a donation in error, or would like to request a refund for any other reason, please contact our donor services team at info@aibdf.in within 72 hours of making your donation.",
            "We will be happy to provide you with a return authorisation and instructions for returning the donation.",
            "Please note that we cannot accept returns on donations that have already been disbursed to a specific charitable cause, patient grant, or partner programme.",
          ],
        },
        {
          heading: "Refunds",
          paragraphs: [
            "If you would like to request a refund for any reason, please contact our donor services team at info@aibdf.in within 72 hours of making your donation. We will review your request and, if approved, will process the refund to the original payment method.",
            "It may take several business days for the refund to appear on your account, depending on your bank or card provider.",
          ],
        },
        {
          heading: "Exceptions",
          paragraphs: [
            "We do not offer returns or refunds for donations made to specific individuals or for donations made in connection with a fundraising campaign or event, once those funds have been disbursed.",
            "AIBDF reserves the right to deny returns or refunds in cases of suspected fraud, abuse, or misuse of our donation platform.",
          ],
        },
        {
          heading: "Tax benefit & 80G certificates",
          paragraphs: [
            "If a refund is issued after an 80G certificate has been generated, the corresponding certificate will be cancelled and you must not claim a tax deduction against the refunded amount. Please retain email confirmation of the refund for your records.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "For any questions about this policy or to request a refund, please email info@aibdf.in or call +91 9112006844 during business hours (10 AM – 6 PM IST, Mon–Fri). We appreciate your support of AIBDF and are committed to handling every enquiry with care.",
          ],
        },
      ]}
    />
  );
}
