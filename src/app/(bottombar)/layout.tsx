import ButtomNavigation from "@/components/buttom-navigation";
import Link from "next/link";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {/* <div className="h-16"></div> */}
      <ButtomNavigation />
    </>
  );
}

export default Layout;
