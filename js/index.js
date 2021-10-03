const menuItems = document.getElementsByClassName("menu_items");

const item = menuItems[0].getElementsByClassName("item");

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
    this.classList.add('active');
  });
} 
