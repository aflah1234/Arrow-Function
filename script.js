const transformString = (str) => {
    return str.split('').map((char, index) => `${index}${char.toUpperCase()}`).join('');
};

const displayTransformedString = () => {
    const inputString = document.getElementById('inputString').value;
    const result = transformString(inputString);
    document.getElementById('output').textContent = result;
};