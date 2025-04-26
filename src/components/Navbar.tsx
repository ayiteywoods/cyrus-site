'use client'

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
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
  isSimpleLink?: boolean; // New prop to identify simple links like FAQ
};

type NavbarProps = {
  logo: React.ReactNode;
  menuItems: MenuItem[];
};

export default function Navbar({ logo, menuItems }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveMenu(null);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setShowSearch(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100" ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Mobile Menu Button */}
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

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div 
                key={item.title} 
                className="relative"
                ref={el => menuItemRefs.current[item.title] = el}
              >
                {item.isSimpleLink ? (
                  // Render as simple link (for FAQ)
                  <Link
                    href={item.href}
                    className={`px-4 py-5 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                      activeMenu === item.title ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  // Render as dropdown toggle
                  <>
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className={`flex items-center px-4 py-5 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${
                        activeMenu === item.title ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.title}
                      {activeMenu === item.title ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    {/* Mega Dropdown */}
                    {activeMenu === item.title && item.submenu && (
                      <div className="fixed left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-6 z-50">
                        <div 
                          className="mx-auto px-8"
                          style={{
                            marginLeft: `${menuItemRefs.current[item.title]?.offsetLeft}px`,
                            maxWidth: `calc(100vw - ${menuItemRefs.current[item.title]?.offsetLeft || 0}px)`,
                            width: '100vw'
                          }}
                        >
                          <div className="grid grid-cols-4 gap-8">
                            {item.submenu.map((submenu, index) => (
                              <div key={index} className="space-y-4">
                                {submenu.title && (
                                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                    {submenu.title}
                                  </h3>
                                )}
                                <div className="space-y-3">
                                  {submenu.items.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="group flex items-start p-2 hover:bg-gray-50 rounded transition-colors duration-200"
                                    >
                                      {subItem.icon && (
                                        <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1">
                                          {subItem.icon}
                                        </div>
                                      )}
                                      <div>
                                        <p className="text-base font-medium text-gray-900 group-hover:text-blue-600">
                                          {subItem.title}
                                        </p>
                                        {subItem.description && (
                                          <p className="text-sm text-gray-500 mt-1">
                                            {subItem.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Search Box */}
          <div className="flex items-center">
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  <Search size={20} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-gray-500 hover:text-blue-600 p-2"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t border-gray-200">
            <div className="space-y-2 px-4">
              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-gray-100 pb-2">
                  {item.isSimpleLink ? (
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-600 font-medium"
                      >
                        {item.title}
                        {activeMenu === item.title ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>

                      {/* Mobile Submenu */}
                      {activeMenu === item.title && item.submenu && (
                        <div className="pl-4 mt-2 space-y-3">
                          {item.submenu.map((submenu, index) => (
                            <div key={index}>
                              {submenu.title && (
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                  {submenu.title}
                                </h4>
                              )}
                              <ul className="space-y-2">
                                {submenu.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link
                                      href={subItem.href}
                                      className="block py-1 text-gray-600 hover:text-blue-600"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}