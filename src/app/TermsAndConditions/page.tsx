// app/terms-and-conditions/page.tsx
'use client';

import React from 'react';

const TermsAndConditions = () => {
  return (
    <main className="max-w-5xl mx-auto px-8 py-16 text-gray-800 border-2 border-gold rounded-lg mt-5">
      <h1 className="text-3xl font-bold text-brandsecondary mb-8">Terms & Conditions</h1>
      <p className="mb-4">Last Updated: [2025]</p>

      <section className="space-y-6">
        <p>
          Welcome to <strong>Cyrus MicroCredit</strong>. These Terms and Conditions govern your use of our
          website and services. By using our services, you agree to these terms.
        </p>

        <div>
          <h2 className="font-semibold text-xl mb-2">1. Eligibility</h2>
          <p>You must be at least 18 years old and legally capable to enter into a contract.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">2. Loan Application</h2>
          <p>All loan applications must be truthful. Approval depends on credit checks and internal policies.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">3. Repayment</h2>
          <p>Loan terms, interest, and fees are specified in your agreement. Late payments may incur fees.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">4. Use of Website</h2>
          <p>No unlawful or unauthorized use is permitted. Respect intellectual property and content rights.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">5. Limitation of Liability</h2>
          <p>
            Cyrus MicroCredit is not responsible for damages resulting from service use or interruptions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-2">6. Changes to Terms</h2>
          <p>Terms may change. Continued use indicates acceptance of updates.</p>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
