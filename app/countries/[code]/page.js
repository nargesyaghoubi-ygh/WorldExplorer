import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    try {
        const { code } = await params;
        const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${code}`,
            { cache: "no-store" }
        );
        if (!res.ok) return { title: "Country Not Found | World Explorer" };
        const data = await res.json();
        const country = data[0];
        if (!country) return { title: "Country Not Found | World Explorer" };
        return {
            title: `${country.name.common} | World Explorer`,
            description: `Learn about ${country.name.common}.`,
        };
    } catch {
        return { title: "World Explorer" };
    }
}

export default async function CountryDetailsPage({ params }) {
    // This page fetches fresh data every time.
    const { code } = await params;

    let res;
    try {
        res = await fetch(
            `https://restcountries.com/v3.1/alpha/${code}`,
            { cache: "no-store" }
        );
    } catch {
        notFound();
    }

    if (!res.ok) notFound();

    const data = await res.json();
    const country = data[0];
    if (!country) notFound();

    const languages = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A";

    const currencies = country.currencies
        ? Object.values(country.currencies)
            .map((c) => `${c.name} (${c.symbol || "?"})`)
            .join(", ")
        : "N/A";

    const timezones = country.timezones
        ? country.timezones.join(", ")
        : "N/A";

    return (
        <main className="max-w-5xl mx-auto py-10 px-4">

            {/* Back Button */}
            <Link
                href="/countries"
                style={{ color: "var(--primary)" }}
                className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition"
            >
                ← Back to Countries
            </Link>

            {/* Card */}
            <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundColor: "var(--card-bg)" }}
            >
                {/* Flag - full width banner */}
                <div style={{ height: "280px", overflow: "hidden" }}>
                    <img
                        src={country.flags.svg || country.flags.png}
                        alt={`Flag of ${country.name.common}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/* Info Section */}
                <div className="p-8">
                    {/* Names */}
                    <h1
                        className="text-4xl font-bold mb-1"
                        style={{ color: "var(--text)" }}
                    >
                        {country.name.common}
                    </h1>
                    <p
                        className="text-sm mb-8"
                        style={{ color: "var(--text)", opacity: 0.5 }}
                    >
                        {country.name.official}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                            { label: "🏛️ Capital", value: country.capital?.[0] || "N/A" },
                            { label: "🌍 Region", value: country.region || "N/A" },
                            { label: "📍 Subregion", value: country.subregion || "N/A" },
                            { label: "👥 Population", value: country.population.toLocaleString() },
                            { label: "🗣️ Languages", value: languages },
                            { label: "💰 Currencies", value: currencies },
                            { label: "🕐 Time Zones", value: timezones },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                className="rounded-xl p-4"
                                style={{
                                    backgroundColor: "var(--bg)",
                                    border: "1px solid",
                                    borderColor: "var(--primary)",
                                    borderOpacity: 0.2,
                                }}
                            >
                                <p
                                    className="text-xs font-semibold mb-1"
                                    style={{ color: "var(--primary)" }}
                                >
                                    {label}
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: "var(--text)" }}
                                >
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Google Maps Button */}
                    {country.maps?.googleMaps && (
                        <a
                            href={country.maps.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-xl font-semibold text-sm transition hover:opacity-90"
                            style={{
                                backgroundColor: "var(--primary)",
                                color: "#fff",
                            }}
                        >
                            🗺️ View on Google Maps
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}