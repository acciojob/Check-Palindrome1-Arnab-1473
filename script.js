// complete the given function

function palindrome(str){
	const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
	for (let i = 0; i < cleanedStr.length; i++) {
		if (cleanedStr[i] != cleanedStr[cleanedStr.length-1-i]) {
			return false;
		}
	}
	return true;
}
module.exports = palindrome
