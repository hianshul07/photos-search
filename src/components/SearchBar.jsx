import './SearchBar.css'
import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('');
	
	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};

	const handleChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div className='search-bar'>
			<h1>Image Lookup</h1>
			<form onSubmit={handleFormSubmit}>
				<input value={term} onChange={handleChange} />
				<button>Search</button>
			</form>
		</div>
	);
}

export default SearchBar;
