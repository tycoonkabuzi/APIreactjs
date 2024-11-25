
import Post from "../../components/post";
function Home(){
    return(<div className="main">
        <header>
            Post Presentation(React)
            <input type="text" placeholder="What are you looking for ?"></input>
        </header>
        <div className="container_posts">
              <Post/>
        </div>
       
   
    </div>)
}
export default Home;