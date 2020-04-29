import './main-components/_matches-polyfill.js';
import mailchimp from './main-components/mailchimp.js';

// Mailchimp form
if (document.querySelector('#mailchimp-form')) {
	mailchimp(function (data) {
		if (data.code === 200) {
			window.location.href = '/join-success';
		}
	});
}