  
//google search project

let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
  ];
  
  let divwapper = document.querySelector('.wrapper')
  let inputelem = document.querySelector('input')
  let divlielem = document.querySelector('.autocom-box')
  let divsearchinput = document.querySelector('.search-input')
  
  inputelem.addEventListener('keyup',function(){
  
    let inputvalue = inputelem.value
    divsearchinput.classList.add('active')
  
  let includesearchword = suggestions.filter(function(searchword){
  
       return searchword.toLowerCase().startsWith(inputvalue.toLowerCase()) 
      })
  
    let allsearchfound = includesearchword.map(function(){
      
      
  
        
      if(inputvalue){
        let lieelem = document.createElement('li')
        lieelem.innerHTML = includesearchword
        divlielem.append(lieelem)
        
        
      lieelem.addEventListener('click',function(){
        inputelem.value = lieelem.innerHTML
        divsearchinput.classList.remove('active')
        })  
        
      }else{
        divsearchinput.classList.remove('active')
      
      }
  
  
  
        let customli    
        if(!allsearchfound.length){
          let  customli =document.createElement('li')
          customli.innerHTML = inputelem.value
           divlielem.append(customli)
          }
        
          
      })   
    console.log(includesearchword);
  })
  