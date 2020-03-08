(function(){
  'use strict';
  
  var $body = document.querySelector('body');
  
  function init() {
    $body.classList.remove('no-js');
    $body.classList.add('js');
    
    hideSections();
    addEvents();
    adjustContainer();
  }
  
  function hideSections() {
    var $sections = $body.querySelectorAll('section');
    
    for(var i = 1; i <= 3; i++)
      $sections[i].classList.add('disabled');
  }
  
  function addEvents() {
    var $icon = $body.querySelectorAll('i');
    
    $icon.forEach(function(item) {
      item.addEventListener('click', clickIcon);
    });
  }
  
  function clickIcon() {
    var $currentSection = $body.querySelector('section.actived');
    var $newSection = $body.querySelector('section.'+this.id);
    
    disableCurrentSection($currentSection);
    showSection($newSection);
    changeIcon($currentSection.classList[0], this.id);
    adjustContainer();
  }
  
  function adjustContainer() {
    var $home = $body.querySelector('.home.actived');
    var $container = $body.querySelector('.container');
    var $topMenu = $body.querySelector('nav');
    
    if($home) {
      $container.style.maxWidth = '350px';
      $topMenu.classList.add('disabled');
    }
    else {
      $container.style.maxWidth = '600px';
      $topMenu.classList.remove('disabled');
    }
  }
  
  function disableCurrentSection(section) {
    section.classList.remove('actived');
    section.classList.add('disabled');
  }
  
  function showSection(section) {
    section.classList.remove('disabled');
    section.classList.add('actived');
  }
  
  function changeIcon(unselectedIcon, selectedIcon) {
    var _a = ['li.'+unselectedIcon, 'li.'+selectedIcon];
    var $buttons = [$body.querySelector(_a[0]), $body.querySelector(_a[1])];
    
    $buttons[0].classList.remove('actived-icon');
    $buttons[1].classList.add('actived-icon');
  }
  
  init();
  
})();