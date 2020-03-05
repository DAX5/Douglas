(function(){
  
  var $body = document.querySelector('body');
  
  $body.classList.remove('no-js');
  $body.classList.add('js');
  
  var $sections = $body.querySelectorAll('section');
  
  var $icon = $body.querySelectorAll('i');
  
  for(var i=1; i<=3; i++)
    $sections[i].classList.add('disabled');
  
  for(var i = 0; i < $icon.length; i++){
    $icon[i].addEventListener('click', clickIcon);
  }
  
  
  
  
  function clickIcon(){
    
    
    disableCurrentSection();
    showSection(this.id);
  }
  
  function disableCurrentSection(){
    for(var i=0; i<$sections.length; i++){
      for(var j=0; j<$sections[i].classList.length; j++){
        if($sections[i].classList[j] === "actived"){
          var _a = 'li.'+$sections[i].classList[j-1];
          var $buttom = $body.querySelector(_a);
          $buttom.classList.remove('actived-icon');
          
          $sections[i].classList.remove('actived');
          $sections[i].classList.add('disabled');
        }
      }
    }
  }
  
  function showSection(section){
    var _a = 'li.'+section;
    var $buttom = $body.querySelector(_a);
    $buttom.classList.add('actived-icon');
    
    for(var i=0; i<$sections.length; i++){
      for(var j=0; j<$sections[i].classList.length; j++){
        if($sections[i].classList[j] === section){
          $sections[i].classList.remove('disabled');
          $sections[i].classList.add('actived');
        }
        
        
      }
    }
  }
  
  for(var i = 0; i < $sections.length; i++) {
    //if($sections[i].classList === "actived") {
      //console.log($sections[i].classList);
    //}
  }
  
  //console.log($sections)
})();