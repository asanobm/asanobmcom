import path from "path";
import * as fs from "fs";
import {POSTS_PATH} from "@/constants";
import {serialize} from "next-mdx-remote/serialize";
import {type MDXRemoteSerializeResult} from "next-mdx-remote";
import MDXContent from "@/components/MdxContent";

type Frontmatter = {
  title: string;
  date: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  const raw = await fs.readFileSync(filepath, "utf-8");
  const serialized = await serialize(raw);
  const frontmatter = serialized.frontmatter as Frontmatter;
  return {
    serialized,
    frontmatter,
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const {serialized, frontmatter} = await getPost(path.join(POSTS_PATH, `${params.slug}.mdx`));
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