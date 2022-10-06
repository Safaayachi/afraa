import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";
interface Props {
  children: ReactNode;
  hasFooter?: boolean;
  hasHeader?: boolean;
}

export default function Layout({
  children,
  hasFooter = true,
  hasHeader = true,
}: Props) {
  const router = useRouter();
  return (
    <div>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </div>
  );
}
