'use client'

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DarkModeToggle } from '@/components/ui/dark-mode-toggle';
import { Menu, X } from 'lucide-react';

function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const isActiveRoute = (href: string) => pathname === href;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            className="text-xl font-semibold text-foreground cursor-pointer tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Go to homepage"
          >
            Coding | Portfolio
          </motion.button>

          <div className="hidden md:flex items-center space-x-1" role="menubar">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isActiveRoute(item.href)
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                  onClick={() => handleNavigation(item.href)}
                  role="menuitem"
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80"
                aria-labelledby="mobile-menu-title"
              >
                <div className="flex flex-col space-y-4 mt-8" id="mobile-menu">
                  <div 
                    className="text-lg font-semibold text-foreground mb-6"
                    id="mobile-menu-title"
                  >
                    Navigation
                  </div>
                  <nav role="menu">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-left px-0 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md ${
                            isActiveRoute(item.href)
                              ? 'text-foreground bg-accent'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                          onClick={() => handleNavigation(item.href)}
                          role="menuitem"
                          aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                        >
                          {item.label}
                        </Button>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
