// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

// Define types for your data structures
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
  // Footer columns with proper typing
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

  // Legal links
  const legalLinks: FooterLink[] = [
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Notice', url: '#' },
    { name: 'Cookie Policy', url: '#' },
    { name: 'Security', url: '#' },
    { name: 'Modern Slavery Act', url: '#' }
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>, 
      url: '#', 
      name: 'Facebook' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>, 
      url: '#', 
      name: 'Twitter' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, 
      url: '#', 
      name: 'LinkedIn' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
      url: '#', 
      name: 'Instagram' 
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>, 
      url: '#', 
      name: 'YouTube' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
        <div className="mt-8 text-gray-500 text-xs">
          <p>
            Cyrus MicroCredit Ghana is authorized by the Bank of Ghana and operates under the Banking Act 2004 (Act 673).
          </p>
          <p className="mt-2">
            This website uses cookies to improve your experience. By continuing to browse, you agree to our use of cookies.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cyrus MicroCredit Ghana. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
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