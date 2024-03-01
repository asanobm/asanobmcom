import {sync} from "glob";
import {BASE_PATH, POSTS_PATH} from "@/constants";
import * as fs from "fs";

/**
 * Get all posts from the posts directory
 * @returns {Array} - Array of post slugs
 */

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  }
}

function buildFrontmatter(path: string) {
  const raw = fs.readFileSync(path, "utf-8");
  const frontmatter = raw.split('---')[1];
  const title = frontmatter.split('title: ')[1].split('\n')[0];
  const date = frontmatter.split('date: ')[1].split('\n')[0];
  return {
    title,
    date
  };
}

export function getAllPosts(): Array<Post> {
  const postPaths = sync(`${POSTS_PATH}/**/*.mdx`);

  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(BASE_PATH)).replace('.mdx', ''),
      frontmatter: buildFrontmatter(path)
    }
  })
}
