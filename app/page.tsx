'use client';

import React from 'react';
import Link from 'next/link';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans text-slate-800 pb-20">
      {/* 1. 상단 네비게이션 바 */}
      <nav className="bg-[#A7F3D0] px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-bold text-emerald-900 tracking-tight">
          BOO
        </h1>

        <div className="flex items-center gap-6 font-medium text-emerald-900">
          <Link href="/about" className="hover:text-emerald-700 transition">
            About
          </Link>
          <Link href="/project" className="hover:text-emerald-700 transition">
            Project
          </Link>
          <Link href="/team" className="hover:text-emerald-700 transition">
            Team
          </Link>
          <Link href="/contact" className="hover:text-emerald-700 transition">
            Contact
          </Link>

          {isSignedIn ? (
            <SignOutButton>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm transition shadow-sm">
                로그아웃
              </button>
            </SignOutButton>
          ) : (
            <SignInButton mode="modal">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-sm transition shadow-sm">
                로그인
              </button>
            </SignInButton>
          )}
        </div>
      </nav>

      {/* 2. 메인 컨텐츠 영역 */}
      <main className="w-full px-6 py-16 flex flex-col items-center text-center">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-10">
            Welcome to JungSeo's Portfolio
          </h2>

          {/* ✅ 프로필 이미지 살짝 축소 */}
          <div className="relative mb-10 group cursor-pointer">
            <div className="w-56 h-56 rounded-3xl overflow-hidden border-8 border-white shadow-xl bg-white relative z-10 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-emerald-200 z-0"></div>
          </div>

          <div className="space-y-3 mb-16">
            <h3 className="text-3xl font-bold text-slate-800">
              정보보호학과 24학번 김정서
            </h3>
          </div>
        </div>

        {/* ✅ 하단 이미지 높이 축소 */}
        <div className="w-full max-w-[90%] mt-4 px-4">
          <div className="w-full h-56 md:h-80 bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white relative group">
            <img
              src="/배경2.jpg"
              alt="Bottom Banner"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2025 Kim Jungseo. All rights reserved.
      </footer>
    </div>
  );
}
