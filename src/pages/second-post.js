import React from "react"

export default function StyledWithTailwind() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Styled with TailwindCSS</h1>
      <p>
        TailwindCSS changed the way I think about styling websites.
        Instead of creating custom CSS, I used utility classes directly in my JSX.
        This made it easier to develop responsive layouts quickly.
      </p>
      <p>
        For this blog, I used TailwindCSS to apply consistent spacing, clean typography,
        and responsive design without writing custom stylesheets.
      </p>
    </main>
  )
}
