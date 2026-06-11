import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1
                className="text-8xl font-bold mb-4"
                style={{ color: "var(--primary)" }}
            >
                404
            </h1>
            <h2
                className="text-2xl font-semibold mb-2"
                style={{ color: "var(--text)" }}
            >
                Page Not Found
            </h2>
            <p
                className="mb-8 text-sm"
                style={{ color: "var(--text)", opacity: 0.5 }}
            >
                The page you're looking for doesn't exist.
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition"
                style={{ backgroundColor: "var(--primary)", color: "#fff" }}
            >
                Back to Home
            </Link>
        </main>
    );
}