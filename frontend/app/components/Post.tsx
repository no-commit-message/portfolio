import { PostInterface } from "@/libs/types"
import Image from "next/image"
import Link from "next/link"

interface Props {
    post: PostInterface
}

export const Post = ({ post }: Props) => {
    const text = post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content

    return (
        <div className="border inline-block px-20 py-5 rounded-md shadow-md mx-12 my-2">
            <div className="flex items-center mb-4">
                <Link href={`/${post.id}`} className="text-3xl hover:underline">{ post.title }</Link>
                <Image src={post.image} width={80} height={80} alt='画像' className="border-4 ml-2" />
            </div>
            <div className="mb-2">
                <p className="inline">{ text }</p>
                <Link
                    href={`/${post.id}`}
                    className="inline-block ml-4 text-blue-700 hover:text-blue-900 hover:underline">詳細ページへ</Link>
            </div>
            <p className="mb-1">自信: {post.skill_level}/5</p>
            <p>投稿日: { post.created_at }</p>
        </div>
    )
}