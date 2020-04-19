import * as React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <header>
      <h1 className={styles.brand}>IsMarket</h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
      </ul>
    </nav>
    <section>{children}</section>
  </>
);

export default Layout;
