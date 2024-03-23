import Link from "next/link";

export interface LinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export default function LBtn({ href, children, className }: LinkProps) {
  return (
    <Link href={href} className="p-5 border border-primary-500 bg-primary-500 text-primary-100 hover:bg-primary-600 hover:border-primary-600">
      {children}
    </Link>
  );
}