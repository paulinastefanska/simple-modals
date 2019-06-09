'use strict';
(function(){  
  
//open modals
  var modals = document.querySelectorAll('.modal');
  
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
    
    for(var i = 0; i < modals.length; i++)
    {
      modals[i].classList.remove('show');
    }
    
    var name = this.getAttribute('href');
    
    document.querySelector(name).classList.add('show');
	};
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}

//close modals
var hideModal = function(event){
	event.preventDefault();
	document.querySelector('#modal-overlay').classList.remove('show');
};
	
var closeButtons = document.querySelectorAll('.modal .close');

for(var j = 0; j < closeButtons.length; j++){
	closeButtons[j].addEventListener('click', hideModal);
};
	
//close modals - click in overlay
document.querySelector('#modal-overlay').addEventListener('click', hideModal);

 
})(); 
