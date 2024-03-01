import { getAllPosts } from "@/lib/post";

export default function Home() {
  const posts = getAllPosts('**');
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <a href={`${post.slug.replace('/posts', '')}`}>{post.frontmatter.title}</a>
              <p>{post.frontmatter.date}</p>
              <p>{post.frontmatter.language}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
