'use client'

import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import { Github } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen h-screen flex flex-col overflow-hidden">
      <div className="absolute top-0 z-[0] h-full w-full bg-purple-700/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <section className="relative w-full mx-auto z-1 flex justify-center items-center mt-20">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h2 className="text-6xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl">
              Seamless User Experience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                  Salesway
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Front-end application integrating authenticated REST APIs and SQL database tables. It features a custom login system, dynamic UI components, and smooth interactions. Data is fetched from both APIs and a database to ensure a seamless user experience.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                  <Link href={'/login'}><Button variant={'signin'} size={'signin'}>Sign In</Button></Link>
                </div>
              </span>
              <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                  <Link href="https://github.com/dontforgetsemicologne/salesway">
                    <Button variant={'signin'} size={'signin'}>Star on GitHub <Github/></Button>
                  </Link>
                </div>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <LinkPreview url="https://nextjs.org/">
                <span className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full border-b-2 border-black">Next.js</span>
              </LinkPreview>
              <LinkPreview url="https://tailwindcss.com/">
                <span className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full border-b-2 border-black">Tailwind CSS</span>
              </LinkPreview>
              <LinkPreview url="https://supabase.com/">
                <span className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full border-b-2 border-black">Supabase</span>
              </LinkPreview>
              <LinkPreview url="https://tanstack.com/query/latest">
                <span className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full border-b-2 border-black">TanStack Query</span>
              </LinkPreview>
              <LinkPreview url="https://vercel.com/">
                <span className="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full border-b-2 border-black">Vercel</span>
              </LinkPreview>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
