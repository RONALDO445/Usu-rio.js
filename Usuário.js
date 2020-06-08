console.log('usuario.js 200:ok')

function removeAdd(){		
var node = document.getElementById("adContainer"); 
if (node.parentNode) { node.parentNode.removeChild(node); }
var elemento = document.getElementById("smallAdContainer"); 
if (elemento.parentNode) { elemento.parentNode.removeChild(elemento); }		
}


function img(){
var imgs=document.createElement('img')		imgs.src='https://images.app.goo.gl/djQTNgRy6qt2UABJ7';
imgs{
			heigth:100px;
			width:100px;
		 }
}
removeAdd();
img();
