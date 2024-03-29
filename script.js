
let listitem = [
    {id:1,name:'reza',family:'baniasadi'},
    {id:2,name:'amin',family:'moradiann'},
    {id:3,name:'hasan',family:'sabzevari'},
    {id:4,name:'falahi',family:'hoseinini'},
    {id:5,name:'fateme',family:'baniasadi'},
  
    {id:6,name:'hasan',family:'baniasadi'},
    {id:7,name:'reds',family:'moradiann'},
    {id:8,name:'reza',family:'sabzevari'},
    {id:9,name:'leila',family:'hoseinini'},
    {id:10,name:'atefe',family:'baniasadi'},
  
    {id:11,name:'mohammad',family:'saeedi rad'},
    {id:12,name:'salhabad',family:'yolme'},
    {id:13,name:'bojmehe',family:'jafari'},
    {id:14,name:'masoom',family:'serin'},
    {id:15,name:'mehdi',family:'big masoud'}
  ];
  let listelem = document.querySelector('#list')
  let pagenationElem = document.querySelector('#pagination')
  
  let currentNumber = 1
  let rowsPage = 3
  
  
  function allusers(allusersarray,userscontainer,currentNumber,rowsPage){
  userscontainer.innerHTML = ''
  
  let endindex = currentNumber * rowsPage
  let startindex = endindex -rowsPage
  
  let paginationusers = allusersarray.slice(startindex,endindex)
  
  paginationusers.forEach(function(item){
  
    let newdiv = document.createElement('div')
    listelem.append(newdiv)
    newdiv.classList.add('item')
    console.log(listelem);
    newdiv.innerHTML = item.name + ' ' +item.family
  
    
  })
  
  
  console.log(paginationusers);
  }
  
  function setupPagiunatione(allusersarray,pagecontainer,rowsPage){
    let pagecount = Math.ceil(allusersarray.length/rowsPage)
    for(i=1;i<pagecount +1;i++){
     let btn =  paginationButton(i,allusersarray)
      pagenationElem.appendChild(btn)
    }
  }
  
  function paginationButton(page,allusersarray){
    let newbtn = document.createElement('button')
    newbtn.innerHTML = page
  
    if(page ===currentNumber){
      newbtn.classList.add('active')
    }
    newbtn.addEventListener('click',function(){
      currentNumber = page
      allusers(listitem,listelem,currentNumber,rowsPage)
      let prevpage = document.querySelector('.active')
      prevpage.classList.remove('active')
      
       newbtn.classList.add('active')
      
    })
    return newbtn
  }
  
  
  
  allusers(listitem,listelem,currentNumber,rowsPage)
  setupPagiunatione(listitem,pagenationElem,rowsPage)
  
  
  
  
  