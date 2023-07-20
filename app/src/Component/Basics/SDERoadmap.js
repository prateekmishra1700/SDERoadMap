import React, {useState} from 'react'
import "./style.css"
import Menu from './Menuapi'
import MenuCard from '../MenuCard'

const SDERoadmap = () => {
  const [menuData, setmenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={ () => filterItem("frontend")}> Frontend</button>
        <button className="btn-group__item" onClick={ () => filterItem("backend")}> Backend</button>
        <button className="btn-group__item" onClick={ () => filterItem("dbms")}> DBMS</button>
        <button className="btn-group__item" onClick={ () => filterItem("version")}> Version Control</button>
        <button className="btn-group__item" onClick={ () => setmenuData(Menu)}> All</button>
      </div>
    </nav>
    <MenuCard menuData={menuData}/>
  </>
  )
}

export default SDERoadmap