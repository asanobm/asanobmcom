import { getAllPosts } from "@/lib/post";
import Image from "next/image";

export default function Home() {
  const allPosts = getAllPosts('**');
  // Last 5 posts sorted by date
  const last5Posts = allPosts
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
    .slice(0, 5);
  
  return (
    <div>
      <h1>Posts</h1>
      {/* Last 5 posts  */}
      <ul>
        {allPosts.map((post) => {
          return (
            <li key={post.slug}>
              <Image src={post.frontmatter.thumbnail} alt="thumbnail" width={200} height={200} />
              <a href={`${post.slug.replace('/posts', '')}`}>{post.frontmatter.title}</a>
              <p>{post.frontmatter.date}</p>
              <p>{post.frontmatter.language}</p>
            </li>
          )
        })}
      </ul>

      {/* Blog Card */}
    </div>
  )
}
