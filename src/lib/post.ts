import {sync} from "glob";
import {BASE_PATH, POSTS_PATH} from "@/constants";
import * as fs from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

/**
 * Get all posts from the posts directory
 * @returns {Array} - Array of post slugs
 */

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    language: string;
    thumbnail: string;
  }
}

function buildFrontmatter(path: string) {
  const raw = fs.readFileSync(path, "utf-8");
  const frontmatter = raw.split('---')[1];
  const title = frontmatter.split('title: ')[1].split('\n')[0];
  const date = frontmatter.split('date: ')[1].split('\n')[0];
  const language = frontmatter.split('language: ')[1].split('\n')[0];
  const thumbnail = frontmatter.split('thumbnail: ')[1].split('\n')[0];
  return {
    title,
    date,
    language,
    thumbnail,
  };
}

export function getAllPosts(language: string): Array<Post> {
  const postPaths = sync(`${POSTS_PATH}/${language}/**/*.mdx`);

  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(BASE_PATH)).replace('.mdx', ''),
      frontmatter: buildFrontmatter(path)
    }
  })
}

type Frontmatter = {
  title: string;
  date: string;
};

type PostFrontMatter<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export async function getPost(language: string, slug: string): Promise<PostFrontMatter<Frontmatter>> {
  // path.join(POSTS_PATH, `${params.slug}.mdx`)
  const raw = fs.readFileSync(path.join(`${POSTS_PATH}/${language}`, `${slug}.mdx`), "utf-8");
  const serialized = await serialize(raw);
  const frontmatter = serialized.frontmatter as Frontmatter;
  return {
    serialized,
    frontmatter,
  };
}