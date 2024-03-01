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