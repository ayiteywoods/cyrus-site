'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, ChevronUp, Search, X, Menu } from 'lucide-react';

type MenuItem = {
  title: string;
  href: string;
  submenu?: {
    title?: string;
    items: {
      title: string;
      description?: string;
      href: string;
      icon?: React.ReactNode;
    }[];
  }[];
  isSimpleLink?: boolean;
};

type NavbarProps = {
  logo: React.ReactNode;
  menuItems: MenuItem[];
};

const searchableContent = [
  { keyword: 'about', path: '/about' },
  { keyword: 'contact', path: '/contact' },
  { keyword: 'web design', path: '/services/web-design' },
  { keyword: 'seo optimization', path: '/services/seo' },
  { keyword: 'branding strategy', path: '/services/branding' },
  { keyword: 'pricing', path: '/pricing' },
  { keyword: 'blog', path: '/blog' },
  { keyword: 'team', path: '/about#team' },
  { keyword: 'careers', path: '/careers' },
  { keyword: 'loans', path: '/loans' },
  { keyword: 'services', path: '/services' },
  { keyword: 'getting started guide', path: '/blog/getting-started' },
];

export default function Navbar({ logo, menuItems }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    if (mobileMenuOpen) setActiveMenu(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const cleanedQuery = searchQuery.trim().toLowerCase();
    const match = searchableContent.find((item) =>
      item.keyword.toLowerCase().includes(cleanedQuery)
    );

    if (match) {
      router.push(match.path);
    } else {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }

    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100" ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden mr-2 text-gray-500 hover:text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="text-xl font-bold text-gray-800">
              {logo}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div
                  key={item.title}
                  className="relative"
                  ref={(el) => {
                    menuItemRefs.current[item.title] = el;
                  }}
                >
                  {item.isSimpleLink ? (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 font-medium hover:text-brand ${
                        isActive ? 'text-brand' : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className={`px-4 py-2 font-medium flex items-center hover:text-brand ${
                        isActive ? 'text-brand' : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                      {activeMenu === item.title ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                  )}

                  {activeMenu === item.title && item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.submenu.map((submenu, index) => (
                          <div key={index}>
                            {submenu.title && (
                              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                                {submenu.title}
                              </h4>
                            )}
                            <ul>
                              {submenu.items.map((subItem) => {
                                const isSubActive = pathname === subItem.href;
                                return (
                                  <li key={subItem.title}>
                                    <Link
                                      href={subItem.href}
                                      className={`block px-4 py-2 hover:bg-gray-100 hover:text-brand ${
                                        isSubActive ? 'text-brand' : 'text-gray-700'
                                      }`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative flex items-center gap-4">
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-brand"
                >
                  <Search size={20} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-gray-500 hover:text-brand p-2"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}

            <Link href="/clients" passHref>
              <button className="p-2 px-6 rounded-md bg-brandsecondary hover:bg-blue-900 text-white cursor-pointer">
                Client Portal
              </button>
            </Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-gray-900 py-4 border-t border-gray-200">
            <div className="space-y-2 px-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.title} className="border-b border-gray-100 pb-2">
                    {item.isSimpleLink ? (
                      <Link
                        href={item.href}
                        className={`block py-2 font-medium text-gray-900 hover:text-blue-600 ${
                          isActive ? 'text-blue-500' : ''
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleMenu(item.title)}
                          className={`flex items-center justify-between w-full py-2 font-medium text-gray-900 hover:text-blue-600 ${
                            isActive ? 'text-blue-500' : ''
                          }`}
                        >
                          {item.title}
                          {activeMenu === item.title ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>

                        {activeMenu === item.title && item.submenu && (
                          <div className="pl-4 mt-2 space-y-3">
                            {item.submenu.map((submenu, index) => (
                              <div key={index}>
                                {submenu.title && (
                                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                    {submenu.title}
                                  </h4>
                                )}
                                <ul className="space-y-2">
                                  {submenu.items.map((subItem) => {
                                    const isSubActive = pathname === subItem.href;
                                    return (
                                      <li key={subItem.title}>
                                        <Link
                                          href={subItem.href}
                                          className={`block py-1 text-gray-800 hover:text-blue-600 ${
                                            isSubActive ? 'text-blue-500' : ''
                                          }`}
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {subItem.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
