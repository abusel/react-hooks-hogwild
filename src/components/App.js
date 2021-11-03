import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Filter from "./Filter";
import HogSorter from "./HogSorter";

import hogs from "../porkers_data";

function App() {
	const [filterGreased, setFilterGreased] = useState(false)
	const [sortBy, setSortBy] = useState('none')
	const [displayedHogs, setDisplayedHogs] = useState(hogs)
	return (
		<div className="App">
			<Nav />
			<HogSorter setSortBy={setSortBy} setDisplayedHogs={setDisplayedHogs} displayedHogs = {displayedHogs}/>
			<Filter filterGreased={filterGreased} setFilterGreased={setFilterGreased}/>
			<HogContainer hogs={hogs} filterGreased={filterGreased} sortBy={sortBy} displayedHogs={displayedHogs}/>
		</div>
	);
}

export default App;
