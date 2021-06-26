import { useSelector } from 'react-redux';

import postIMG from './../../../assets/images/post-phone.jpg'


const Home = () => {

   const posts = useSelector((state) => state.postReducer.posts);
   console.log(posts);

   if(posts.length === 0) {
      return(
         <h3>
            пока нет ни одного поста
         </h3>
      )
   }

   return  (
     <div>
        {
          posts.map(item => {
             return <div className="row">
             <div className="col s12 m7">
               <div className="card">
                 <div className="card-image">
                   <img src={
                      item.postImgLink 
                      ? item.postImgLink 
                      : postIMG
                   }/>
                 </div>
                 <div className="card-content">
                    <div className="card-title">
                        {item.heading}
                    </div>
                   <p>{item.postText}</p>
                 </div>
                 <div className="card-action">
                   <a href="#">подробнее</a>
                 </div>
               </div>
             </div>
           </div>
          }) 
        }
     </div>
   )



}

export default Home