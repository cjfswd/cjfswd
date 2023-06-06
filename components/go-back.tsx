"use client"
import { useRouter, } from 'next/navigation'

export default function GoBack({ children }: { children?: React.ReactNode } = { children: [] }) {
    const router = useRouter()

    return (<>
        <div className="mb-6 inline-block w-fit cursor-pointer text-lg font-bold" onClick={() => {
            router.back()
            router.push('/blog')
        }}>{"<--"}</div>
        {children}
    </>)
}