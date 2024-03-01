import path from "path";
import * as fs from "fs";
import {POSTS_PATH} from "@/constants";
import {serialize} from "next-mdx-remote/serialize";
import {type MDXRemoteSerializeResult} from "next-mdx-remote";
import MDXContent from "@/components/MdxContent";
import { getPost } from "@/lib/post";

async function Page({ params }: { params: { slug: string } }) {
  const {serialized, frontmatter} = await getPost('ko', params.slug);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div className={'markdown-body'}>
        <MDXContent source={serialized} />
      </div>
    </div>
  );
}

export default Page;