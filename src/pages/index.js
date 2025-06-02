import * as React from "react";
import { Link } from "gatsby";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-indigo-100 text-gray-800 font-sans px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">
          Memory Lane Blog
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          A personal space to reflect on what I’ve learned as a developer.
        </p>
        <div className="grid gap-6">
          <Link
            to="/learning-postman-api-testing"
            className="block bg-white p-6 shadow-lg rounded-lg hover:bg-indigo-600 hover:text-white transition">
            🚀 Learning Postman for API Testing
          </Link>
          <Link
            to="/intro-to-rest-apis"
            className="block bg-white p-6 shadow-lg rounded-lg hover:bg-indigo-600 hover:text-white transition">
            🔗 Intro to REST APIs
          </Link>
          <Link
            to="/styled-with-tailwindcss"
            className="block bg-white p-6 shadow-lg rounded-lg hover:bg-indigo-600 hover:text-white transition">
            🎨 Styled with TailwindCSS
          </Link>
          <Link
            to="/api-best-practices"
            className="block bg-white p-6 shadow-lg rounded-lg hover:bg-indigo-600 hover:text-white transition">
            ⚙️ React API Best Practices
          </Link>
          <Link
            to="/deploying-multiple-platforms"
            className="block bg-white p-6 shadow-lg rounded-lg hover:bg-indigo-600 hover:text-white transition">
            📦 Deploying to Multiple Platforms
          </Link>
          <Link
            to="/password-hashing"
            className="block bg-white p-6 shadow-lg rounded-lg hover:bg-indigo-600 hover:text-white transition">
            🔒 Password Hashing
          </Link>
        </div>
      </div>
    </main>
  );
}
