'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Globe } from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/countries", label: "Countries" },
    { href: "/search", label: "Search" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    const pathName = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow-md py-4" style={{ backgroundColor: "var(--bg)" }}>
            <div className="container mx-auto px-4 flex justify-between items-center">

                <Link href="/" className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--primary)" }}>
                    <Globe size={22} />
                    WorldLens
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {links.map((link) => {
                        const isActive = pathName === link.href;
                        return (
                            <Link key={link.href} href={link.href}
                                style={{ color: isActive ? "var(--primary)" : "var(--text)" }}
                                className={isActive ? "font-semibold" : "hover:opacity-70"}>
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    {/* Hamburger button - only on mobile */}
                    <button className="md:hidden p-2" style={{ color: "var(--primary)" }}
                        onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden px-4 py-4 flex flex-col gap-4"
                    style={{ backgroundColor: "var(--bg)" }}>
                    {links.map((link) => {
                        const isActive = pathName === link.href;
                        return (
                            <Link key={link.href} href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{ color: isActive ? "var(--primary)" : "var(--text)" }}
                                className={isActive ? "font-semibold" : "hover:opacity-70"}>
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
            )}
        </header>
    )
}