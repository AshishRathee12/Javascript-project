let display = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

// let buttonarray=Array.from(buttons);
// let string='';
// buttonarray.forEach(function(btn){
//     // console.log(btn)
//     btn.addEventListener('click',(e)=>{

//         if(e.target.innerHTML=="Del"){
//             string=string.substring(0,string.length-1);
//             display.value=string;
//         }else if(e.target.innerHTML=="AC"){
//             string='';
//             display.value=string;

//         }else if(e.target.innerHTML=="="){
//            string=eval(string);
//             display.value=string;

//         }
//         else{
//             string+=e.target.innerHTML;
//             display.value=string;

//         }


//     })
// })












let dog = [];
for (code of buttons) {
    code.addEventListener('click', (e) => {
        let data = e.target.textContent;

        switch (data) {
            case "Del":
                dog.pop();
                display.value = dog.join('');
                break;

            case "AC":
                dog = [];
                display.value = '';
                break;

            case "=":
                dog = eval(dog.join(''));
                display.value = dog;
                break;
            default:
                dog.push(data);
                display.value = dog.join('');
        }

    })

}


