// components/Footer.tsx
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

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
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerColumns: FooterColumn[] = [
    { 
      type: 'logo',
      content: {
        logo: '/logo white.png',
        description: 'Providing accessible financial solutions to empower individuals and businesses across Ghana.'
      }
    },
    { 
      title: 'Business Banking', 
      links: [
        { name: 'Business Accounts', url: '#' },
        { name: 'Trade Services', url: '#' },
        { name: 'Cash Management', url: '#' },
        { name: 'Business Loans', url: '#' }
      ]
    },
    { 
      title: 'Digital Banking', 
      links: [
        { name: 'Online Banking', url: '#' },
        { name: 'Mobile Banking', url: '#' },
        { name: 'Mobile App', url: '#' }
      ]
    },
    { 
      title: 'About Us', 
      links: [
        { name: 'Our Story', url: '#' },
        { name: 'Careers', url: '#' },
        { name: 'Newsroom', url: '#' },
        { name: 'Sustainability', url: '#' }
      ]
    }
  ];

  const legalLinks: FooterLink[] = [
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Notice', url: '#' },
    { name: 'Cookie Policy', url: '#' },
    { name: 'Security', url: '#' },
    { name: 'Modern Slavery Act', url: '#' }
  ];

  const socialLinks: SocialLink[] = [
    // Your SVG icons here...
  ];

  return (
    <footer className="bg-gray-900 text-white">
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
                  <p className="text-gray-300 text-sm">
                    {column.content?.description}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.url} 
                          className="text-gray-300 hover:text-white transition-colors"
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
        <div className="mt-8 text-gray-400 text-xs space-y-2 text-center">
          <p>
            Cyrus MicroCredit Ghana is authorized by the Bank of Ghana and operates under the Banking Act 2004 (Act 673).
          </p>
          <p>
            This website uses cookies to improve your experience. By continuing to browse, you agree to our use of cookies.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              © {year ?? '2024'} Cyrus MicroCredit Ghana. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.url} 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                aria-label={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link 
                key={index} 
                href={social.url} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Follow us on ${social.name}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
