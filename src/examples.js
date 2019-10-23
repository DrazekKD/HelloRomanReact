import React from "react";
import CollapseComponent from './components/CollapseComponent/CollapseComponent'
import CollapseColumnComponent from './components/CollapseColumnComponent/CollapseColumnComponent'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import DropDownInput from "./components/DropDownInput/DropDownInput";
import VisibleInputValue from "./components/useState/useState";
import VisibleInputValueUseReducer  from "./components/useReducer/useReducer";


export default function BasicExample() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/dropDownInput">DropDownInput</Link>
					</li>
					<li>
						<Link to="/useState">useState</Link>
					</li>
					<li>
						<Link to="/useReducer">useReducer</Link>
					</li>
				</ul>

				<hr />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<CollapseComponent/>
					</Route>
					<Route path="/dashboard">
						<CollapseColumnComponent />
					</Route>
					<Route path="/dropDownInput">
						<DropDownInput />
					</Route>
					<Route path="/useState">
						<VisibleInputValue />
					</Route>
					<Route path="/useReducer">
						<VisibleInputValueUseReducer/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}


function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}



function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}