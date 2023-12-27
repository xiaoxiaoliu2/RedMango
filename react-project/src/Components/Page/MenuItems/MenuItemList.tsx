import { useEffect, useState } from 'react'
import { menuItemModel } from "../../../Interfaces";
import { MenuItemCard } from '.';

const MenuItemList = () => {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  useEffect(() => {
    fetch("http://localhost:5117/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);
  return (
    <div className='container row'>
      {menuItems.length > 0 && menuItems.map((menuItem, index) => (
        <MenuItemCard menuItem={menuItem} key={index} /> 
      ))}
    </div>
  )
}

export default MenuItemList