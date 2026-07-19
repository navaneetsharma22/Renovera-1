"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  {
    href: "#",
    label: "Company",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/process", label: "Process" },
    ],
  },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { isScrolled } = useScroll(10);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex items-center",
        isScrolled 
          ? "h-[72px] bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "h-[88px] bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1440px] flex items-center justify-between w-full h-full">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold font-heading tracking-tight flex-shrink-0 transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}
        >
          RENOVERA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 h-full">
          {NAV_LINKS.map((link, idx) => (
            <div
              key={idx}
              className="relative h-full flex items-center group/navitem"
              onMouseEnter={() => link.children && setActiveDropdown(idx)}
              onMouseLeave={() => link.children && setActiveDropdown(null)}
            >
              {link.children ? (
                <button className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 group",
                  isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                )}>
                  {link.label}
                  <ChevronDown className="size-3" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors relative flex items-center h-full group",
                    pathname === link.href
                      ? (isScrolled ? "text-primary" : "text-white")
                      : (isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white")
                  )}
                >
                  {link.label}
                  {/* Active/Hover Indicator */}
                  <span className={cn(
                    "absolute bottom-[24px] left-4 right-4 h-[2px] transition-transform duration-300 origin-left",
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    isScrolled ? "bg-primary" : "bg-white"
                  )} />
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.children && (
                <div
                  className={cn(
                    "absolute top-full left-0 w-48 bg-background border border-border shadow-sm py-2 transition-all duration-200 origin-top-left",
                    activeDropdown === idx
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  )}
                >
                  {link.children.map((child, cIdx) => (
                    <Link
                      key={cIdx}
                      href={child.href}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors",
                        pathname === child.href
                          ? "text-primary bg-muted/50 font-medium"
                          : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Button 
            className={cn(
              "hidden md:inline-flex transition-colors",
              !isScrolled && "bg-white text-primary hover:bg-white/90"
            )}
          >
            Start a Project
          </Button>

          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 top-[88px] bg-background z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col border-t border-border overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          isScrolled && "top-[72px]"
        )}
      >
        <div className="flex flex-col p-4 gap-2">
          {NAV_LINKS.map((link, idx) => (
            <div key={idx} className="flex flex-col border-b border-border/50 last:border-0">
              {link.children ? (
                <div className="flex flex-col py-3">
                  <div className="text-lg font-medium text-foreground mb-2">
                    {link.label}
                  </div>
                  <div className="flex flex-col pl-4 gap-3 border-l-2 border-border/50">
                    {link.children.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        href={child.href}
                        className={cn(
                          "text-base transition-colors",
                          pathname === child.href ? "text-primary font-medium" : "text-muted-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "py-4 text-lg transition-colors flex items-center justify-between",
                    pathname === link.href ? "text-primary font-medium" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          
          <div className="mt-8 pt-4">
            <Button className="w-full" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
