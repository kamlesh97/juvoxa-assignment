import React, {useState,useEffect} from "react";
import {Table2} from './Table2'
import {Table1} from './Table1'


const Navbar = () => {
  const [c,setC]=useState(true);

  const tab1=(c)=>{
    setC(c=true)
  }
  const tab2=(c)=>{
    setC(c=false)
  }
  return (
    <div>
      <nav>
        <ul class="horizontal-list text-center nav-menu">
          <li>
            <a href="#">
              <span className='home'> 
                Juvoxa<i class="fas fa-home"></i>
              </span>
            </a>
          </li>

          <li>
            <a href="#Table1">
              <span onClick={tab1} >Table1</span> <i class="far fa-address-card"></i>{" "}
            </a>
          </li>

          <li >
            <a href="#Table2">
              <span onClick={tab2}>Table2</span> <i class="fas fa-laptop-code"></i>{" "}
            </a>
          </li>
        </ul>
      </nav>
      {c?<Table1/>:<Table2/>}
    </div>
  );
};

export default Navbar;
