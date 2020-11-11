let textAreaElement = document.getElementById('ta-message');
let submitBtn = document.getElementById('submit-btn');
let pElement = document.getElementById('message-text');

submitBtn.addEventListener('click', ()=>{
    
    let msg = textAreaElement.value;
    pElement.innerHTML = rot13(msg);
});

function rot13(str){
    let encodedWord = str.toUpperCase();
    let decodedWord = ''
    let len = encodedWord.length;

    for(let i = 0; i < len; i++){
        let number = encodedWord.charCodeAt(i);

        if(number >= 65 && number <= 90){
            if(number + 13 > 90){
                decodedWord += String.fromCharCode(number -13);
            }
            else{
                decodedWord += String.fromCharCode(number + 13);
            }
        }
        else{
            decodedWord += String.fromCharCode(number);
        }
    }
    return decodedWord;    
}



