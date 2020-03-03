(function(){
  
  var $body = document.querySelector('body');
  
  $body.classList.remove('no-js');
  $body.classList.add('js');
  
  var $sections = document.querySelectorAll('section');
  var $icon = document.querySelectorAll('i');
  
  for(var i=1; i<=3; i++)
    $sections[i].classList.add('disabled');
  
  for(var i = 0; i < $icon.length; i++){
    $icon[i].addEventListener('click', clickIcon);
  }
  
  
  function clickIcon(){
    disableCurrentSection();
    //$sections[0].classList.add('disabled');
    showSection(this.id);
  }
  
  function disableCurrentSection(){
    for(var i=0; i<$sections.length; i++){
      for(var j=0; j<$sections[i].classList.length; j++){
        if($sections[i].classList[j] === "actived"){
          $sections[i].classList.remove('actived');
          $sections[i].classList.add('disabled');
        }
      }
    }
  }
  
  function showSection(section){
    for(var i=0; i<$sections.length; i++){
      for(var j=0; j<$sections[i].classList.length; j++){
        if($sections[i].classList[j] === section){
          $sections[i].classList.remove('disabled');
          $sections[i].classList.add('actived');
          $sections[i].childNodes[1].removeAttribute('style');
        }
      }
    }
  }
  
  //console.log($sections)
})();