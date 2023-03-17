import './App.css';

import React , {useState} from 'react';

function App() {

	const [newItem , setNewItem] = useState('');
	const [items, setItems] = useState([]);
	
	function addNewItem()
	{
		if (!newItem)
			return;
		const item = {
			id: Math.floor(Math.random()*1000),
			value: newItem
		};
		setItems(oldItems => [...oldItems, item]);
		setNewItem("");
		console.log(newItem);
	}
	function deleteItem(e)
	{
		const newArray = items.filter(item => item.id !== e);
		setItems(newArray);
	}

	return (
		<>
			<div className="App">
				<h1>Todo App</h1>
				<div className='addPlace'>
					<input className='addText' type='text' value={newItem} onChange={e => setNewItem(e.target.value)}/>
					<button className='addButton' onClick={() => addNewItem()}> Add </button>
				</div>
			</div>		
			<ul>
				{items.map(element => {
					return(
						<li key={element.id}>{element.value} <button onClick={() => deleteItem(element.id)} className='delButton'>Del</button></li>
					);
				})}				
			</ul>
		</>
	);
}

export default App;
