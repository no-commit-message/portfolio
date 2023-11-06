import { PostInterface } from "@/libs/types"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Link from "next/link"

const SERVER_URL = 'http://127.0.0.1:8000'

export default async function Detail({ params }: { params: { id: string } }) {

    async function getPost (id: string): Promise<PostInterface> {
        const res = await fetch(`${SERVER_URL}/api/posts/${params.id}`, { next: { revalidate: 3 } })
        if(!res.ok) {
          throw new Error('Error')
        }
        return res.json()
    }

    const post = await getPost(params.id)

    return (
        <div>
            <Header />
            <div className="flex justify-center mt-8">
                <div className="w-6/12 border rounded-lg shadow-lg flex flex-col px-8 py-4">
                    <h1 className="border-b border-b-slate-300 text-2xl mb-4">{ post.title }</h1>
                    <p>{ post.content }</p>
                    <Link href='/' className="hover:text-blue-800 hover:underline mt-4">投稿一覧に戻る</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}