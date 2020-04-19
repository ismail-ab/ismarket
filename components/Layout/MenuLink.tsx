import * as React from "react";
import Link from "next/link";

interface IMenuLinkProps {
  resource: string;
  title: string;
}

const MenuLink: React.SFC<IMenuLinkProps> = ({ resource, title }) => (
  <li>
    <Link href={resource}>
      <a>{title}</a>
    </Link>
  </li>
);

export default MenuLink;
