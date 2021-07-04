import { Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './../pages/Home/Home';
import Post from './../pages/Post/Post';
import CreatePost from './../pages/CreatePost/CreatePost'
import Profile from './../pages/Profile/Profile'
import SignIn from './../pages/SignIn/SignIn'
import SignUp from './../pages/SignUp/SignUp'

const AppRouter = () => {
   const user = useSelector((state) => state.authReducer.user);

   if(user) {
      return (
         <div>
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/blogs/:id?" component={Post} />
               <Route path="/createpost" component={CreatePost} />
               <Route path="/profile" component={Profile} />
               <Redirect to='/' />
            </Switch>
         </div>
      )
   } else {
      return (
         <div>
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/blogs/:id?" component={Post} />
               <Route path="/signIn" component={SignIn} />
               <Route path="/signUp" component={SignUp} />
               <Redirect to='signIn' />
            </Switch>
         </div>
      )
   }

   
}

export default AppRouter