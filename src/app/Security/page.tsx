// app/security/page.tsx
'use client';

import React from 'react';

const Security = () => {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16 text-gray-800 border-2 border-gold rounded-lg mt-5">
      <h1 className="text-3xl font-bold text-brandsecondary mb-8">Security</h1>

      <section className="space-y-6">
        <p>
          At <strong>Cyrus MicroCredit</strong>, protecting your information is our top priority. Here's how
          we keep your data safe.
        </p>

        <div>
          <h2 className="font-semibold text-xl mb-2">1. Website & Data Security</h2>
          <p>
            We use modern security technologies like 256-bit SSL encryption and server firewalls to
            protect your data.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. Access Control</h2>
          <p>
            Multi-factor authentication and role-based access ensure that only authorized personnel can
            access your data.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Threat Monitoring</h2>
          <p>
            We continuously monitor systems for intrusions or vulnerabilities, and perform regular
            security audits.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. Your Role</h2>
          <p>
            You can help protect your data by using strong passwords and reporting any suspicious
            activity.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. Report an Issue</h2>
          <p>
            Contact our security team at: <a href="mailto:security@cyrusmicrocredit.com" className="text-blue-600">security@cyrusmicrocredit.com</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Security;
