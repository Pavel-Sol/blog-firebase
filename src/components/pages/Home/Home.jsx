import { useSelector } from 'react-redux';

import PostCard from './../../PostCard/PostCard'


const Home = () => {

   const posts = useSelector((state) => state.postReducer.posts);
   const isMainPreloader = useSelector((state) => state.genericReducer.isMainPreloader);
   
   
   if(posts.length === 0 && isMainPreloader === false) {
      return(
         <h3 className='center-align'>
            пока нет ни одного поста
         </h3>
      )
   }

   return  (
     <div className='_cards__container'>
        {
          posts.sort((a,b) => b.timestamp.seconds - a.timestamp.seconds).map(item => {
             return <PostCard
               key={item.idPost}
               title={item.heading}
               text={item.postText}
               imgLink={item.postImgLink}
               idPost={item.idPost}
             />
          })
        }
     </div>
   )



}

export default Home