'use client';

import React from 'react';
import Link from 'next/link';

export default function Team() {
  const members = [
    { name: '김정서', url: 'https://github.com/upuptts12-arch' },
    { name: '오은채', url: 'https://github.com/euon05/' },
    { name: '이예빈', url: 'https://github.com/yebeen547' },
    { name: '정효민', url: 'https://github.com/EHWkddl' },
    { name: '한지원', url: '' }, // URL 없음
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-fadeIn">
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
          <h1 className="text-3xl font-bold text-emerald-800 mb-2 flex items-center gap-3 relative z-10">
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Team
          </h1>

          {/* 팀 정보 요약 박스 */}
          <div className="mb-6 relative z-10">
            <h2 className="text-xl font-semibold text-emerald-700">
              웹을 위해 태어남
            </h2>
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full mt-1 font-medium">
              Project: shoppingmall
            </div>
          </div>

          {/* 팀원 리스트 */}
          <div className="space-y-3 relative z-10">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">
              Members
            </h3>
            <ul className="space-y-2">
              {members.map((member, index) => (
                <li key={index}>
                  <a
                    href={member.url || '#'}
                    target={member.url ? '_blank' : undefined}
                    rel={member.url ? 'noopener noreferrer' : undefined}
                    onClick={(e) => !member.url && e.preventDefault()}
                    className={`flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-50 transition-all duration-300 group shadow-sm ${
                      member.url
                        ? 'hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow cursor-pointer'
                        : 'cursor-default opacity-80'
                    }`}
                  >
                    <span
                      className={`font-medium text-gray-700 ${
                        member.url ? 'group-hover:text-emerald-700' : ''
                      }`}
                    >
                      {member.name}
                    </span>
                    <span
                      className={`flex items-center text-sm transition-colors ${
                        member.url
                          ? 'text-gray-400 group-hover:text-emerald-600'
                          : 'text-gray-300'
                      }`}
                    >
                      {member.url ? 'GitHub' : '준비중'}
                      {member.url && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 배포 상태 */}
          <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-2 relative z-10">
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
              className="text-gray-400 mt-0.5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-500">배포 상태</p>
              <p className="text-sm text-gray-400">아직 미완성입니다 🚧</p>
            </div>
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
