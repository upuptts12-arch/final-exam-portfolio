'use client';

import React from 'react';
import Link from 'next/link';

export default function Project() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-fadeIn">
        {/* 메인 카드 */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-100 relative overflow-hidden">
          {/* 상단 장식 효과 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>

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
          <h1 className="text-3xl font-bold text-emerald-800 mb-8 flex items-center gap-3 relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-500"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            </svg>
            Projects
          </h1>

          {/* 프로젝트 리스트 */}
          <ul className="space-y-4 relative z-10">
            <li>
              <a
                href="https://clerk-app-jet.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-emerald-50/50 hover:bg-emerald-100/50 border border-emerald-100 rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-900 text-lg group-hover:text-emerald-700">
                      clerk-app
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400 group-hover:text-emerald-600"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <p className="text-sm text-emerald-600/80 mt-1">
                    인증 및 사용자 관리 프로젝트
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://crud-xi-lake-89.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white hover:bg-emerald-50/30 border border-gray-200 hover:border-emerald-200 rounded-xl p-4 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800 text-lg group-hover:text-emerald-800">
                      crud
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400 group-hover:text-emerald-500"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 group-hover:text-emerald-600/70">
                    기본적인 CRUD 기능 구현
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 애니메이션 스타일 */}
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
