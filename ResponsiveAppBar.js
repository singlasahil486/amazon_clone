import  React from 'react';
import { Link ,NavLink,Redirect} from 'react-router-dom';
import './App.css';
import { SearchOutlined ,ShoppingCartOutlined,ShopFilled} from '@ant-design/icons';
import { useStateValue } from './Stateprovider';
import { auth } from "./firebase";
export default function ButtonAppBar() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='head'>
     <Link to = "/"> <img className='im' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
</Link>
      <div className='search'>
        <input className='se' type="text" />
      <div className='m'><button><SearchOutlined /></button></div>
      </div>
      
  <div className='nav'>
  <Link to={!user && '/login'}>
  <div onClick={handleAuthenticaton} className='op'>
    <span> Hello {!user ? 'Guest' : user.email}</span>
  <span >{user ? 'Sign Out' : 'Sign In'}</span>
  </div></Link>

  <div className='nav_op'>
    <span >Returns</span>
<span>Orders</span>
  </div>
  </div>
<div >
<span className='logo'><Link to='/Checkout'><ShopFilled /></Link>
</span>
<span className='val_it'><strong>{basket?.length}</strong></span>
</div>
 

  

    </div>
  );
}
