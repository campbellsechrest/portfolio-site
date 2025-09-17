import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata = { title: "Portfolio" };

export default async function Page() {
  const items = await getAllCaseStudies();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/case/${item.slug}`}
            className="block rounded-2xl border p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm opacity-80 mt-2">{item.summary}</p>
            <div className="text-xs opacity-60 mt-3">
              {new Date(item.date).toLocaleDateString()}
              {item.tags?.length ? " · " + item.tags.join(" • ") : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
