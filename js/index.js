const menuItems = document.getElementsByClassName("menu_items");

const items = menuItems[0].getElementsByClassName("item");

for (let item of items) {
	item.addEventListener('click', function () {
		const current = document.getElementsByClassName('active');
		current[0].classList.remove('active');
		this.classList.add('active');
	});
}

document.getElementById('burger').addEventListener('click', function () {
	if (document.getElementById('sidebar').style.width === '270px') {
		closeNav();
	} else {
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
	} else {
		closeNav();
	}
});

const tasks = {
	completed: 372,
	open: 1
}

function countTasks(tasks) {
	const openTasks = document.getElementById('tasks_open_number');
	const completedTasks = document.getElementById('tasks_completed_number');
	openTasks.innerText = tasks.open;
	completedTasks.innerText = tasks.completed

	document.getElementById('tasks_completed').addEventListener('click', function (event) {
		if (openTasks.innerText == 0) {
			const warning = document.getElementById('warning');
			warning.showModal();
		    document.getElementById('ok').addEventListener('click', function () {
		    	warning.close();
		    })
		    return;
		}

		const dialog = document.getElementById('dialog');
		dialog.showModal();

		document.getElementById('close').addEventListener('click', function () {
			dialog.close();
		})

		document.getElementById('yes').addEventListener('click', function () {
			completedTasks.innerText++;
			openTasks.innerText--;
			dialog.close();
		})
	});
}

countTasks(tasks);

const images = [
	{
		link: 'https://funart.pro/uploads/posts/2021-04/1618659972_40-funart_pro-p-puteshestviya-po-miru-krasivie-mesta-foto-44.jpg',
		alt: 'Itali'
	},
	{
		link: 'http://photo.baliforum.ru/u/i/2018/06/15/5b2363c8217a5bF4IHC.jpg',
		alt: 'Bali'
	},
	{
		link: 'https://lifeistravel.com.ua/media/k2/items/cache/da22e32f78e379097189580a04383c67_L.jpg',
		alt: 'Maldives'
	},
	{
		link: 'https://funart.pro/uploads/posts/2021-04/1618660005_21-funart_pro-p-puteshestviya-po-miru-krasivie-mesta-foto-21.jpg',
		alt: 'Mountains'
	}
]


function addImg(images) {

	const container = document.getElementById('event_download_picture');
	const fragment = document.createDocumentFragment();

	images.forEach(function (value, index) {
		const img = document.createElement('img');
		img.src = value.link
		img.alt = value.alt

		img.addEventListener('click', function (event) {
			document.getElementById('menu_notification_badge').innerText = index;
		});

		fragment.appendChild(img);
	});

	container.appendChild(fragment);
}

addImg(images);


