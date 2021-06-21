import './Profile.css'

const Profile = () => {
   return (
      <div className='_profile__container'>
         <div className='row'>
            <div className="col s8 offset-s2">

               <div className="file-field input-field">
                  <div className="btn">
                     <span>avatar</span>
                     <input type="file" />
                  </div>
                  <div className="file-path-wrapper">
                     <input className="file-path validate" type="text" />
                  </div>
               </div>
            
            </div>
         </div>
         <div className="row">
            <div className="input-field col s8 offset-s2">
               <i className="material-icons prefix">mode_edit</i>
               <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
               <label htmlFor="icon_prefix2">First Name</label>
            </div>
         </div>
      </div>
   )
}

export default Profile