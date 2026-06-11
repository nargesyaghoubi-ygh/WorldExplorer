import Link from "next/link";

export default function CountryCard({ country }) {
    return (
        <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            style={{ backgroundColor: "var(--card-bg)" }}>

            <img
                src={country.flags.png}
                alt={country.name.common}
                className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                    {country.name.common}
                </h2>
                <p className="text-sm" style={{ color: "var(--text)" }}>
                    <span className="font-semibold">Capital:</span> {country.capital?.[0] || "No capital"}
                </p>
                <p className="text-sm" style={{ color: "var(--text)" }}>
                    <span className="font-semibold">Region:</span> {country.region}
                </p>
                <p className="text-sm" style={{ color: "var(--text)" }}>
                    <span className="font-semibold">Population:</span> {country.population.toLocaleString()}
                </p>

                <Link href={`/countries/${country.cca3}`}
                    className="mt-2 text-center py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition"
                    style={{ backgroundColor: "var(--primary)" }}>
                    View Details
                </Link>
            </div>
        </div>
    )
}