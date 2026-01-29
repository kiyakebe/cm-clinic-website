"use client";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <Navbar currentPage={pathname} navigate={router.push} />
      {children}
      <Footer navigate={router.push} />
    </div>
  );
}
