"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

type FooterLink = {
  name: string;
  url: string;
};

type FooterColumn = {
  type?: 'logo';
  title?: string;
  content?: {
    logo: string;
    description: string;
  };
  links?: FooterLink[];
};

type SocialLink = {
  icon: ReactNode;
  url: string;
  name: string;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns: FooterColumn[] = [
    {
      type: 'logo',
      content: {
        logo: '/Cyrus logo.png',
        description:
          'Providing accessible financial solutions to empower individuals and businesses across Ghana.',
      },
    },
    {
      title: 'Client Portal',
      links: [
        { name: 'Access Portal', url: '/clients' },
        { name: 'Client-Centric Approach', url: '/' },
        { name: 'Loan Repayment', url: '/' },
        { name: 'Our Policies', url: '/' },
        
      ],
    },
    {
      title: 'Financial Solutions',
      links: [
        { name: 'Loan Calculator', url: '/loans' },
        { name: 'Loan Types', url: '/loans' },
        { name: 'FAQs', url: '/faq' },
        {name: 'Success Stories', url: '/loans'},
      ],
    },
    {
      title: 'About Us',
      links: [
        { name: 'Our Story', url: '/about' },
        { name: 'Careers', url: '/careers' },
        { name: 'Services', url: '/services' },
        { name: 'Contact Us', url: '/contact' },
      ],
    },
  ];

  const legalLinks: FooterLink[] = [
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Notice', url: '#' },
    { name: 'Security', url: '#' },
    
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebookF />, url: 'https://web.facebook.com/profile.php?id=61575659940082', name: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', name: 'Twitter' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/cyrusmicrocreditservices/?igsh=ZnJuZXhnY2k4cDBy&utm_source=qr', name: 'Instagram' },
  ];

  return (
    <footer className="bg-white text-brandsecondary">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              {column.type === 'logo' ? (
                <>
                  <div className="mb-4">
                    <Image
                      src={column.content?.logo || '/default-logo.png'}
                      alt="Cyrus MicroCredit Logo"
                      width={300}
                      height={100}
                      className="h-20 w-auto"
                      priority
                    />
                  </div>
                  <p className="text-brandsecondary text-sm">
                    {column.content?.description}
                  </p>
                  {/* Social Icons under logo */}
                  <div className="flex space-x-4 mt-4">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.url}
                        className="text-brandsecondary hover:text-brandsecondary text-xl transition-colors"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.url}
                          className="text-brandsecondary hover:text-brandsecondary transition-colors"
                          aria-label={link.name}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-brandsecondary text-xs space-y-2 text-center">
          <p>
            Cyrus MicroCredit Ghana is authorized by the Bank of Ghana and
            operates under the Banking Act 2004 (Act 673).
          </p>
          <p>
            This website uses cookies to improve your experience. By continuing
            to browse, you agree to our use of cookies.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <div>
            <p className="text-brandsecondary text-sm">
              © {currentYear} Cyrus MicroCredit Ghana. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-brandsecondary hover:text-brandsecondary text-sm transition-colors"
                aria-label={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
