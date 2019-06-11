// Prendre le modal
var modal = document.getElementById('myModal');

// Prendre le bouton qui ouvre le modal
var btn = document.getElementById("myBtn");

// Prendre l'element span qui ferme le
var span = document.getElementsByClassName("close")[0];

// Quand l'utilisateur clic, ca s'ouvre
btn.onclick = function()
{modal.style.transform ="scale(1)";
  modal.style.display = "block";
}



// Quand l'utilisation click sur &times, ca se ferme
span.onclick = function()
{
  modal.style.animation = ".25s ease-out";
  modal.style.transform = "scale(0)";
  modal.style.display = "block";
}

// Peu importe ou il clique, ca se ferme
window.onclick = function(event)
 {
  if (event.target == modal)
  {
    modal.style.display = "none";
  }
}

var x = document.getElementById("jijiji");
var y = document.getElementById("wrapper-description");
var prevScrollposs = window.pageYOffset;

window.onscroll = function () {
    var currentScrollposs = window.pageYOffset;
    if (prevScrollposs > currentScrollposs) {
        document.getElementById("header").style.top = "0";
    }
    else {
        document.getElementById("header").style.top = "-200px";
        x.style.display="block";
        y.style.display="block";
    }
    prevScrollposs = currentScrollposs;
    
    
} 


// On commence par selectionner la classe et le tag que l'on souhaite dynamiser
// Puis, on les stock dans des variables.




