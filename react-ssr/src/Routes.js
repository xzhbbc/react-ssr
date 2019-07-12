import Home from './Component/Home/Home';
import Login from './Component/Login/login';
import App from './App';

export default [{
  component: App,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
    //   loadData: Home.loadData,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    }
  ]
}];