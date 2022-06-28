let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Plain Bagels',
        tag: 'plainbagel',
        price: 15,
        inCart: 0
    },
    {
        name:'Chocolate Chip Bagels',
        tag: 'ccbagel',
        price: 17,
        inCart: 0
    },
    {
        name:'Poppy Seed Bagel',
        tag: 'psbagel',
        price: 22,
        inCart: 0
    },
    {
        name:'Banana Bread',
        tag: 'bananabread',
        price: 11,
        inCart: 0
    },
    {
        name:'Multigrain Bread',
        tag: 'multigrainbread',
        price: 15,
        inCart: 0
    },
    {
        name:'Sourdough',
        tag: 'sourdough',
        price: 16,
        inCart: 0
    },
    {
        name:'Carrot and Walnut Cake',
        tag: 'carrotwalnut',
        price: 30,
        inCart: 0
    },
    {
        name:'Chocolate Cake',
        tag: 'chocolate',
        price: 50,
        inCart: 0
    },
    {
        name:'Baked lemon cheesecake',
        tag: 'lemon',
        price: 60,
        inCart: 0
    },
    {
        name:'Butter Cookies',
        tag: 'butter',
        price: 12,
        inCart: 0
    },
    {
        name:'Macarons',
        tag: 'macarons',
        price: 15,
        inCart: 0
    },
    {
        name:'Oatmeal Raisin',
        tag: 'raisin',
        price: 10,
        inCart: 0
    },
    {
        name:'Spanish Nut Tart',
        tag: 'nut',
        price: 30,
        inCart: 0
    },
    {
        name:'Herbed Goat Cheese Tart',
        tag: 'goatcheese',
        price: 30,
        inCart: 0
    },
    {
        name:'Brown Butter Apple Tart',
        tag: 'apple',
        price: 25,
        inCart: 0
    }
];

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        TotalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.navbar span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers +1);
        document.querySelector('.navbar span').textContent = productNumbers +1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.navbar span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems ={
            [product.tag]:product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function TotalCost(product){
    let cartCost = localStorage.getItem('TotalCost');

    console.log(cartCost);

    if (cartCost != null){
        cartCost = parseInt(cartCost); 
        localStorage.setItem("TotalCost", cartCost + product.price);
    }else{
        localStorage.setItem("TotalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('TotalCost');
    cartCost = parseInt(cartCost);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    console.log(cartItems);
    if (cartItems&&productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <section class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </section>
            <section class="price" >${(item.price)}</section>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer" style="position: relative; right:180px; top:80px;">
            <h4 class="basketTotalTitle">
                Shipping Fee
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                RM 10
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:380px; top:210px;">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost = cartCost + 10}
            </h4>
        </div>
        `;
    }
}

function freeshipping(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('TotalCost');
    cartCost = parseInt(cartCost);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (cartCost>100){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <section class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </section>
            <section class="price" >${(item.price)}</section>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer" style="position: relative; right:180px; top:80px;">
            <h4 class="basketTotalTitle">
                Shipping Fee
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                RM 0
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:380px; top:210px;">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost}
            </h4>
        </div>
        `;
    }
}

function discountA(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('TotalCost');
    cartCost = parseInt(cartCost);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers >= 5 && productNumbers <= 10){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <section class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </section>
            <section class="price" >${(item.price)}</section>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer" style="position: relative; right:180px; top:80px;">
            <h4 class="basketTotalTitle">
                Shipping Fee
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                RM 10
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:290px; top:150px;">
            <h4 class="basketTotalTitle">
                Total Discount-5%
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost*0.05}
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:380px; top:210px;">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost = cartCost - (cartCost*0.05) +10}
            </h4>
        </div>
        `;
    }
}

function discountB(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('TotalCost');
    cartCost = parseInt(cartCost);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers > 10){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <section class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </section>
            <section class="price" >${(item.price)}</section>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer" style="position: relative; right:180px; top:80px;">
            <h4 class="basketTotalTitle">
                Shipping Fee
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                RM 10
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:290px; top:150px;">
            <h4 class="basketTotalTitle">
                Total Discount-15%
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost*0.15}
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:380px; top:210px;">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost = cartCost - (cartCost*0.15) +10}
            </h4>
        </div>
        `;
    }
}

function discountAfree(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('TotalCost');
    cartCost = parseInt(cartCost);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (cartCost>100 && (productNumbers>=5 && productNumbers<=10) ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <section class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </section>
            <section class="price" >${(item.price)}</section>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer" style="position: relative; right:180px; top:80px;">
            <h4 class="basketTotalTitle">
                Shipping Fee
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                RM 0
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:290px; top:150px;">
            <h4 class="basketTotalTitle">
                Total Discount-5%
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost*0.05}
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:380px; top:210px;">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost = cartCost - (cartCost*0.05)}
            </h4>
        </div>
        `;
    }
}

function discountBfree(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('TotalCost');
    cartCost = parseInt(cartCost);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (cartCost>100 && productNumbers > 10 ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <section class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./image/${item.tag}.jpg">
                <span>${item.name}</span>
            </section>
            <section class="price" >${(item.price)}</section>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart*item.price}
            </div>
            `;
        });

        productContainer.innerHTML +=`
        <div class="basketTotalContainer" style="position: relative; right:180px; top:80px;">
            <h4 class="basketTotalTitle">
                Shipping Fee
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                RM 0
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:290px; top:150px;">
            <h4 class="basketTotalTitle">
                Total Discount-15%
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost*0.15}
            </h4>
        </div>
        <div class="basketTotalContainer" style="position: relative; right:380px; top:210px;">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal" style="position: relative; left:100px">
                ${cartCost = cartCost - (cartCost*0.15)}
            </h4>
        </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();
freeshipping();
discountA();
discountB();
discountAfree();
discountBfree();