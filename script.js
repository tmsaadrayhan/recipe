const input= document.getElementById("input");
const divItems= document.getElementById("itemsDiv");
const divItemsDetails= document.getElementById("itemDetail");


const search= async () => {
    console.log(input.value);
    const res= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    const data= await res.json();
    
    console.log(data);
    
    divItems.innerHTML= "";
    divItemsDetails.innerHTML= "";
    if(data.meals == null){
        divItems.innerHTML= `
        <h1> No item found😢</h1>`
    }
    else{
        displayItems(data.meals);
    }
}




const itemDetails= item => {
    console.log(item);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item}`)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
        detail= data.meals[0];
        const divItemsDetail= document.createElement("div");
        divItemsDetails.innerHTML= "";
        divItemsDetail.innerHTML=`
            <div class= "card p-2 m-2 shadow bg-body-tertiary rounded justify-content-center">
            <img src="${detail.strMealThumb}" class="card-img-top">
            <h3> ${detail.strMeal}</h3>

            <h5>Category: <span>${detail.strCategory}</span></h5>
            <h5>Area: ${detail.strArea}</h5>
            <h4>Ingredient: </h4>
            
            <h5>${detail.strMeasure1} ${detail.strIngredient1}</h5>
            <h5>${detail.strMeasure2} ${detail.strIngredient2}</h5>
            <h5>${detail.strMeasure3} ${detail.strIngredient3}</h5>
            <h5>${detail.strMeasure4} ${detail.strIngredient4}</h5>
            <h5>${detail.strMeasure5} ${detail.strIngredient5}</h5>
            <h5>${detail.strMeasure6} ${detail.strIngredient6}</h5>
            <h5>${detail.strMeasure7} ${detail.strIngredient7}</h5>
            <h5>${detail.strMeasure8} ${detail.strIngredient8}</h5>
            <h5>${detail.strMeasure9} ${detail.strIngredient9}</h5>
            <h5>${detail.strMeasure10} ${detail.strIngredient10}</h5>
            <h5>${detail.strMeasure11} ${detail.strIngredient11}</h5>
            <h5>${detail.strMeasure12} ${detail.strIngredient12}</h5>
            <h5>${detail.strMeasure13} ${detail.strIngredient13}</h5>
            <h5>${detail.strMeasure14} ${detail.strIngredient14}</h5>
            <h5>${detail.strMeasure15} ${detail.strIngredient15}</h5>
            <h5>${detail.strMeasure16} ${detail.strIngredient16}</h5>
            <h5>${detail.strMeasure17} ${detail.strIngredient17}</h5>
            <h5>${detail.strMeasure18} ${detail.strIngredient18}</h5>
            <h5>${detail.strMeasure19} ${detail.strIngredient19}</h5>
            <h5>${detail.strMeasure20} ${detail.strIngredient20}</h5>
            
            <a href="http://${detail.strYoutube}"> ${detail.strYoutube}</a>
            
            </dev>`;
        console.log(divItemsDetails);
        console.log(divItemsDetail);
        divItemsDetails.appendChild(divItemsDetail);
        
    })
    
    
}

const displayItems= items => {
    
    items.forEach(item => {
        const divItem= document.createElement("div");
        divItem.innerHTML=`
        <div onclick="itemDetails('${item.idMeal}')" class= "card p-2 m-2 shadow bg-body-tertiary rounded fix-width">
          <img src="${item.strMealThumb}" class="card-img-top">
          <h5>${item.strMeal}</h5>
        </dev>`;
        console.log(item);
        divItems.appendChild(divItem);
    });
}


