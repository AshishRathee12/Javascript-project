const searchbox = document.querySelector('.searchbox');
const searchbtn = document.querySelector('.searchbtn');
const recipecontainer = document.querySelector('.recipe-container');
const heading = document.querySelector("h1");
const body = document.querySelector("body");
// function to get recipes
const fetchrecipe = async (query) => {

    recipecontainer.innerHTML = "<h2>fetching recipes...</h2>"
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();


    recipecontainer.innerHTML = "";

    const idea = response.meals;
    for (let net of idea) {
        console.log(net)
        const recipediv = document.createElement("div");
        recipediv.classList.add("recipe");
        recipediv.innerHTML = `
   <img src="${net.strMealThumb}">
   <h3>${net.strMeal}</h3>
   <p><span>${net.strArea}</span> Dish</p>
    <p>Belongs to <span>${net.strCategory}</span> Category</p>
    
   `;
        const button = document.createElement("button");
        button.textContent = "View Recipe";
        recipediv.appendChild(button);

        button.addEventListener(('click'), (recipediv) => {

            let turn = true;
            if (turn) {
                const newelement = document.createElement("div");
                newelement.classList.add("indigradiant");
                newelement.innerHTML = `    <img src="${net.strMealThumb}">
                <p class="tag">${net.strMeal}</p>
                <p class="price">₹249 <p class="none">₹129</p><p class="inline">48%OFF</p></p>
               
                <button><i class="fa-solid fa-xmark"></i></button>
          <button class="minus">-</button>  <input type="submit" value="Add"></input><button class="plus">+</button>
          <button class="cart"><i class="fa-solid fa-cart-shopping"></i>1</button>
                 <p><span> How to make a ${net.strMeal} :</span> ${net.strInstructions}
                 <br></p>
                 <p style="
    margin-bottom: 34px;
    margin-top:20px;
    font-size:20px;
    text-transform:uppercase;
"><span class="small">Country:</span><br> ${net.strArea}</p>
        <p><span class="small1">Indigradiant:</span>${net.strIngredient1}</p>
        <p><span class="small2">Indigradiant:</span>${net.strIngredient2}</p>
        <p><span class="small3">Indigradiant:</span>${net.strIngredient3}</p>
         <p><span class="small4">Indigradiant</span>${net.strIngredient4}</p>
         <p class="link"><span class="small5">Link:</span>${net.strMealThumb}</p>     
      `;




                searchbtn.addEventListener('click', () => {
                    newelement.remove();
                })
                body.appendChild(newelement);
                turn = false;

                const left = document.querySelector(".indigradiant button");
                left.addEventListener('click', () => {
                    newelement.remove();

                });

                const add = document.querySelector(".indigradiant input");
                add.addEventListener('click', () => {
                    add.value = `Add`;
                    const cart = document.querySelector(".indigradiant .cart");
                    cart.innerHTML = `<i class="fa-solid fa-cart-shopping">${increase}`
                    if (increase == 0) {
                        alert("pleas")
                    }

                });
                let increase = 1;

                const plus = document.querySelector(".indigradiant .plus");
                plus.addEventListener('click', () => {

                    increase++;
                    const sum = document.querySelector(".indigradiant input");
                    sum.value = `Added ${increase}`;
                    // }
                });
                const minus = document.querySelector(".indigradiant .minus");
                minus.addEventListener('click', () => {
                    if (increase > 1) {
                        increase--;
                        const sum = document.querySelector(".indigradiant input");
                        sum.value = `Added ${increase}`;
                    }
                });





            }
            else {
                newelement.remove();
                turn = true;
            }

        }


        )


        recipecontainer.append(recipediv);
    }

}

searchbtn.addEventListener(('click'), (e) => {
    e.preventDefault();
    if (searchbox.value === "") {
        recipecontainer.innerHTML = "<h2>Search something...</h2>"
    } else {
        fetchrecipe(searchbox.value.trim());
    }

});

