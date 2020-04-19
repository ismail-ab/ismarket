import React from "react";
import { useRouter } from "next/router";
import PageLink from "./PageLink";
import styles from "./pagination.module.css";

interface IPaginationProps {
  uri: string;
  totalElements: number;
}

const Pagination: React.FC<IPaginationProps> = ({ uri, totalElements }) => {
  const {
    query: { page = 1, limit = 20 },
  } = useRouter();
  const currentPageNumber = parseInt(page.toString());
  const maxElementDisplayed = parseInt(limit.toString());
  const numberTotalOfPages = Math.ceil(totalElements / maxElementDisplayed);
  const pageExists =
    currentPageNumber > 0 && currentPageNumber <= numberTotalOfPages;
  const prevStyle = currentPageNumber === 1 ? styles.active : "";
  const nextStyle =
    currentPageNumber === numberTotalOfPages ? styles.active : "";

  return (
    <div className={styles.pagination}>
      <PageLink
        linkStyle={prevStyle}
        goto={`${uri}?page=${
          currentPageNumber - 1
        }&limit=${maxElementDisplayed}`}
      >
        prev.
      </PageLink>
      {[...Array(numberTotalOfPages)].map((_, index) => {
        const pageNumber = index + 1;
        const pageToDisplay = pageExists ? pageNumber : 1;

        return (
          <PageLink
            key={pageNumber}
            linkStyle={currentPageNumber === pageNumber ? styles.active : ""}
            goto={`${uri}?page=${pageToDisplay}&limit=${maxElementDisplayed}`}
          >
            {pageNumber}
          </PageLink>
        );
      })}
      <PageLink
        linkStyle={nextStyle}
        goto={`${uri}?page=${
          currentPageNumber + 1
        }&limit=${maxElementDisplayed}`}
      >
        next.
      </PageLink>
    </div>
  );
};

export default Pagination;
