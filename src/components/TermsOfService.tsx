export default function TermsOfService() {
  return (
    <section id="terms" className="bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
            Legal
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">
            Terms of Service
          </h2>
          <p className="text-sm text-neutral-500 mb-10">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="space-y-8 text-sm md:text-base leading-relaxed text-neutral-700">
            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">1. Overview</h3>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use of the Hair Connection
                website and any appointments or services booked through it. By using this site, you
                agree to these Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">2. Appointments and cancellations</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Appointments are subject to availability and are confirmed by our team.</li>
                <li>
                  If you need to reschedule or cancel, please contact us as early as possible so we
                  can offer the time to another guest.
                </li>
                <li>
                  We reserve the right to modify or reschedule appointments in case of unforeseen
                  circumstances.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">3. Salon experience</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Please arrive on time to enjoy the full experience of your service.</li>
                <li>
                  Our stylists will always discuss your goals before any treatment; results may vary
                  depending on hair history and condition.
                </li>
                <li>
                  For certain services, we may recommend patch or strand tests before colour and
                  treatment work.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">4. Pricing and payment</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Service prices may change from time to time.</li>
                <li>
                  Any changes in price will be communicated at the time of booking or during your
                  consultation.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">5. Use of the website</h3>
              <p>When using this website, you agree that you will not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the site for any unlawful or unauthorised purpose</li>
                <li>Attempt to interfere with the security or proper functioning of the site</li>
                <li>Copy or reuse content without our permission</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">6. Liability</h3>
              <p>
                We take great care to provide a safe and professional experience. To the fullest
                extent permitted by law, we are not liable for indirect or consequential losses that
                may arise from use of our website or services.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">7. Changes to these Terms</h3>
              <p>
                We may update these Terms from time to time. Any changes will be posted on this
                page, and your continued use of the site after changes are made means you accept
                the updated Terms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900">8. Contact</h3>
              <p>
                For any questions about these Terms, please contact us at{" "}
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

