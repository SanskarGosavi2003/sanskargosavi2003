import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-12">My Blog</h1>
        <section>
          <ul className="space-y-8">
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <li key={id} className="border p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <Link href={`/posts/${id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
                  {title}
                </Link>
                <br />
                <small className="text-gray-500">
                  {date}
                </small>
                <p className="mt-2 text-gray-700">{excerpt}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

