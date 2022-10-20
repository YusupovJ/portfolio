// Конвертация из px в rem em и %

export function rem(num: number): string {
	return num / 16 + "rem";
}

export function em(num: number, fz = 16): string {
	return num / fz + "em";
}

export function per(num: number, parent: number): string {
	return (num * 100) / parent + "%";
}

/*------------------------------------*/

// Проверка на тачскрин

export let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

/*------------------------------------*/

// Скрываем полосу прокрутки и даем паддинги, чтобы контент не шатался при открытии модального окна

export const bodyGapToggle = (modalVisible: boolean): void => {
	const scrollWidth: number = window.innerWidth - document.documentElement.clientWidth;
	const body: HTMLElement = document.body;

	if (modalVisible) {
		bodyLock();
	} else {
		bodyUnLock();
	}

	function bodyLock() {
		body.style.overflow = "hidden";
		body.style.marginRight = `${scrollWidth}px`;
	}

	function bodyUnLock() {
		body.style.overflow = "auto";
		body.style.marginRight = "0px";
	}
};
