import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to [Your Name]'s portfolio website. By accessing this website, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of [Your Name] and is protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Use License</h2>
            <p className="text-gray-600">
              Permission is granted to temporarily view the materials on this website for personal, non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Disclaimer</h2>
            <p className="text-gray-600">
              The materials on this website are provided on an 'as is' basis. [Your Name] makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms and Conditions, please contact me through the contact form on this website.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}