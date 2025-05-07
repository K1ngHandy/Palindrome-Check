import React from 'react';
import './styles.css';
import { PalindromeCheck } from './components/PalindromeCheck';

export const App = () => {
	console.log('App');
	return (
		<div className="app">
			<h1>Palindrome Check</h1>
			<PalindromeCheck />
		</div>
	);
};
