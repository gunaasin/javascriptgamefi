
 
export const Topnav = (prop) => (
    <div className="main-structre">
       <h2>JavaScript - {prop.title} </h2> 
        <div className="righttopnav"> <h2>Level  -  <span>03</span></h2> <a href= {prop.url}><button>Video &nbsp;<i class="fa-solid fa-podcast"></i></button></a></div>
    </div>
)
