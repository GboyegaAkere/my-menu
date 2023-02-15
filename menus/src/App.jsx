import React from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from './data'



const allCategories = ['all',...new Set(items.map((item)=> item.category))]
// console.log(allCategories)


function App(){
  const [menuItems, setMenuItems] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      return setMenuItems(items)
    }
    const newItems =items.filter((item) =>{
     return item.category === category
    });
    setMenuItems(newItems);
  }

  return(
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>OUR MENU</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
}
export default App