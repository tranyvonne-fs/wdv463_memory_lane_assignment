import React from "react";
import { Link } from "gatsby";
import hashingImage from "../images/password-hashing.png";

export default function PasswordHashingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Password Hashing: Keeping User Data Safe
      </h1>

      <img
        src={hashingImage}
        alt="Password Hashing Illustration"
        className="rounded-lg mb-6"
      />

      <p className="mb-4">
        Storing plain-text passwords is one of the worst security mistakes a developer can make. That’s where <strong>password hashing</strong> comes in — a method that transforms passwords into secure, irreversible hashes.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🔐 What is Hashing?</h2>
      <p className="mb-4">
        Hashing is a one-way function that turns any input (like a password) into a fixed-length string. Even the smallest change in input produces a completely different hash.
      </p>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto text-sm">
        Plain: password123<br />
        Hash: $2b$10$qIuH9FUncIkjLTVrMoLjje0PHsGtEM3RtUFjO0.kA4CDkNkKkp3hK
      </pre>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🧂 Add Salt</h2>
      <p className="mb-4">
        Salting adds random data to each password before hashing. This ensures even if two users have the same password, their hashes will be completely different. It also protects against rainbow table attacks.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🛠️ Popular Hashing Tools</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>bcrypt:</strong> Most commonly used with Node.js, Python, and more.</li>
        <li><strong>argon2:</strong> Considered one of the most secure modern hashing algorithms.</li>
        <li><strong>scrypt:</strong> Memory-hard function, great for resisting hardware brute-force attacks.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🔁 How It Works in Auth</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>User registers with a password.</li>
        <li>Password is salted, hashed, and stored in the database.</li>
        <li>During login, the entered password is hashed and compared to the stored hash.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">💡 Final Tip</h2>
      <p className="mb-4">
        Never store or send raw passwords — not even hashes — to the frontend. And skip outdated algorithms like MD5 and SHA1. Stick with bcrypt, argon2, or scrypt for strong security.
      </p>

      <p className="font-medium italic">
        Password hashing isn’t optional — it’s essential. Make it a default part of your authentication flow.
      </p>
    </main>
  );
}
