'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPath = pathname.split('/')[2];
  const active = ' text-black';

  return (
    <div className=" flex flex-col w-full p-14">
      <p className=' font-bold text-3xl pb-4'>{pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1)}</p>
      <header className=" flex gap-12 mb-4 pb-2 font-semibold text-gray-400 border-b border-gray-200">
        <Link
          className={currentPath === 'overview' ? `${active}` : ''}
          href={'/sales/overview'}
        >
          Overview
        </Link>
        <Link
          className={currentPath === 'subscription' ? `${active}` : ''}
          href={'/sales/subscription'}
        >
          Subscription
        </Link>
        <Link
          className={currentPath === 'invoices' ? `${active}` : ''}
          href={'/sales/invoices'}
        >
          Invoices
        </Link>
        <Link
          className={currentPath === 'customers' ? `${active}` : ''}
          href={'/sales/customers'}
        >
          Customers
        </Link>
        <Link
          className={currentPath === 'deposits' ? `${active}` : ''}
          href={'/sales/deposits'}
        >
          Deposits
        </Link>
      </header>
      {children}
    </div>
  );
}
