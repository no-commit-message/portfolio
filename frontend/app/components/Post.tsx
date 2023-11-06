import { PostInterface } from "@/libs/types"
import Link from "next/link"

interface Props {
    post: PostInterface
}

export const Post = ({ post }: Props) => {
    return (
        <div className="border inline-block px-7 py-3 rounded-md shadow-md mx-4">
            <Link href={`/${post.id}`} className="text-2xl mb-2">{ post.title }</Link>
            <p>{ post.content }</p>
            <p>投稿日: { post.created_at }</p>
        </div>
    )
}