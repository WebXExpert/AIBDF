import LegalLayout from "../components/ui/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      highlightWord="Terms"
      lastUpdated="1 April 2026"
      intro="By using aibdf.in or any AIBDF service, you agree to these terms. They exist to keep the site useful for everyone and to be clear about what we do — and do not — provide."
      sections={[
        {
          heading: "About AIBDF",
          paragraphs: [
            "AIBDF (Auto-Immune Blistering Disease Foundation) is a registered charitable trust based in Pune, India. We provide awareness, patient support, and connect patients to specialists — we are not a medical provider and do not prescribe, diagnose, or treat disease.",
          ],
        },
        {
          heading: "Medical disclaimer",
          paragraphs: [
            "Information on this website is for general education and awareness. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified dermatologist or physician for questions about your health.",
            "If you are experiencing a medical emergency, call your local emergency services immediately.",
          ],
        },
        {
          heading: "Use of the website",
          paragraphs: [
            "You agree to use the website lawfully and respectfully. You agree not to:",
          ],
          list: [
            "Attempt to disrupt the site, circumvent security, or gain unauthorised access",
            "Use the site to transmit malware, spam, or unlawful content",
            "Scrape or reproduce content for commercial use without written permission",
            "Impersonate AIBDF, its trustees, or any other person",
          ],
        },
        {
          heading: "Donations",
          paragraphs: [
            "All donations made via aibdf.in are processed by Stripe, a licensed payment processor. Donation amounts are displayed in Indian Rupees unless stated otherwise. For refund-related terms, please see our Return & Refund Policy.",
            "AIBDF is 80G certified under the Indian Income Tax Act, 1961. Donors resident in India may claim a tax deduction on eligible donations, subject to applicable rules.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on this website — text, graphics, logos, images, audio — is owned by AIBDF or its licensors and protected under applicable copyright law. You may view and share content for personal, non-commercial purposes with attribution. For any other use, please contact us.",
          ],
        },
        {
          heading: "Links to third-party sites",
          paragraphs: [
            "Our site may link to third-party websites — for example, partner organisations, payment processors, or news coverage. We do not control and are not responsible for the content or privacy practices of these sites.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "AIBDF provides information and services in good faith, but makes no guarantee of uninterrupted availability or error-free operation. To the fullest extent permitted by law, AIBDF is not liable for any indirect or consequential loss arising from use of this website.",
          ],
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.",
          ],
        },
      ]}
    />
  );
}
