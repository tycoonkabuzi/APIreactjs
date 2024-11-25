
import { useEffect, useState } from "react";

function Pagination ({pageNumber,setPageNumber}){
    const [page,setPage]=useState();
    function handlePage(e){
        setPageNumber(page);
        const theTarget=e.target.textContent;
        setPage(theTarget);
       
      
        console.log("Worked",page);
    }
    return<div className="pagination">
            <div className="Number" onClick={handlePage} pageNumber={page}>1</div>
            <div className="Number" onClick={handlePage} pageNumber={page}>2</div>
            <div className="Number" onClick={handlePage} pageNumber={page}>3</div>
            <div className="Number" onClick={handlePage} pageNumber={page}>4</div>

    </div>
}
export default Pagination;