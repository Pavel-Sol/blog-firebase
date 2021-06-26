import postIMG from './../../assets/images/post-phone.jpg'

const PostCard = ({title, text, imgLink}) => {

   return (
      <div className="row">
             <div className="col s12 m7">
               <div className="card">
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
                 <div className="card-action">
                   <a href="#">подробнее</a>
                 </div>
               </div>
             </div>
           </div>
   )
}

export default PostCard