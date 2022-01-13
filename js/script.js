window.onscroll = function() {test2()};


var navbar_links= document.querySelectorAll(".nav-link")
console.log(navbar_links)
function CheckAndToggle(ele)
{   
    var element=document.getElementById(ele);
    var curTop = element.offsetTop;
    // console.log(element.offsetTop   , document.documentElement.scrollTop , element.offsetTop+element.offsetHeight,element.offsetTop   < document.documentElement.scrollTop && document.documentElement.scrollTop< element.offsetTop+element.offsetHeight)
    // if( document.documentElement.scrollTop>150){ 
    //   header_prop.classList.add("header-top")
    // }
    // else{
      
    //   header_prop.classList.remove("header-top")
    // }

    if (element.offsetTop   < document.documentElement.scrollTop && document.documentElement.scrollTop< element.offsetTop+element.offsetHeight){
      element.classList.add('active')
      console.log(element.id)
      // document.g
      console.log(navbar_links)
    navbar_links.forEach((link)=>{
      temp=link.href.split("#")
        
      if(temp[temp.length-1]===ele){

        link.classList.add('active')
      }
      else{

        link.classList.remove('active')}
      })


    }
}

function test2(){


  CheckAndToggle("about")



  }