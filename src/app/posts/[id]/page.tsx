import { getAllPostIds, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

// This function is optional, but recommended for performance.
// It tells Next.js which blog post pages to pre-render at build time.
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => path.params);
}

type Params = {
  params: {
    id: string;
  };
};

export default async function Post({ params }: Params) {
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <article className="prose prose-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <div className="text-gray-500 mb-8">
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </main>
  );
}
