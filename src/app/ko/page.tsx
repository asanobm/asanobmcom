import {getAllPosts} from "@/lib/post";


export default function BlogPage() {
  const posts = getAllPosts('ko');
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <a href={`/blog/${post.slug.replace('/posts', '')}`}>{post.frontmatter.title}</a>
              <p>{post.frontmatter.date}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}