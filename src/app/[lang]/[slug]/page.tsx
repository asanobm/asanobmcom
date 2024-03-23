import { getPost } from "@/lib/post";
import { MdxContent } from "@/comp";

async function Page({ params }: { params: { lang: string, slug: string } }) {
  const {serialized, frontmatter} = await getPost(params.lang, params.slug);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div className={'markdown-body'}>
        <MdxContent source={serialized} />
      </div>
    </div>
  );
}

export default Page;