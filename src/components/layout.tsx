import React, { ReactNode } from "react"
import Header from "./header";

type LayoutProps = {
    children: ReactNode,
    headerTitle: string
}

export default function Layout({children, headerTitle}:LayoutProps) {
  return (
      <div>
            <Header title={headerTitle}/>
            <div>{children}</div>
      </div>
  );
}
