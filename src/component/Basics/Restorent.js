import React, { useState } from "react";
import './style.css';
import Menu from'./menuApi'
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const unicList = [
  ...new Set (Menu.map((curElem) =>{
    return curElem.category;
})
), "All"
];
console.log(unicList);

const Restorent =() =>{
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(unicList);
    
    const filterItem = (fcatagory) =>{
       if (fcatagory === "All"){
        setMenuData(Menu);
        return;
       }

        const updatedList = Menu.filter((curElem) =>{
        return curElem.category === fcatagory;
        })
       setMenuData(updatedList);
    }
    return(
        <>
         <Navbar filterItem={filterItem} menuList={menuList} />
         <MenuCard menuData={menuData}/>
        </>
    );
};
export default Restorent; 