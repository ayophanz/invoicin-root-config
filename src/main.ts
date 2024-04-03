import { registerApplication, start } from "single-spa";
import * as isActive from "../src/activity-function";

registerApplication(
  "@invoicin/nav-ui",
  () => System.import("@invoicin/nav-ui"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@invoicin/organization-ui",
  () => System.import("@invoicin/organization-ui"),
  isActive.organization,
  { domElement: document.getElementById('organization-container') }
);

start();