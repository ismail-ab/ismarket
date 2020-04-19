import * as React from "react";
import Link from "next/link";

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
    </nav>
    <section>{children}</section>
  </>
);

export default Layout;
