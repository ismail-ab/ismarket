import * as React from "react";
import MenuLink from "./MenuLink";

const Layout: React.SFC = ({ children }) => {
  return (
    <>
      <header>
        <h1>IsMarket</h1>
      </header>
      <nav>
        <ul>
          <MenuLink resource="/" title="Home" />
          <MenuLink resource="/products" title="Products" />
        </ul>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default Layout;
