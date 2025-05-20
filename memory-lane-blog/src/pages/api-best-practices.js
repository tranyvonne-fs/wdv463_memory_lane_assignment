import React from "react"
import { Link } from "gatsby"
import apiImage from "../images/api-structure.png"

export default function ReactAPIPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">
        Best Practices for Using APIs Within React
      </h1>
      <img
        src={apiImage}
        alt="React API Flow"
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="mb-4">
        When using APIs in React, organizing your fetch logic and separating
        concerns is key to building maintainable applications. It also helps
        avoid unnecessary re-renders and improves performance.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          ✅ <strong>Use `useEffect` + `fetch` or `axios`</strong>: Always call APIs in `useEffect` when components mount.
        </li>
        <li>
          ✅ <strong>Abstract API logic</strong>: Move `fetch` or `axios` logic into helper files for reuse.
        </li>
        <li>
          ✅ <strong>Handle errors</strong>: Wrap calls in `try/catch` and display fallback UI when needed.
        </li>
        <li>
          ✅ <strong>Use `useState` and `useReducer` wisely</strong>: Store response data cleanly and update only when needed.
        </li>
        <li>
          ✅ <strong>Debounce inputs</strong>: When searching or filtering via API, debounce user input to reduce calls.
        </li>
      </ul>
      <p className="mt-4">
        Following these best practices can help make your API integration clean, responsive, and future-proof.
      </p>
    </main>
  )
}
