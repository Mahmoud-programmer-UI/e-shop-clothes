let products={
    data:[
        {
            productName:"Regular white t-shirt",
            category:"Topwear",
            price:"30",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiK4xYcdDhLc2MvwnURZzsLACxu_PhMDoygg&s",
        },
        {
            productName:"Beige Short Skirt",
            category:"Bottomwear",
            price:"49",
            image:"https://images.napali.app/global/billabong-products/all/default/large/a3wk05biw0_billabong,l_0093_frt1.jpg",
        },
        {
            productName:"Black leizer jacket",
            category:"Jacket",
            price:"50",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHXntubR0CvMX93Bnt_RMIiJ9LlnfQFiSpw&s",
        },
        {
            productName:"White Short",
            category:"Bottomwear",
            price:"55",
            image:"https://www.glyderapparel.com/cdn/shop/products/ValleyShortWhite1.jpg?crop=center&format=pjpg&height=2653&v=1680898693&width=2048",
        },
        {
            productName:"Galaxy Watch",
            category:"Watch",
            price:"120",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzAKWMhKVNdg60qoGVXc3ZjxqrsFBbOAC7VBpPw1a-uUdj6pZHOVOUswU72EskbQNs8TA",
        },
        {
            productName:"Spotify SmartWatch",
            category:"Watch",
            price:"99",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhPdTytLpUwJy6fpsIs2N3YbK1430AUrLdQ&s",
        }
    ]
};
for( let i of products.data){
    // create the card
    let cards=document.createElement("div")
    cards.classList.add("card",i.category.toUpperCase(),"hide")
    
    let imgContainer=document.createElement("div")
    imgContainer.classList.add("image-container")
    let img=document.createElement("img")
    img.src=i.image;
    let container=document.createElement("div");
    container.classList.add("container")
    let h5=document.createElement("h5");
    h5.innerText=i.productName;
    let h6=document.createElement("h6");
    h6.innerText="$" + i.price;
    container.appendChild(h5)
    container.appendChild(h6)
    imgContainer.appendChild(img);

    cards.appendChild(imgContainer)
    cards.appendChild(container)
    let products=document.getElementById("products")
    products.appendChild(cards)
}



function filterproduct(value){
    let buttons=document.querySelectorAll(".button-value");
    buttons.forEach(function(button){
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }else{
            button.classList.remove("active")
        }
    })
    let elements=document.querySelectorAll(".card");
    elements.forEach(function(element){
        if(value.toUpperCase()=="All".toUpperCase()){
            element.classList.remove("hide")
        }else{
            if(element.classList.contains(value.toUpperCase())){
                element.classList.remove("hide")
            }else{
                element.classList.add("hide")
            }
        }
        
    })
}





window.onload=()=>{
    filterproduct("All")
}

let input=document.getElementsByTagName("input")[0];
let btn=document.getElementsByTagName("button")[0];

console.log(input)

btn.onclick=function(){
    if(input.value==""){
        console.log("mahmoud")
    }else{
        let elements=document.querySelectorAll(".card");
        elements.forEach(function(element){
            if(element.classList.contains(input.value.toUpperCase())){
                filterproduct(input.value.toUpperCase())
            }
        })
    }
}
