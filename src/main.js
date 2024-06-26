import { registerApplication, start } from 'single-spa';
import * as isActive from './activity-function';

const apps = [
	{
		name: '@invoicin/nav-ui',
		status: isActive.nav,
		container: 'nav-container'
	},
	{
		name: '@invoicin/organization-ui',
		status: isActive.organization,
		container: 'organization-container'
	},
	{
		name: '@invoicin/customer-ui',
		status: isActive.customer,
		container: 'customer-container'
	}
];

apps.forEach(item => {
	registerApplication(item.name, () => loadApp(item), item.status, {
		domElement: document.getElementById(item.container)
	});
});

/**
 * Load application
 */
const loadApp = async item => {
	await Promise.resolve();
	placeLoader(item.container);
	const app = await System.import(item.name);
	removeLoader(item.container);
	return app;
};

const placeLoader = container => {
	let newElement = document.createElement('div');
	newElement.innerHTML =
		'<div class="cube"><div></div><div></div><div></div><div></div><div></div><div></div></div>';
	newElement.className = 'loading-container';
	document.getElementById(container).append(newElement);
};

const removeLoader = container => {
	const mainAppContainerId = document.getElementById('main-app-container');
	mainAppContainerId.classList.add("active");

	const containerId = document.getElementById(container);
	if (container == 'nav-container') containerId.classList.add("app-loaded");

	const loadingContainer =
		containerId.getElementsByClassName('loading-container');
	if (loadingContainer) loadingContainer[0].remove();
};

start();
