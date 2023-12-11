'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[1];
  const activeClass = `bg-gray-200 font-bold py-2 ml-[-2px] border rounded-md`;

  return (
    <html lang="en">
      <body className=" w-full min-h-full h-full flex flex-col">
        <div className="flex">
          <aside className="h-[800px] w-[200px] bg-gray-100 flex border-l border-gray-500">
            <ul className=" w-full p-4 font-medium flex flex-col gap-6">
              <Link
                href={'/dashboard'}
                className={currentPath === 'dashboard' ? `${activeClass}` : ''}
              >
                <li className="pl-2">Dashboard</li>
              </Link>
              <Link
                href={'/accounts'}
                className={currentPath === 'accounts' ? `${activeClass}` : ''}
              >
                <li className="pl-2">Accounts</li>
              </Link>
              <Link
                href={'/sales'}
                className={currentPath === 'sales' ? `${activeClass}` : ''}
              >
                <li className="pl-2">Sales</li>
              </Link>
              <Link
                href={'/reports'}
                className={currentPath === 'reports' ? `${activeClass}` : ''}
              >
                <li className="pl-2">Report</li>
              </Link>
            </ul>
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}
