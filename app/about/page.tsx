'use client';

import React from 'react';
import Link from 'next/link'; // Link 추가

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full animate-fadeIn">
        {/* 홈으로 돌아가기 버튼 */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900 transition-colors group"
          >
            {/* ArrowLeft 아이콘 -> SVG로 대체 */}
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
              className="mr-1 group-hover:-translate-x-1 transition-transform"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Home
          </Link>
        </div>

        {/* 메인 카드 */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-100 relative overflow-hidden">
          {/* 상단 장식 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>

          {/* 헤더 */}
          <h2 className="text-2xl font-bold text-emerald-800 mb-8 flex items-center gap-2 relative z-10">
            {/* User 아이콘 -> SVG */}
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
              className="text-emerald-500"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            {/* 왼쪽: 프로필 이미지 */}
            <div className="shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="profile"
                className="w-32 h-32 rounded-2xl bg-white border-4 border-emerald-50 shadow-lg object-cover"
              />
            </div>

            {/* 오른쪽: 상세 정보 */}
            <div className="space-y-4 flex-1 w-full">
              {/* 이름 */}
              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  Name
                </span>
                <p className="text-xl font-bold text-gray-800">
                  김정서 (Kim Jungseo)
                </p>
              </div>

              {/* MBTI & 관심분야 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-yellow-50/80 p-4 rounded-xl border border-yellow-100">
                  <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider block mb-1">
                    MBTI
                  </span>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-extrabold text-yellow-600">
                      ESFP
                    </p>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded-full text-yellow-600 border border-yellow-200">
                      연예인형
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-100">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                    Interest
                  </span>
                  <p className="text-sm font-medium text-blue-800 mt-1">
                    아직 찾는 중.. 🔍
                  </p>
                </div>
              </div>

              {/* 취미 */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Hobbies
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm flex items-center gap-1">
                    📺 OTT 시청
                  </span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm flex items-center gap-1">
                    🐱 고양이와 놀기
                  </span>
                  <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 shadow-sm flex items-center gap-1">
                    🍳 요리
                  </span>
                </div>
              </div>
            </div>
          </div>
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
