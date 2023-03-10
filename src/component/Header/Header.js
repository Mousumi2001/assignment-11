import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FaUser } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    return (
        <div>
            <div className="navbar bg-blue-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {/* <li><Link to='/login'>login</Link></li>
                            <li><Link to='/register'>Register</Link></li> */}
                        </ul>
                    </div>
                    <img className='w-14 h-14 rounded-full' src='https://tse1.mm.bing.net/th?id=OIP.ZKz0Cs5Ffb9K70a43DzQigHaHa&pid=Api&P=0' />
                    <a className="btn btn-ghost normal-case text-xl">LEARN PROGRAMMING</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <span>{user.displayName}</span>
                            </>
                            :
                            <>
                                <Link to='/login'>SignIn</Link>
                                <Link to='/register'>Register</Link>
                            </>
                    }
                    <div className="tooltip tooltip-left" data-tip='name'>
                        {user?.photoURL ?
                            <img className='rounded-full' style={{ height: '40px' }} roundedCircle src={user.photoURL} ></img>
                            : <FaUser></FaUser>
                        }
                    </div>

                    <label className="swap">
                        <input type="checkbox" />
                        <div className="swap-on border lg:p-3 lg:mr-4 rounded bg-white text-black">Light</div>
                        <div className="swap-off border lg:p-3 lg:mr-4 rounded bg-black text-white">Dark</div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;