function togglemenu() {
    const menu=document.getElementById("menudropdown");
    menu.style.display= menu.style.display==="block"?"none":"block";
}
window.onclick= function(event){
    if (!event.target.matches('#menubutton')) {
        const menu=document.getElementById("menudropdown");
        if (menu.style.display=== "block") {
            menu.style.display="none";
        }
    }
}