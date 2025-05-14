import React from 'react';
import { Link } from 'gatsby';

export default function Layout({ children }) {
  return (
    <div className="p-4 max-w-3xl mx-auto font-sans">
      <header className="mb-4 border-b pb-2">
        <h1 className="text-3xl font-bold">📘 My Tech Journal</h1>
        <nav className="mt-2">
          <Link className="text-blue-600 hover:underline" to="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
