'use client';

import React from 'react';
import Link from 'next/link'; // Link 추가

export default function Contact() {
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
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Contact
          </h1>

          {/* 연락처 정보 리스트 */}
          <div className="space-y-4 relative z-10">
            {/* 이메일 카드 */}
            <div className="bg-white border border-emerald-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:upuptts12@gmail.com"
                    className="text-lg font-medium text-emerald-700 hover:text-emerald-900 transition-colors break-all"
                  >
                    upuptts12@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* 깃허브 카드 */}
            <div className="bg-white border border-emerald-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-700 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
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
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/upuptts12-arch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-emerald-700 hover:text-emerald-900 transition-colors break-all flex items-center gap-1"
                  >
                    upuptts12-arch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 장식 텍스트 */}
          <div className="mt-8 text-center">
            <p className="text-emerald-600/60 text-sm font-medium">
              Feel free to reach out!
            </p>
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
