import Post from "../../components/post";
function Home(){
    return(<div className="main">
        <header>
            Post Presentation(React)
            <input type="text" placeholder="What are you looking for ?"></input>
        </header>
        <div className="container_posts">
              <Post/>
              <Post/>
              <Post/>
        </div>
        <div className="pagination">
            <div className="Number">1</div>
            <div className="Number">2</div>
            <div className="Number">3</div>
            <div className="Number">5</div>
            <div className="Number">6</div>
            <div className="Number">7</div>
            <div className="Number">8</div>

        </div>
   
    </div>)
}
export default Home;