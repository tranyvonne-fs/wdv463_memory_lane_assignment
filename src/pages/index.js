import React from "react"
import { Link } from "gatsby"

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Welcome to Memory Lane Blog
      </h1>
      <p style={{ marginBottom: "2rem" }}>
        A personal space to reflect on what I’ve learned as I grow as a developer.
      </p>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li>
          <Link to="/first-post">
            👉 Learning Postman for API Testing
          </Link>
        </li>
        <li>
          <Link to="/third-post">
            👉 Intro to REST APIs
          </Link>
        </li>
        <li>
          <Link to="/second-post">
            👉 Styled with TailwindCSS
          </Link>
        </li>
      </ul>
    </main>
  )
}
