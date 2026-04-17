import LegalLayout from "../components/ui/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      highlightWord="Privacy"
      lastUpdated="1 April 2026"
      intro="AIBDF (Auto-Immune Blistering Disease Foundation) respects your privacy. This policy explains what personal data we collect, how we use it, and the choices you have — particularly important because some of the people who contact us share sensitive medical information."
      sections={[
        {
          heading: "What we collect",
          paragraphs: [
            "We collect only the information you voluntarily share with us through our website, donation forms, or direct correspondence. Depending on how you interact with us, this may include:",
          ],
          list: [
            "Contact details: name, email, phone number, postal address",
            "Donation details: amount, frequency, payment reference (processed securely via our payment processor, Stripe)",
            "Patient support requests: medical details you share with our patient services team, when seeking assistance",
            "Website usage: basic analytics such as pages viewed and approximate location, to help us improve the site",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use your information strictly for the purpose you shared it with us — for example, to process a donation, respond to a patient support request, or send a newsletter you subscribed to.",
            "We never sell, rent, or trade personal information. We do not share donor lists with other organisations.",
            "Medical information shared with our patient services team is handled in strict confidence by trained staff and is only disclosed to our medical advisors with your consent, when doing so is necessary to help you.",
          ],
        },
        {
          heading: "Payment security",
          paragraphs: [
            "AIBDF does not store your full credit or debit card details on our servers. All payments are processed by Stripe, a PCI-DSS Level 1 certified payment provider, using industry-standard encryption.",
          ],
        },
        {
          heading: "Cookies & analytics",
          paragraphs: [
            "Our website uses minimal cookies — required for basic functionality and, where applicable, analytics that measure aggregate site usage. You can control cookie preferences in your browser.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under applicable data-protection law, you have the right to:",
          ],
          list: [
            "Know what personal information we hold about you",
            "Ask us to correct inaccurate information",
            "Request deletion of your information, subject to legal retention requirements (for example, donation records must be retained for audit and tax purposes)",
            "Withdraw consent for marketing communications at any time",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "We retain donor and financial records for as long as required under Indian tax law (typically 7 years). Patient support correspondence is retained for as long as needed to support the patient, and thereafter for a reasonable period for continuity of care, then archived securely.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "AIBDF's services are not directed at children under 16. We do not knowingly collect personal information from children without verified parental consent.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. When we do, we will change the 'Last updated' date at the top of the page and, for significant changes, notify donors and subscribers by email.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "For any privacy-related request — data access, correction, deletion, or questions — please email info@aibdf.in. We aim to respond within 7 working days.",
          ],
        },
      ]}
    />
  );
}
