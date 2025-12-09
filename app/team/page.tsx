'use client';

import React from 'react';
// --- [미리보기용 임시 코드] ---
// 로컬 프로젝트(Next.js)에서 사용 시 이 부분을 지우고
import Link from 'next/link';
// ---------------------------

export default function Team() {
  const members = [
    {
      name: '김정서',
      role: 'Team Leader',
      // 각 멤버의 사진 파일 경로를 여기에 적어줍니다. (public 폴더 기준)
      image: '/나.jpg',
      url: 'https://github.com/upuptts12-arch',
    },
    {
      name: '오은채',
      role: 'Frontend',
      image: '/은채.jpg',
      url: 'https://github.com/euon05/',
    },
    {
      name: '이예빈',
      role: 'Frontend',
      image: '/예빈.jpg',
      url: 'https://github.com/yebeen547',
    },
    {
      name: '정효민',
      role: 'Frontend',
      image: '/정효민.jpg',
      url: 'https://github.com/EHWkddl',
    },
    {
      name: '한지원',
      role: 'Frontend',
      image: '/지원.jpg',
      url: 'https://github.com/jiwon416',
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full animate-fadeIn">
        {' '}
        {/* 너비를 좀 더 넓혔어요 (max-w-2xl) */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-100 relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>

          {/* 홈 버튼 */}
          <Link
            href="/"
            className="absolute top-6 right-6 text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1 group z-20"
          >
            <span className="text-sm font-bold group-hover:-translate-x-1 transition-transform">
              ← Home
            </span>
          </Link>

          {/* 헤더 */}
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-bold text-emerald-800 flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl">🌱</span> Team
            </h1>
            <p className="text-emerald-600 font-medium">웹을 위해 태어남</p>
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full mt-2 font-bold">
              Project: shoppingmall
            </div>
          </div>

          {/* 팀원 카드 그리드 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 relative z-10">
            {members.map((member, index) => (
              <a
                key={index}
                href={member.url || '#'}
                target={member.url ? '_blank' : undefined}
                rel={member.url ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <div className="bg-white border border-emerald-100 rounded-2xl p-4 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* ▼▼▼ 사진 영역 (네모난 모양) ▼▼▼ */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mb-3 shadow-md group-hover:scale-105 transition-transform">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                      {member.name}
                    </h3>

                    {/* 역할 표시 삭제됨 */}

                    {/* 깃허브 아이콘 */}
                    <div className="mt-2 text-gray-300 group-hover:text-emerald-500 transition-colors flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* 배포 주소 배너 */}
          <div className="relative z-10 group">
            <a
              href="https://shoppingmall-taupe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-4 bg-linear-to-r from-emerald-500 to-teal-500 rounded-xl text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-emerald-100 font-medium mb-0.5">
                    TEAM PROJECT
                  </p>
                  <p className="font-bold text-lg truncate">
                    쇼핑몰 배포 사이트 바로가기 🚀
                  </p>
                </div>
                <div className="text-white/80">→</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
