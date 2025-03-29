let click = document.getElementById('click');
let disc = document.getElementById('disc');
click.addEventListener('click',(e)=>{
    
   let data =  callApi();      

    data.then((res)=>{
        let randomNum = Math.floor(Math.random()*res.length);
        
        let discpiration = res[randomNum].unicodeName ;

        let arr = discpiration.split('.');
        console.log();
        
        
        e.target.innerText=res[randomNum].character;
        disc.innerHTML= arr[1].substring(1) ;
        })
})



async function callApi() {
    let result = await fetch("https://emoji-api.com/emojis?access_key=518fc60777fcd7465d55d2f008676e273b708090");
    let data = await result.json();
    
    return  data  
    
    
}


