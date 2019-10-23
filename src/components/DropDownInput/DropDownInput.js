import React from 'react'
import Downshift from 'downshift'
import cx from 'classnames'
const items = [
	{value: 'apple'},
	{value: 'pear'},
	{value: 'orange'},
	{value: 'grape'},
	{value: 'banana'},
]


const DropDownInput = () => {
	return (
		<Downshift>
			{({isOpen, getInputProps, inputValue, getMenuProps, getItemProps, selectedItem}) =>(
				<div className={cx('dropdown',{"is-active": isOpen})}>
					<input
						className="input"
						type="text"
						placeholder="Text input"
						{...getInputProps()}/>
					<div className="dropdown-menu">
						<div className="dropdown-content" {...getMenuProps()}>
							{
								items.filter(item => !inputValue || item.value.includes(inputValue))
									.map(({value}, index)=>(
										<button
											key={value}
											className={cx('dropdown-item','button is-white',{
												"is-active":value === selectedItem
											})}
											{...getItemProps({
												key: value,
												index,
												item: value
											})}

										>
											{value}
										</button>
									))
							}
						</div>
					</div>
				</div>
			)}
		</Downshift>
	)
}

export default DropDownInput