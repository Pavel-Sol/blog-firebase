import 'materialize-css/dist/css/materialize.min.css';
import './MainPreloader.css'

const MainPreloader = () => {
  return (
    <div className='_preloader__container'>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPreloader;