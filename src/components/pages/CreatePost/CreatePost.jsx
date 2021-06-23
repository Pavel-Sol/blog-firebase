import './CreatePost.css'

const CreatePost = () => {
   return (
      <div>
         <h3>добавьте новый пост</h3>
         <div className="row">
            <div className="input-field col s12">
               <input id="first_name" type="text" className="validate"/>
               <label for="first_name">Заголовок</label>
            </div>
         </div>
         <div className="row">
            <div className="input-field col s12">
               <textarea id="textarea1" class="materialize-textarea"></textarea>
               <label htmlFor="textarea1">Текст</label>
            </div>
         </div>
         <div className='row'>
            <div className="col s12">

               <div className="file-field input-field">
                  <div className="btn">
                     <span>прикрепить фото</span>
                     <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                     <input className="file-path validate" type="text" />
                  </div>
               </div>
            
            </div>
         </div>
      </div>
   )
}

export default CreatePost