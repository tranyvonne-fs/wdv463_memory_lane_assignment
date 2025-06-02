import React from "react";
import { Link } from "gatsby";

export default function PostmanPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline font-semibold">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Learning Postman for API Testing
      </h1>
      <p className="mb-4">
        Postman has become one of my favorite tools for testing APIs. It helped
        me debug requests and interact with my backend before I built the
        frontend.
      </p>
      <p>
        I learned how to use methods like GET, POST, PUT, and DELETE to create,
        retrieve, update, and delete data during development.
      </p>
    </main>
  );
}
