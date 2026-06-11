export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto py-12 px-4">

            {/* Page title */}
            <h1 className="text-4xl font-bold mb-6" style={{color: "var(--primary)"}}>
                About World Explorer
            </h1>

            {/* Description */}
            <p className="text-lg mb-8" style={{color: "var(--text)"}}>
                World Explorer is a Next.js project that uses real API data 
                to display countries around the world.
            </p>

            {/* API section */}
            <div className="rounded-xl p-6 mb-6" style={{backgroundColor: "var(--card-bg)"}}>
                <h2 className="text-xl font-semibold mb-2" style={{color: "var(--primary)"}}>
                    🌐 API Used
                </h2>
                <p style={{color: "var(--text)"}}>
                    REST Countries API —{" "}
                    <a href="https://restcountries.com" target="_blank"
                        className="hover:opacity-70 underline" style={{color: "var(--primary)"}}>
                        restcountries.com
                    </a>
                </p>
            </div>

            {/* Topics section */}
            <div className="rounded-xl p-6" style={{backgroundColor: "var(--card-bg)"}}>
                <h2 className="text-xl font-semibold mb-4" style={{color: "var(--primary)"}}>
                    ⚡ Next.js Topics Practiced
                </h2>
                <ul className="flex flex-col gap-2">
                    {[
                        "App Router",
                        "File-based routing",
                        "Shared layouts",
                        "Dynamic routes",
                        "Server components",
                        "Client components",
                        "Data fetching with async/await",
                        "Static rendering and caching",
                        "Dynamic rendering",
                    ].map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-sm" 
                            style={{color: "var(--text)"}}>
                            <span style={{color: "var(--primary)"}}>✓</span>
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    );
}