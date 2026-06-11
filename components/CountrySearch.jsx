"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function CountrySearch({ countries }) {
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("");

    const filtered = countries.filter((country) => {
        const matchesName = country.name.common
            .toLowerCase()
            .includes(query.toLowerCase());
        const matchesRegion = region ? country.region === region : true;
        return matchesName && matchesRegion;
    });

    return (
        <div>
            {/* Search Controls */}
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    marginBottom: "1.5rem",
                }}
            >
                {/* Search Input */}
                <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
                    <span
                        style={{
                            position: "absolute",
                            left: "0.9rem",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "var(--text)",
                            opacity: 0.4,
                            pointerEvents: "none",
                            fontSize: "1rem",
                        }}
                    >
                        🔍
                    </span>
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "0.75rem 1rem 0.75rem 2.5rem",
                            borderRadius: "0.75rem",
                            border: "1px solid var(--primary)",
                            backgroundColor: "var(--card-bg)",
                            color: "var(--text)",
                            fontSize: "0.95rem",
                            outline: "none",
                        }}
                    />
                </div>

                {/* Region Filter */}
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "0.75rem",
                        border: "1px solid var(--primary)",
                        backgroundColor: "var(--card-bg)",
                        color: "var(--text)",
                        fontSize: "0.95rem",
                        outline: "none",
                        cursor: "pointer",
                        minWidth: "160px",
                    }}
                >
                    <option value="">All Regions</option>
                    {regions.map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
            </div>

            {/* Results count */}
            <p
                style={{
                    color: "var(--text)",
                    opacity: 0.5,
                    fontSize: "0.875rem",
                    marginBottom: "1.5rem",
                }}
            >
                {filtered.length} countr{filtered.length === 1 ? "y" : "ies"} found
            </p>

            {/* No results */}
            {filtered.length === 0 && (
                <div
                    style={{
                        textAlign: "center",
                        padding: "4rem 2rem",
                        color: "var(--text)",
                        opacity: 0.5,
                    }}
                >
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌐</div>
                    <p style={{ fontSize: "1.1rem" }}>No countries found for "{query}"</p>
                </div>
            )}

            {/* Country Grid */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {filtered.map((country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </div>
    );
}
