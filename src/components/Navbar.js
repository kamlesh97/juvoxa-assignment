import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul class="horizontal-list text-center nav-menu">
          <li>
            <a href="#">
              <span className='home'> 
                Unlu<i class="fas fa-home"></i>Class
              </span>
            </a>
          </li>

          <li>
            <a href="#about">
              <span>ABOUT</span> <i class="far fa-address-card"></i>{" "}
            </a>
          </li>

          <li>
            <a href="#skills">
              <span>Blogs</span> <i class="fas fa-laptop-code"></i>{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
