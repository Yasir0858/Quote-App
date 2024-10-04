let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let button = document.querySelector('button')
let container = document.querySelector('#container')


let colors = ["#FFF7D1", '#FFF7D1', "#FFECC8",'#FFD09B','#FFB0B0', '#A66E38']
 let count = 0;
const getQuote = async () => {

    const response = await fetch('http://quotable.io/random') 
    const data = await response.json()
    
    

    h1.innerText = data.content;
    p.innerText =  data.Author;
    container.style.backgroundColor = colors[count]  
    count++;
    if(count >= colors.length){
        count= 0
    }
};

button.addEventListener('click',getQuote)
getQuote();


setInterval(() =>{
   getQuote()
},5000);