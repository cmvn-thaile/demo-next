import Invoices from '../page';

export default function InvoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex gap-4 w-full">
      <Invoices/>
      {children}
    </div>
  );
}
