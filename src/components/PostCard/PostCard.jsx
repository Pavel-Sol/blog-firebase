import {Link} from 'react-router-dom';

import './PostCard.css'
import postIMG from './../../assets/images/post-img.jpg'

const PostCard = ({title, text, imgLink, idPost}) => {

   return (
    <div className="_card center-align">
      <div className="_card-image">
        <img src={
            imgLink 
            ? imgLink
            : postIMG
        }/>
      </div>
      <div className="_card-content">
          <p className='_card-title truncate'>
            {title}
          </p>
          <div className="_card-text">
            {text}
          </div>
          <Link to={'/blogs/' + idPost}>
            <div className="card-action">
                подробнее
            </div>
          </Link>
      </div>
    </div>         
   )
}

export default PostCard