// app/privacy-notice/page.tsx
'use client';

import React from 'react';

const PrivacyNotice = () => {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16 text-gray-800 border-2 border-gold rounded-lg mt-5">
      <h1 className="text-3xl font-bold text-brandsecondary mb-8">Privacy Notice</h1>
      <p className="mb-4">Last Updated: [2025]</p>

      <section className="space-y-6">
        <p>
          At <strong>Cyrus MicroCredit</strong>, we take your privacy seriously. This notice outlines how
          we collect and use your personal data.
        </p>

        <div>
          <h2 className="font-semibold text-xl mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Personal details (e.g., name, ID, contact)</li>
            <li>Financial information</li>
            <li>Device and usage data</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. How We Use Data</h2>
          <p>
            To provide services, process applications, meet legal obligations, and improve your
            experience.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Sharing of Information</h2>
          <p>
            We may share your data with credit bureaus, partners, and regulators where required, under
            strict confidentiality.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. Your Rights</h2>
          <p>
            You may request to access, correct, or delete your data, or object to certain processing
            activities.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. Security</h2>
          <p>
            We implement strong security measures to protect your data, including encryption and secure
            storage.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">6. Contact Us</h2>
          <p>Email: <a href="mailto:privacy@cyrusmicrocredit.com" className="text-blue-600">privacy@cyrusmicrocredit.com</a></p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyNotice;
