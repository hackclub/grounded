import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMdxBySlug, getSlugs } from '../../lib/mdx';
import Sidebar from '../../components/Sidebar'

export async function generateStaticParams() {
  const slugs = getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DocPage({ params }) {
  const { slug } = params;
  const { content } = await getMdxBySlug(slug); // await here
  return (
    <div>
            <Sidebar />
            <article className="pl-20 prose-a:text-blue-600 prose-a:underline flex-1 p-3 prose-ul:list-disc prose-ol:list-decimal prose-sm prose-headings:my-2 prose-headings:font-semibold font-sans max-w-4xl mx-auto sm:ml-48">
      <MDXRemote source={content} />
    </article>

    </div>
    
  );
}

