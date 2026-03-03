export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            Legal
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
            Privacy Policy
          </h2>
          <p className="text-sm text-neutral-500 mb-10">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-neutral-700">
            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">1. Who we are</h3>
              <p>
                Hair Connection (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is a luxury
                hair studio based in Worli, Mumbai. This Privacy Policy explains how we collect,
                use and protect your personal information when you visit our website, contact us or
                book an appointment.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">2. Information we collect</h3>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name and contact details (phone number, email address)</li>
                <li>Appointment preferences such as date, time and service requested</li>
                <li>Any notes you choose to share about your hair, style preferences or history</li>
                <li>Basic technical data when you browse our site (such as browser type and pages viewed)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">3. How we use your information</h3>
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to enquiries and contact requests</li>
                <li>Schedule, confirm and manage your appointments</li>
                <li>Provide personalized recommendations and client care</li>
                <li>Improve our services and website experience</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">4. Sharing of information</h3>
              <p>
                We do not sell your personal information. We only share your details when necessary
                to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide our services (for example, with team members involved in your booking)</li>
                <li>Comply with legal obligations or respond to lawful requests</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">5. Data retention</h3>
              <p>
                We keep your information only for as long as necessary to provide our services and
                maintain client records, or as required by law. When information is no longer
                needed, we take reasonable steps to delete or anonymise it.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">6. Your choices</h3>
              <p>You can request that we:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Update or correct your contact details</li>
                <li>Limit how we use your information for communication</li>
                <li>Delete certain information, where legally permitted</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">7. Contact</h3>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data,
                please contact us at{" "}
                <a
                  href="mailto:thehairconnection@gmail.com"
                  className="text-gold-shiny hover:opacity-80"
                >
                  thehairconnection@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

