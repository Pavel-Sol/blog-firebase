import { useSelector } from 'react-redux';

import PostCard from './../../PostCard/PostCard'


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
             return <PostCard
               title={item.heading}
               text={item.postText}
               imgLink={item.postImgLink}
             />
          }) 
        }
     </div>
   )



}

export default Home