import { getAllPosts } from '@/lib/post'
import { getDictionary } from '@/app/[lang]/dictionaries'
 
export default async function Page({ params }: { params: { lang: string } }) {
  const posts = getAllPosts(params.lang)
  const dict = await getDictionary(params.lang)
  return (
    <div>
      <h1 className='text-2xl font-bold'>{dict.products.cart}</h1>
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