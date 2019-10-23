import React, {useState} from 'react'


const VisibleInputValue = () => {

	const [inputContent, setInputContent] = useState('');
	const [listItems, setListItems] = useState([
		{
			id: 1,
			content:'First task'
		}
	]);

	const handleInputChange = e => setInputContent(e.target.value);

	const addListItem = () => {
		const newElementList = {
			id: listItems.length + 1,
			content: inputContent
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
				name="name"
				value={inputContent}
				onChange={handleInputChange}/>
			<button
				className="button is-warning"
				onClick={addListItem}>
				Add Task
			</button>
			{
				listItems.map(item=>
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

export default VisibleInputValue