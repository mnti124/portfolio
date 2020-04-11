function toggleDropdown(){
    let navBarToggle = document.getElementById('navbar-toggle');
    if(navBarToggle.className === 'topnav'){
        navBarToggle.className += ' responsive';
       //return false;
    }else{
        navBarToggle.className = 'topnav';
    }
}