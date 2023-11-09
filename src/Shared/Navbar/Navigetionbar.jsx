import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/jobDraft-logo.png"
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navigetionbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const heldelLogOut = () => {
    logOut()
  }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-8 sm:h-9" alt="JobDraft Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">JobDraft</span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        {
          user ? <div className='flex items-center gap-4'>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                {/* <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span> */}
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
            <button onClick={heldelLogOut} className='btn'>SingOut</button>
          </div> : <Link to="/login" className='btn'>Login</Link>
        }

      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#1967d2]" : ""
            }
          >
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/alljobs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#1967d2]" : ""
            }
          >
            All Jobs
          </NavLink>
        </Navbar.Link>
        <Navbar.Link><NavLink
          to="/addjob"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#1967d2]" : ""
          }
        >
          Add A Job
        </NavLink></Navbar.Link>
        <Navbar.Link><NavLink
          to="/myjobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#1967d2]" : ""
          }
        >
           My Jobs
        </NavLink></Navbar.Link>
        <Navbar.Link>Contact</Navbar.Link>Add A Job
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigetionbar;


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>




