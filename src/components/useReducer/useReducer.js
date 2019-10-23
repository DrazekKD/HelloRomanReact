import React, {useReducer,useState} from 'react'


const VisibleInputValueUseReducer = () => {

	const [inputsContent, setInputContent] = useReducer(
		(state,newState)=>({...state, ...newState}),
		{
			searchInputContent: '',
			itemInputContent: ''
		}
	);

	const [listItems, setListItems] = useState([
		{
			id: 1,
			content:'First task'
		}
	]);

	const handleInputChange = e => setInputContent({[e.target.name]:e.target.value});

	const addListItem = () => {
		const newElementList = {
			id: listItems.length + 1,
			content: inputsContent.itemInputContent
		};

		setListItems([...listItems, newElementList])
	};

	const removeElement = id => {
		const newListItems = listItems.filter(item => item.id !== id);

		setListItems(newListItems)
	};

	return(
		<div>
			<input
				type="name"
				name="searchInputContent"
				value={inputsContent.searchInputContent}
				placeholder="Search item"
				onChange={handleInputChange}/>
			<input
				type="name"
				name="itemInputContent"
				value={inputsContent.itemInputContent}
				placeholder="Add task name"
				onChange={handleInputChange}/>
			<button
				className="button is-warning"
				onClick={addListItem}>
				Add Task
			</button>
			{
				listItems
					.filter(item =>
						item.content.toLocaleLowerCase()
							.includes(inputsContent.searchInputContent.toLocaleLowerCase()))
					.map(item=>
					<div className="notification is-primary"
						 key={item.id}>
						{item.id}
						<button className="delete" onClick={()=>removeElement(item.id)}></button>
						<p>{item.content}</p>
					</div>
				)
			}
		</div>
	)
}

export default VisibleInputValueUseReducer