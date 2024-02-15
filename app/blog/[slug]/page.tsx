import path from "path";
import * as fs from "fs";
import {POSTS_PATH} from "@/constants";

export default function Page({ params }: { params: { slug: string } }) {
  // read post from file and return it mdx
  const postPath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const contents = fs.readFileSync(postPath, 'utf8');
  return <div>{contents}</div>
}