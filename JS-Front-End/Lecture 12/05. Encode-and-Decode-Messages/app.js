function encodeAndDecodeMessages() {
    
    const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll('div button');
    const [encodeTextAreaEl, decodeTextAreaEl] = document.querySelectorAll('div textarea');
    
    function securingMessage(text, asciiDirection) {
        return text
        .split('')
        .map((char) => {
            const currentAsciiValue = char.charCodeAt(0);

            return String.fromCharCode(currentAsciiValue + asciiDirection);
        })
        .join('');
    }  
    
    function encodeMessageHandler() {
        decodeTextAreaEl.value = securingMessage(encodeTextAreaEl.value, 1);
        encodeTextAreaEl.value = '';
    }

    function decodeMessageHandler() {
        decodeTextAreaEl.value = securingMessage(decodeTextAreaEl.value, -1);
    }
    
    encodeBtnEl.addEventListener('click', encodeMessageHandler);
    decodeBtnEl.addEventListener('click', decodeMessageHandler);
}
