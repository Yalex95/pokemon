import { useEffect, useState } from "react";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  
  const [initialNum, setInitialNum] = useState(0);
  const [endNum, setEndNum] = useState(5);

  
  const pagesCount = Math.ceil(items / pageSize);

 
  if (pagesCount === 1) return null;

  
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  
  const initialPages = pages.slice(initialNum, endNum);
  const lastPage = pages[pages.length - 1]; 

  const [firstPages, setFirstPages] = useState(initialPages);
 const visibleLastPage = firstPages[firstPages.length-1]
 const visibleFirstPage = firstPages[0]

  useEffect(() => {
    
    const newInitialNum = (initialNum > 5)? initialNum - 5 : 0;
    const newEndNum = (endNum > 10 )? endNum - 5: 5;

    if (currentPage === visibleLastPage) {
      setInitialNum(endNum-1);
      setEndNum(endNum + 5);
      const newInitialPages = pages.slice(initialNum, endNum);
      setFirstPages(newInitialPages);
    }else if (currentPage === visibleFirstPage - 1 && currentPage !== 1 ) {

      setInitialNum(newInitialNum);
      setEndNum(newEndNum);
      const newInitialPages = pages.slice(newInitialNum, newEndNum);
      setFirstPages(newInitialPages);
      
    }
    
  }, [currentPage, initialNum, endNum, visibleLastPage, pages,visibleFirstPage]);
  return (
    <div className="flex">
      <div className="pagination">
        <ul>
          <li>
            <a
              onClick={() => onPageChange(currentPage - 1)}
              className={currentPage === 1 ? "disabled" : ""}
            >
              &lt; Previus
            </a>
          </li>
          {firstPages.map((page) => (
            <li key={page}>
              <a
                className={page === currentPage ? "active" : ""}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
          <li className={visibleLastPage === pages.length ? "disabled" : ""}>
            <a >...</a>
          </li>
          <li className={visibleLastPage === pages.length ? "disabled" : ""}>
            <a
              className={lastPage === currentPage ? "active" : ""}
              onClick={() => onPageChange(lastPage)}
            >
              {lastPage}
            </a>
          </li>
          <li>
            <a
              onClick={() => onPageChange(currentPage + 1)}
              className={
                currentPage === parseInt(pages.slice(-1)) ? "disabled" : ""
              }
            >
              Next &gt;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
