import React from "react"

export default function LearningPostman() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Learning Postman for API Testing</h1>
      <p>
        Postman has become one of my favorite tools for testing APIs.
        When I was working on a project involving CRUD operations using Node.js,
        Express, and MongoDB, Postman helped me simulate requests and debug responses.
        It allowed me to interact with the API without building a frontend first.
      </p>

      <h2>What I Learned</h2>
      <p>
        I used HTTP methods like GET, POST, PUT, and DELETE to test routes
        for creating, retrieving, updating, and deleting records.
        I also discovered that Postman lets you write simple tests to confirm
        that your API is working correctly.
      </p>
    </main>
  )
}
