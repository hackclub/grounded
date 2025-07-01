import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDir = path.join(process.cwd(), 'guides');

export function getSlugs() {
  return fs.readdirSync(contentDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getMdxBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  return { content, frontMatter: data };
}

export async function getMdxSource(slug) {
  const { content, frontMatter } = getMdxBySlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-gfm'), require('remark-prism')],
      rehypePlugins: [rehypeHighlight],
    },
  });
  return { mdxSource, frontMatter };
}
