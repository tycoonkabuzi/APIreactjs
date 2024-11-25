import { useEffect, useState } from "react";
import Pagination from "../pagination";

function Post(){
    const [pageNumber, setPageNumber]=useState(1);
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchData() {
            const url=`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`;
            try{
                const response=await fetch(url);
                if (!response.ok){
                    throw new Error(response.status)
                }
                const resultFromFetchedData=await response.json();
                setData(resultFromFetchedData);
               
           
            }
            catch(error){
               console.error("Failed to fetch data",error)
            }
            
        }
        fetchData();


    },[pageNumber])
    return(<div>
       {data.map((element)=>(
 //{console.log(element.body)}
            <div className="post">
                <h1>{element.title}</h1>
                <p>{element.body}</p>
   </div>
       ))}

<Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
 
    </div>)

}
export default Post;