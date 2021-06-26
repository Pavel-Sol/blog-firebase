import {Link} from 'react-router-dom';

import postIMG from './../../assets/images/post-phone.jpg'

const PostCard = ({title, text, imgLink, idPost}) => {

   return (
               <div className="card _card">
                 <div className="card-image">
                   <img src={
                      imgLink 
                      ? imgLink
                      : postIMG
                   }/>
                 </div>
                 <div className="card-content">
                    <div className="card-title">
                        {title}
                    </div>
                   <p>{text}</p>
                 </div>
                 <Link to={'/blogs/' + idPost}>
                  <div className="card-action">
                      подробнее
                  </div>
                 </Link>
               </div>
          
   )
}

export default PostCard