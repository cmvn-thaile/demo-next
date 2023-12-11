import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


export async function GET() {
  const invoices = await prisma.invoices.findMany();
  return NextResponse.json( invoices );
}
