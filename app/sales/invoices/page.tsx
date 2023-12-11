import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';

async function getInvoices() {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/invoices`, {
    next: {
      revalidate: false,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
interface Invoice {
  id: string;
  title: string;
  total: number;
}

export default async function Invoices() {
  let invoices = [];
  if (process.env.BUILD_ENVIRONMENT !== 'local') {
    invoices = await getInvoices();
  }

  return (
    <div>
      <h3 className="font-semibold text-xl text-gray-400 mb-5">INVOICE LIST</h3>
      <ul className="px-3 border border-gray-200 rounded-md">
        {invoices &&
          invoices?.map((invoice: Invoice) => (
            <Link
              key={invoice.id}
              href={`/sales/invoices/${invoice.id}`}
              className="flex gap-24 items-center border-b p-3 border-gray-200"
            >
              <div>
                <h4 className="font-bold">{invoice.title}</h4>
                <p className="text-sm text-gray-400">{invoice.id}</p>
              </div>
              <span className="font-bold">${invoice.total}</span>
            </Link>
          ))}
      </ul>
    </div>
  );
}
