import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import IMAGES from "../assets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animations";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { setUserNull } from "../context/actions/userActions";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setCartOn } from "../context/actions/displayCartAction";

const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      })
      .cathch((err) => {
        console.log(err);
      });
  };

  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6">
      <NavLink to={"/"} className={"flex items-center justify-center gap-4"}>
        <img src={IMAGES.Logo} className="w-20 h-15" alt="logo" />
        <p className="text-headingColor font-bold text-3xl">Eat Ease</p>
      </NavLink>

      <nav className="flex items-center justify-center gap-8">
        <ul className="hidden md:flex items-center justify-center gap-16">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
            to={"/aboutus"}
          >
            About Us
          </NavLink>
        </ul>

        <motion.div
          {...buttonClick}
          onClick={() => dispatch(setCartOn())}
          className="relative cursor-pointer"
        >
          <MdShoppingCart className="text-3xl text-textColor" />
          {cart?.length > 0 && (
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
              <p className="text-primary text-base font-semibold">
                {cart?.length}
              </p>
            </div>
          )}
        </motion.div>

        {user ? (
          <div className="backdrop-blur-2xl">
            {" "}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenu(true)}
            >
              <div className="w-12 h-12 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  src={user?.picture ? user?.picture : IMAGES.Avatar}
                  alt="profile"
                  whileHover={{ scale: 1.2 }}
                  referrerPolicy="no-referrer"
                />
              </div>
              {isMenu && (
                <motion.div
                  className="w-48 px-6 py-4 bg-lightOverlay backdrop-blur-3xl rounded-lg shadow-md absolute top-12 right-0 flex flex-col gap-4"
                  onMouseLeave={() => setIsMenu(false)}
                  {...slideTop}
                >
                  {user?.user_id === import.meta.env.VITE_APP_ADMIN_ID && (
                    <Link
                      to={"/dashboard/home"}
                      className="hover:text-red-500 text-xl text-textColor"
                    >
                      Dashboard
                    </Link>
                  )}

                  {/* <Link
                    to={"/profile"}
                    className="hover:text-red-500 text-xl text-textColor"
                  >
                    My Profile
                  </Link> */}
                  <Link
                    to={"/user-orders"}
                    className="hover:text-red-500 text-xl text-textColor"
                  >
                    Orders
                  </Link>
                  <hr className="border-gray-400" />

                  <motion.div
                    {...buttonClick}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3"
                    onClick={signOut}
                  >
                    <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
                    <p className="text-textColor text-xl group-hover::text-headingColor">
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>{" "}
          </div>
        ) : (
          <>
            <NavLink to={"/login"}>
              <motion.button
                {...buttonClick}
                className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-red-400 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
