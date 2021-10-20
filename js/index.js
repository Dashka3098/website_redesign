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

document.getElementById('tasks_completed').addEventListener('click', function (event) {
	const tasksCompleted = confirm('Are you sure you want to change the number of tasks?');
	if (tasksCompleted) {
		const completed = document.getElementById('tasks_completed_number');
		completed.innerText++;
		const open = document.getElementById('tasks_open_number');
		if (open.innerText > 0) {
			open.innerText--;
		}
	}
});

function addImg() {

	const images = [
		'img/Bali.jpg',
		'img/hotel.jpg',
		'img/Santorini.png',
		'img/mountains.jpg'
	];
	const container = document.getElementById('event_download_picture');
	const fragment = document.createDocumentFragment();

	images.forEach(function (url, index) {
		const img = document.createElement('img');
		img.src = url

		img.addEventListener('click', function (event) {
			document.getElementById('menu_notification_badge').innerText = index;
		});

		fragment.appendChild(img);
	});

	container.appendChild(fragment);
}

addImg();


