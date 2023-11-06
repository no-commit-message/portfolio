import { PostInterface } from '@/libs/types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Post } from './components/Post'

const SERVER_URL = 'http://127.0.0.1:8000'

async function getPosts(): Promise<PostInterface[]> {
  const res = await fetch(`${SERVER_URL}/api/posts/`, { next: { revalidate: 3 } })
  if(!res.ok) {
    throw new Error('Error')
  }
  return res.json()
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-8'>
        <h1 className='text-3xl mb-4'>使用できる技術一覧</h1>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post}/>
          ))} 
        </div>
      </div>
      <Footer />
    </div>
  )
}
