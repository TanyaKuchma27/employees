const getAlphabet = () => {
    let arr = [];
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        arr.push(String.fromCharCode(i))
    }
    return arr;
}

export default getAlphabet;