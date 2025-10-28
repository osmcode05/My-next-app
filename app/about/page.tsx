import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">
        This is a simple about page for our Next.js application.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        <Link href="/about/featureAbout">Feature About</Link>
      </button>
    </div>
  );
}
