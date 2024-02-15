import {sync} from "glob";
import {BASE_PATH, POSTS_PATH} from "@/constants";

/**
 * Get all posts from the posts directory
 * @returns {Array} - Array of post slugs
 */
export function getAllPosts(): Array<any> {
  const postPaths = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(BASE_PATH)).replace('.mdx', '')
    }
  })
}
