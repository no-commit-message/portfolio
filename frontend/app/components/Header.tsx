import Link from 'next/link'

export const Header = () => {
    return (
        <div className="bg-slate-800 text-white flex justify-center text-4xl py-3">
            <Link href='/'>Portfolio</Link> 
        </div>
    )
}