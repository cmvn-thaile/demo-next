import { prisma } from '@/lib/prisma';
import next, { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request:any) {
  const urlParts = request.url.split('/');
  const invoiceId = urlParts[urlParts.length - 1];

  const invoice = await prisma.invoices.findUnique({
    where: {
      id: invoiceId,
    },
  });
  
  return NextResponse.json(invoice);
}
