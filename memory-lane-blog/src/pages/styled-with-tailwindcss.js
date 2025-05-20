import React from "react";
import { Link } from "gatsby";

export default function TailwindPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline font-semibold">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Styled with TailwindCSS
      </h1>
      <p className="mb-4">
        TailwindCSS helped me build a sleek, responsive layout with minimal
        custom CSS. Utility-first classes made it easy to visualize changes in
        real-time.
      </p>
      <p>
        It made the site feel modern and fast, while keeping my codebase clean
        and manageable.
      </p>
    </main>
  );
}
