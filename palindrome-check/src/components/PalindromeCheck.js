import React, { useState } from 'react';

export const PalindromeCheck = () => {
	const [inputText, setInputText] = useState('');
	const [result, setResult] = useState(null);

	const checkPalindrome = (str) => {
		const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		const reverseStr = cleanStr.split('').reverse().join('');
		return cleanStr === reverseStr;
	};

	const handleCheck = () => {
		setResult(checkPalindrome(inputText));
	};

	return (
		<div className="palindrome-checker">
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				placeholder="Enter text to check"
			/>
			<button onClick={handleCheck}>Check</button>

			{result !== null && (
				<div className="result">
					<h2>
						Result:{' '}
						{result ? 'Yes, it is a palindrome!' : 'No, not a palindrome'}
					</h2>
				</div>
			)}
		</div>
	);
};
