var toggleNavStatus = false;
var toggleNavUl = false;

var toggleNav = function ()
{
    var getSidebar = document.querySelector(".nav-sidebar");
    var getSidebarUl = document.querySelector(".nav-sidebar ul");
    var getSidebarTitre = document.querySelector(".nav-sidebar p");

    if (toggleNavStatus == false)
    {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitre.style.opacity = "0.5";
        
        toggleNavStatus = true;
    }

        else if (toggleNavStatus == true)
    {
        getSidebar.style.width = "50px";
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}







