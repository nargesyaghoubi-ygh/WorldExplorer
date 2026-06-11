import Link from "next/link";
import { Globe } from "lucide-react";


export default function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 gap-6">

            <h1 className="text-5xl font-bold flex items-center justify-center gap-3" style={{ color: "var(--primary)" }}>
                <Globe size={48} />
                WorldLens
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--text)" }}>
                Explore countries around the world and learn about their flags,
                capitals, populations, currencies, and languages.
            </p>

            <Link href="/countries"
                className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold"
                style={{ backgroundColor: "var(--primary)" }}>
                Explore Countries
            </Link>

        </section>
    );
}