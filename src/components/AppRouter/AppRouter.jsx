import { Route, Switch, Redirect} from 'react-router-dom';

import Home from './../pages/Home';
import Post from './../pages/Post';
import CreatPost from './../pages/CreatePost'
import Profile from './../pages/Profile'
import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'

import { useSelector } from 'react-redux';

const AppRouter = () => {
   const user = useSelector((state) => state.authReducer.user);

   if(user) {
      return (
         <div>
             <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/blogs/:id?" component={Post} />
               <Route path="/createPost" component={CreatPost} />
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