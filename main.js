let btn = document.getElementById('btn');
let inpt = document.getElementById('inpt');
let out = document.getElementById('out');
let msg = [];



btn.addEventListener('click', function(){
    msg.push(message);
    for(let i = 0; i < msg.length; i++){
        let parags = document.createElement('p');
            parags.innerHTML = msg.pop();
            parags.className = `className-note${i+1}`;
            document.body.appendChild(parags);
    }
})

inpt.addEventListener('input', function(e){
    message = e.target.value;
})

