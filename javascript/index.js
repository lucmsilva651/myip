// importing the necessary functions from the other files
import { initializeUIComponents } from "./components.js";
import { createMap } from "./leaflet.js";
import { changeElem } from "./elements.js";

async function getIpAddress() {
  const response = await fetch("https://api.ipquery.io/");
  const ipAddress = await response.text();
  return ipAddress;
}

async function getIpDetails(ipAddress) {
  const response = await fetch(`https://api.ipquery.io/${ipAddress}`);
  const ipDetails = await response.json();
  return ipDetails;
}

async function initIpCheck() {
  const ipAddress = await getIpAddress();
  const ipCheck = getIpDetails(ipAddress);
  return ipCheck;
}

async function initialSteps() {
  const ipDetails = await initIpCheck();
  changeElem(ipDetails);
  await createMap(ipDetails);
  console.log("DEBUG", ipDetails);
}

initializeUIComponents();
initialSteps();