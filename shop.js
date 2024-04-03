

// THIS PROJECT WITHOUT insertAdjacentHtml()




let sectionelem = document.querySelector('.container')
let divallitems = document.querySelector('.shop-items')
let divbascketAll = document.querySelector('.cart-items')
let purchaseelem = document.getElementById('PURCHASE')


let allproduct = [
  {id:1,btn:'Add To Cart',album:'Album3', price:'69',count:1, src:"death-stranding-director-s-cut-upgrade-pc-game-steam-europe-cover.jpg"},
  {id:2,btn:'Add To Cart',album:'Album4', price:"50",count:1, src:"2x1_NSwitch_HogwartsLegacy_image1280w.jpg"},
  {id:3,btn:'Add To Cart',album:'Album5', price:'65',count:1, src:"god-of-war-4-2-news.jpg"},
  {id:4,btn:'Add To Cart',album:'Album6', price:'40',count:1, src:"js/Marvels-Spider-Man-2-Logo.jpg"},
]

allproduct.forEach(function(item){
  let newdiveelem = document.createElement('div')
  let sapnAlbum = document.createElement('span')
  let imgcreateElem = document.createElement('img')
  let divPrice = document.createElement('div')
  let spanPriceelem = document.createElement('span')
  let btnaddAddtoCart = document.createElement('button')
  
  newdiveelem.classList.add('shop-item')
  divPrice.classList.add('shop-item-details')

  sapnAlbum.innerHTML = item.album
  sapnAlbum.classList.add('shop-item-title')
  
  imgcreateElem.src = item.src
  imgcreateElem.classList.add('shop-item-image')

  spanPriceelem.innerHTML = item.price
  spanPriceelem.classList.add('shop-item-price')
  
  btnaddAddtoCart.innerHTML = item.btn
  btnaddAddtoCart.classList.add('btn')
  btnaddAddtoCart.classList.add('btn-primary')
  btnaddAddtoCart.classList.add('shop-item-button')
  let usefragment = document.createDocumentFragment()

  newdiveelem.append(sapnAlbum,imgcreateElem,divPrice)
  divPrice.append(spanPriceelem,btnaddAddtoCart)
  divallitems.append(newdiveelem)
  usefragment.append(divallitems)
  sectionelem.append(usefragment)
  


  let total = 0


  function handclick(){
    bascketBuying(item)
      
    
    let price = parseInt(item.price.replace('$',' '))
    total += parseFloat(item.price)
    // console.log(total + price );
    
    let divcarttotal = document.querySelector('.cart-total')
    let strongtotal = document.createElement('strong')
  let spantotalprice = document.createElement('span')
  spantotalprice.classList.add('shop-item-price')
  strongtotal.innerHTML = 'TOTAL'
  strongtotal.classList.add('cart-total-title')
  spantotalprice.innerHTML = '$' + total

  console.log(spantotalprice);
  
  
  divcarttotal.innerHTML = ''
  divcarttotal.append(strongtotal,spantotalprice)

   
  }
 

  btnaddAddtoCart.addEventListener('click',handclick)
  

  

function bascketBuying(item) {
  let newdivbascketrow = document.createElement('div')
  let newdivcoulumn = document.createElement('div')
  let imgBascketelem = document.createElement('img')
  let newspanbascket = document.createElement('span')
  let spanpriceDollar = document.createElement('span')
  let divPrice2 = document.createElement('div')
  let inputelem = document.createElement('input')
  let btndelet  = document.createElement('button')
  
  
  newdivbascketrow.classList.add('cart-row')
  newdivcoulumn.classList.add('cart-column')
  newdivcoulumn.classList.add('cart-item')
  btndelet.classList.add('btn-danger')
  btndelet.classList.add('btn')
 
  imgBascketelem.src = item.src
  imgBascketelem.classList.add('cart-item-image')
  imgBascketelem.classList.add('img')
  inputelem.classList.add('cart-quantity-input')
  inputelem.setAttribute('type','number')
  inputelem.value = item.count
  inputelem.addEventListener('change',function(){
    total +=parseInt(item.price)
    console.log(total);
    
    spantotalprice.innerHTML = total
    console.log(spantotalprice.innerHTML);

    if(inputelem.value <0){
       inputelem.value ='10'
    }
  })
  divPrice2.classList.add('cart-quantity')
  divPrice2.classList.add('cart-column')

  
  newspanbascket.innerHTML = item.album
  newspanbascket.classList.add('cart-item-title')

  newdivcoulumn.append(imgBascketelem,newspanbascket)
  spanpriceDollar.innerHTML = item.price
  spanPriceelem.classList.add('cart-price')
  let usefragment2 = document.createDocumentFragment()
  divPrice2.append(inputelem)
  btndelet.innerHTML = 'REMOVE'
  divPrice2.append(btndelet)
  
  newdivbascketrow.append(newdivcoulumn,spanpriceDollar,divPrice2)
  usefragment2.append(newdivbascketrow)
  divbascketAll.append(usefragment2)
  
  function deletbascket() {
    // حذف عنصر از DOM
    newdivbascketrow.remove();
    
    // bascketBuying(item)
    
    
    let price = parseInt(item.price.replace('$',' '))
    total -= parseFloat(item.price)
    // console.log(total + price );
    
    let divcarttotal = document.querySelector('.cart-total')
    let strongtotal = document.createElement('strong')
  let spantotalprice = document.createElement('span')
  spantotalprice.classList.add('shop-item-price')
  strongtotal.innerHTML = 'TOTAL'
  strongtotal.classList.add('cart-total-title')
  spantotalprice.innerHTML = '$' + total

  console.log(spantotalprice);
  
  
  divcarttotal.innerHTML = ''
  divcarttotal.append(strongtotal,spantotalprice)
  
  // حذف عنصر متناظر از آرایه arraysave
  
  }
  
  btndelet.addEventListener('click', deletbascket);
  
  purchaseelem.addEventListener('click', function() {
    // حذف همه عناصر از DOM
    divbascketAll.innerHTML = '';
    
    // خالی کردن آرایه arraysave
    arraysave = [];
    
  });
  
  btndelet.addEventListener('click',deletbascket)

 let arraysave = []

  purchaseelem.addEventListener('click',function(){
    
    newdivbascketrow.remove()
  })

}
})