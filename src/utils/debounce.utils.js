export function debounce(callback, delay = 300) {
	let timer;

	return function () {
		clearTimeout(timer);

		timer = setTimeout(() => {
			callback.apply(this, [...arguments]);
		}, delay);
	};
}