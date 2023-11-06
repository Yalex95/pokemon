

function Pagination({ items, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize); 

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
 
  return (
    <div className="flex">
      <div className="pagination">
     <ul >
      <li><a onClick={() => onPageChange(currentPage-1)}>&lt;</a></li>
       {pages.map((page) => (
         <li
           key={page}
         >
           <a  
           className={
             page === currentPage ? 'active' : ''
           }
           onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
       <li><a onClick={() => onPageChange(currentPage+1)}>&gt;</a></li>
     </ul>
        </div>
    </div>
  );
}

export default Pagination;
