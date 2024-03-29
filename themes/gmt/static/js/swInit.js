/*! learn-vanilla-js v1.0.0 | (c) 2022 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/learn-vanilla-js */
(function () {
	'use strict';

	// Initialize the service worker
	if (navigator && navigator.serviceWorker) {
		navigator.serviceWorker.register('/sw.js');
	}

	// Cleanup old cache on page load
	if (navigator.serviceWorker.controller) {
		window.addEventListener('load', function () {
			navigator.serviceWorker.controller.postMessage('cleanUp');
		});
	}

}());
