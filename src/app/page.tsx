import Link from "next/link";

export default function Page() {
  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Hi, I’m Your Name.</h1>
        <p className="text-lg">
          Product leader focused on AI/ML. This site pairs with my CV and
          showcases six case studies—from end-to-end strategy to shipped product.
        </p>
        <Link
          href="/portfolio"
          className="inline-block rounded-2xl border px-4 py-2 hover:shadow-md"
        >
          View Portfolio →
        </Link>
      </div>
    </section>
  );
}
