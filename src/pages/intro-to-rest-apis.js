import React from "react";
import { Link } from "gatsby";

export default function RESTPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline font-semibold">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Intro to REST APIs
      </h1>
      <p className="mb-4">
        REST APIs allow different systems to talk to each other over HTTP. I
        used them to connect my frontend React app to a Node.js backend with
        MongoDB.
      </p>
      <p>
        Understanding endpoints and requests helped me grasp how data flows
        across full-stack apps.
      </p>
    </main>
  );
}
