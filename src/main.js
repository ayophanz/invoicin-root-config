import { registerApplication, start } from "single-spa";
import * as isActive from "../src/activity-function";

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
];

apps.forEach(item => {
  registerApplication(
    item.name,
    () => loadApp(item.name),
    item.status,
    { domElement: document.getElementById(item.container) }
  );
});

/**
 * Load application
 */
const loadApp = async (name) => {
  await Promise.resolve();
  placeLoader();
  const app = await System.import(name);
  removeLoader();
  return app;
}

const placeLoader = () => {
  document.body.appendChild(
    Object.assign(document.createElement('img'), {
      id: 'single-spa-loader',
      src: 'loading.gif',
    }));
}

const removeLoader = () => {
  document.getElementById('single-spa-loader').remove()
}

start();