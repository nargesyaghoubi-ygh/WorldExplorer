// This page fetches fresh data every time.

import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps,independent`,
    { cache: "no-store" }
  );
  if (!res.ok) return { title: "Country Not Found | World Explorer" };
  const data = await res.json();
  if (!Array.isArray(data) || !data[0]) return { title: "Country Not Found | World Explorer" };
  const country = data[0];
  return {
    title: `${country.name.common} | World Explorer`,
    description: `Learn about ${country.name.common} — capital, population, languages, and more.`,
  };
}

export default async function CountryDetailsPage({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}?fields=cca3,name,capital,region,subregion,population,flags,languages,currencies,timezones,maps,independent`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const data = await res.json();

  // Make sure data is a valid array with at least one item
  if (!Array.isArray(data) || !data[0]) notFound();

  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol || "—"})`)
        .join(", ")
    : "N/A";

  const timezones = country.timezones?.join(", ") || "N/A";
  const capital = country.capital?.[0] || "N/A";

  const details = [
    { label: "Official Name", value: country.name.official },
    { label: "Capital", value: capital },
    { label: "Region", value: country.region },
    { label: "Subregion", value: country.subregion || "N/A" },
    { label: "Population", value: country.population.toLocaleString() },
    { label: "Languages", value: languages },
    { label: "Currencies", value: currencies },
    { label: "Time Zones", value: timezones },
    { label: "Country Code", value: country.cca3 },
    { label: "Independent", value: country.independent ? "Yes" : "No" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Back button */}
      <Link
        href="/countries"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100 bg-gray-900 border border-gray-800 hover:border-blue-500/40 px-4 py-2 rounded-xl mb-8 transition-all"
      >
        ← Back to Countries
      </Link>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Flag */}
        <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Title + badge + actions */}
        <div className="flex flex-col justify-center">
          <span className="inline-block self-start text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
            {country.region}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-2">
            {country.name.common}
          </h1>

          <p className="text-gray-500 italic text-sm mb-6">
            {country.name.official}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
            >
              🗺️ View on Google Maps
            </a>
            <Link
              href="/countries"
              className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-semibold rounded-xl border border-gray-700 transition-all hover:-translate-y-0.5"
            >
              ← All Countries
            </Link>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {details.map(({ label, value }) => (
          <div
            key={label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-1">
              {label}
            </p>
            <p className="text-gray-200 font-medium text-sm">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
