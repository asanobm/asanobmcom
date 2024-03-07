import { getAllPosts } from '@/lib/post'
import { getDictionary } from './dictionaries'
 
export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  const posts = getAllPosts(params.lang)
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <a href={`${post.slug.replace('/posts', '')}`}>{post.frontmatter.title}</a>
              <p>{post.frontmatter.date}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}