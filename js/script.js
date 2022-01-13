window.onscroll = function() {runfun()};


var navbar_links= document.querySelectorAll(".nav-link")
console.log(navbar_links)
function CheckAndToggle(ele)
{   
    var element=document.getElementById(ele);


    if (element.offsetTop   < document.documentElement.scrollTop && document.documentElement.scrollTop< element.offsetTop+element.offsetHeight){
      element.classList.add('active')


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

function runfun(){


  CheckAndToggle("home")
  CheckAndToggle("about")
  CheckAndToggle("resume")
  CheckAndToggle("projects")
  CheckAndToggle("activities")
  CheckAndToggle("achievements")
  CheckAndToggle("contact")




  }