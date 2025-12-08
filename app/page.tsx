'use client';

import Link from 'next/link';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-emerald-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* 로그인/로그아웃 버튼 - 화면 오른쪽 상단 */}
      <div className="absolute top-4 right-4">
        {isSignedIn ? (
          <SignOutButton>
            <button className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition text-sm">
              로그아웃
            </button>
          </SignOutButton>
        ) : (
          <SignInButton>
            <button className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition text-sm">
              로그인
            </button>
          </SignInButton>
        )}
      </div>

      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 bg-white/20 rounded-full -top-20 -left-20 animate-pulseSlow"></div>
        <div className="absolute w-56 h-56 bg-white/10 rounded-full -bottom-16 right-10 animate-pulseSlow"></div>
      </div>

      {/* 프로필 카드 */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-10 max-w-md w-full text-center border border-emerald-100 relative z-10">
        {/* 프로필 */}
        <div className="flex flex-col items-center space-y-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-emerald-200 shadow-sm"
          />
          <h1 className="text-3xl font-bold text-emerald-700">
            김정서의 포트폴리오
          </h1>
          <p className="text-gray-600 text-sm">정보보호학과 24학번</p>
        </div>

        {/* 메뉴 버튼 */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/about"
            className="block px-4 py-2 bg-emerald-400 text-white rounded-full shadow-md hover:bg-emerald-500 transition text-sm"
          >
            📖 About
          </Link>
          <Link
            href="/project"
            className="block px-4 py-2 bg-emerald-400 text-white rounded-full shadow-md hover:bg-emerald-500 transition text-sm"
          >
            💻 Project
          </Link>
          <Link
            href="/team"
            className="block px-4 py-2 bg-emerald-400 text-white rounded-full shadow-md hover:bg-emerald-500 transition text-sm"
          >
            👥 Team
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 bg-emerald-400 text-white rounded-full shadow-md hover:bg-emerald-500 transition text-sm"
          >
            📬 Contact
          </Link>
        </div>

        {/* 푸터 */}
        <p className="text-xs text-gray-400 mt-6">
          © 2025 Kim Jungseo | Portfolio
        </p>
      </div>

      {/* Tailwind 애니메이션 */}
      <style jsx>{`
        @keyframes pulseSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 10s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
