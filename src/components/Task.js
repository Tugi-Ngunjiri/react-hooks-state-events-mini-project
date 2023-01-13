import React from "react";

<li key={item.id}>{item.name}</li>
const List = () => {

  console.log('List called')



  const [listItems, setListItems] = React.useState(() => {

    console.log('List useState initializer')

    return [1, 2, 3]

  })

  const addItem = () => setListItems(
    items => [...items, items[items.length - 1] + 1]
  )



  React.useEffect(() => {

    console.log('List useEffect callback')

    return () => {

      console.log('List useEffect cleanup')

    }

  }, [])



  console.log('List returning react elements')

  return (
    <>
      <ul>
        {listItems.map,item => <li key={item}>{`Item ${item}`}</li>}
      </ul>;
      <button onClick​={addItem}>Add Item</button>
    </>

    
function ListParent() {

  // using useReducer to ensure that any time you call

  // setListKey, the `listKey` is set to a new object

  const [listKey, setListKey] = React.useReducer(c => c + 1, 0)

  return (

    <div>

      <button onClick​={setListKey}>reset</button>

      <List key={listKey} />

    </div>

  )

}






function Task() {
  return (
    <div className="task">
      <div className="label">Groceries</div>
      <div className="text">"Bread", "Cake", "Pizza", "Pasta", "Honey"</div>
      <button className="delete">X</button>
      <div className="Quantity"> Number</div>

    </div>
  );
}




export default Task
