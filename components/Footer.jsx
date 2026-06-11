import Link from "next/link";
import { Globe } from "lucide-react";


export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer style={{ backgroundColor: "var(--card-bg)", borderTop: "1px solid var(--primary)" }}>
            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-col md:flex-row justify-between gap-8">

                    {/* Logo and description */}
                    <div className="flex flex-col gap-2">
                        <div className="text-lg font-bold flex items-center gap-2" style={{ color: "var(--primary)" }}>
                            <Globe size={20} />
                            WorldLens
                        </div>
                        <p className="text-sm" style={{ color: "var(--text)" }}>
                            Explore countries around the world.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold mb-1" style={{ color: "var(--primary)" }}>Pages</h3>
                        <Link href="/" className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>Home</Link>
                        <Link href="/countries" className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>Countries</Link>
                        <Link href="/search" className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>Search</Link>
                        <Link href="/about" className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>About</Link>
                    </div>

                    {/* Social media */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold mb-1" style={{ color: "var(--primary)" }}>Social</h3>
                        <a href="https://github.com/nargesyaghoubi" target="_blank"
                            className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/narges-yaghoubi-656a28243/" target="_blank"
                            className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>
                            LinkedIn
                        </a>
                        <a href="https://x.com/N_Yaghoubi" target="_blank"
                            className="text-sm hover:opacity-70" style={{ color: "var(--text)" }}>
                            X (Twitter)
                        </a>
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center text-sm mt-6 pt-4"
                    style={{ borderTop: "1px solid var(--primary)", color: "var(--text)" }}>
                    © {year} Narges Yaghoubi — Built with Next.js App Router
                </div>

            </div>
        </footer>
    )
}