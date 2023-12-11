import { useRouter } from 'next/router';
import React from 'react';

const getInvoice = async (id: string) => {
  const baseUrl = process.env.BASE_URL
  const res = await fetch(`${baseUrl}/api/invoices/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
export default async function Invoice({ params }: any) {

  const invoice = await getInvoice(params.InvoiceId);

  return <p>Invoice: {invoice.title}</p>;

}
