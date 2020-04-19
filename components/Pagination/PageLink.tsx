import React from "react";
import Link from "next/link";

interface IPageLinkProps {
  linkStyle?: string;
  goto: string;
}

const PageLink: React.SFC<IPageLinkProps> = ({ linkStyle, goto, children }) => {
  // If we can disabled <Link> we don't need this
  if (linkStyle) {
    return <a className={linkStyle}>{children}</a>;
  }

  return (
    <Link href={goto}>
      <a className={linkStyle}>{children}</a>
    </Link>
  );
};

export default PageLink;
