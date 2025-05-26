import React from "react";
import { Link } from "gatsby";
import deployingImg from "../images/deploying.png"

export default function DeployingPlatformsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-800">
      <Link
        to="/"
        className="inline-block mb-6 text-indigo-600 hover:underline font-semibold"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        Deploying to Multiple Platforms
      </h1>

      <img
        src={deployingImg}
        alt="Deploying to multiple platforms"
        className="rounded-lg mb-6"
      />

      <p className="mb-4">
        Deploying your static site to more than one platform gives your
        application better uptime, flexibility, and professional polish.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🌐 Why It Matters</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>High Availability:</strong> Stay online even if one platform goes down.</li>
        <li><strong>Performance Testing:</strong> Compare how your site performs on each CDN.</li>
        <li><strong>Audience Reach:</strong> Serve different user bases from multiple sources.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🚀 Popular Platforms</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Netlify:</strong> Easy GitHub integration and continuous deployment.</li>
        <li><strong>Vercel:</strong> Great for Next.js and auto framework detection.</li>
        <li><strong>GitHub Pages:</strong> Lightweight, simple static site hosting.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">🛠️ Tips</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Use GitHub Actions to automate multi-platform deploys.</li>
        <li>Keep platform-specific config files like <code>_redirects</code> or <code>vercel.json</code> tidy.</li>
        <li>Test each platform for broken links, loading issues, or env variable conflicts.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">💡 Bonus Tip</h2>
      <p className="mb-4">
        If you own a custom domain, you can assign subdomains to different platforms
        — like <code>www.example.com</code> on Netlify and <code>blog.example.com</code> on GitHub Pages.
      </p>

      <p className="font-medium italic">
        Want to level up your web dev game? Try deploying the same site on two platforms and compare!
      </p>
    </main>
  );
}
