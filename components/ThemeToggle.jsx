'use client';

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            dark ? "dark" : "light"
        );
    }, [dark]);

    return (
        <button 
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:opacity-70 transition"
            style={{color: "var(--primary)"}}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}