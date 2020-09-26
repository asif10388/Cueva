import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  // <div className="header">
  //   <Link className="logo-container" to="/">
  //     {/* <Logo className="logo" /> */}
  //     <i class="fas fa-headset"></i>
  //   </Link>
  //   <div className="options">
  // <Link className="option" to="/shop">
  //   SHOP
  // </Link>
  //     <Link className="option" to="/shop">
  //       CONTACT
  //     </Link>
  // {currentUser ? (
  //   <div className="option" onClick={() => auth.signOut()}>
  //     SIGN OUT
  //   </div>
  // ) : (
  //   <Link className="option" to="/signin">
  //     SIGN IN
  //   </Link>
  // )}
  // <CartIcon />
  //   </div>
  //   {hidden ? null : <CartDropdown />}
  // </div>
  <nav class="bg-white">
    <div class="mx-auto py-3 md:flex md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div>
          <Link
            class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
            to="/"
          >
            <i class="fas fa-headset mr-1"></i>Gadget Ahead
          </Link>
        </div>

        {/* <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>

      <div class="md:flex justify-between flex-wrap items-center">
        <div class="flex flex-wrap md:mx-6">
          <Link
            class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-4 md:my-0"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-4 md:my-0"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-4 md:my-0"
            to="/about"
          >
            About
          </Link>
          {currentUser ? (
            <div
              className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-4 md:my-0"
              onClick={() => auth.signOut()}
            >
              Sign In
            </div>
          ) : (
            <Link
              className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 mx-4 md:my-0"
              to="/signin"
            >
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
