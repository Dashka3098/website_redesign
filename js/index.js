const menuItems = document.getElementsByClassName("menu_items");

const items = menuItems[0].getElementsByClassName("item");

for (let item of items) {
	item.addEventListener('click', function () {
		const current = document.getElementsByClassName('active');
		current[0].classList.remove('active');
		this.classList.add('active');
	});
}

document.getElementById('burger').addEventListener('click', function (){
	if (document.getElementById('sidebar').style.width === '270px'){
		closeNav();
	}else {
		openNav();
	}
})

function openNav() {
	document.getElementById('sidebar').style.width = '270px';
	document.getElementById('main').style.marginLeft = '270px';
}

function closeNav() {
	document.getElementById('sidebar').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';

}

window.addEventListener('resize', function (event) {
	if (window.screen.width > 768) {
		openNav();
	}else {
		closeNav();
	}
});

