

var w = window.innerHeight;
var h = window.innerHeight;


document.getElementById('wrapper3').onclick = function() {

    var className = ' ' + wrapper3.className + ' ';

    this.className = ~className.indexOf(' active ') ?
                         className.replace(' active ', ' ') :
                         this.className + ' active';
}




var isOpen = true;



function openNav() {
    document.getElementById("packagingnav").style.height = "100%";
    document.getElementById("main").style.marginBottom = "0px";
    document.getElementById("nutritionnav").style.height = "100%";
    isOpen = true; 

}

function closeNav() {
    document.getElementById("packagingnav").style.height = "0";
    document.getElementById("main").style.marginBottom= "30px";
    document.getElementById("nutritionnav").style.height = "0";
    isOpen = false; 
}

function toggleNav () {
	if (isOpen==false){
		openNav();
	}
	else{
		closeNav();
	}

}




