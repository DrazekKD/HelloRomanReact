import React from "react"
import Collapse from "../../providers/Collapse";
import cx from 'classnames'
import styles from './CollapseColumnComponent.module.scss'

const columnList = ['col1', 'col2', 'col3'];

const CollapseColumnComponent = () => {

	const listClass = isCollapsed => cx(
		'columns', {
			[styles.isCollapsed]: isCollapsed
		}
	);

	return (
		<Collapse render={({isCollapsed, toggle}) => (
			<div>
				<button
					className="button"
					onClick={toggle}>
					Collapse Colum
				</button>
				<div className={listClass(isCollapsed)}>
					{columnList.map(column => (
						<div key={column}
							 className={cx('column','is-1','is-offset-2',styles.column)}>
								{column}
						</div>
					))}
				</div>
			</div>
		)}/>
	)
};


export default CollapseColumnComponent;