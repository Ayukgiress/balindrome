function Palindrome (str) {
    let j = str.length - 1
    for(let i = 0; i < j / 2; i++) {
        if (str[i] !== str[j]) {
            return false
        }
       j--
    }
    return true
}

console.log(Palindrome('baab'))

function checkPalindrome () {
    const word = document.getElementById('placeholder').value
    const palindrom = Palindrome(word)
    const answer = document.getElementById('result')

    if (palindrom) {
        answer.innerHTML = 'the word enter is a palindrom'
    } else{
        answer.innerHTML = 'the word is not a palindrom'
    }
} 