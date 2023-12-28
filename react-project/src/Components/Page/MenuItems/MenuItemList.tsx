import { useEffect, useState } from 'react'
import { menuItemModel } from "../../../Interfaces";
import { MenuItemCard } from '.';
import { useDispatch } from 'react-redux';
import { useGetMenuItemsQuery } from '../../../Apis/menuItemApi';
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';

const MenuItemList = () => {
  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  // useEffect(() => {
  //   fetch("http://localhost:5117/api/MenuItem")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMenuItems(data.result);
  //     });
  // }, []);

  const dispatch = useDispatch();
  const {data, isLoading} = useGetMenuItemsQuery(null);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  
  return (
    <div className='container row'>
      {data.result.length > 0 && data.result.map((menuItem: menuItemModel, index: number) => (
        <MenuItemCard menuItem={menuItem} key={index} /> 
      ))}
    </div>
  )
}

export default MenuItemList