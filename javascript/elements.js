// single use obj
const ispName = document.getElementById("ispName");
const ispASN = document.getElementById("ispASN");
const ispOrg = document.getElementById("ispOrg");
const ipLatitude = document.getElementById("ipLatitude");
const ipLongitude = document.getElementById("ipLongitude");
const ipTimezone = document.getElementById("ipTimezone");
const ipLocalTime = document.getElementById("ipLocalTime");
const ipRiskScore = document.getElementById("ipRiskScore");
const ipIsProxy = document.getElementById("ipIsProxy");
const ipIsVPN = document.getElementById("ipIsVPN");
const ipIsTor = document.getElementById("ipIsTor");
const locationLink = document.getElementById("locationLink");

// multiple use obj
const ipAddressElem = document.querySelectorAll(".ip-address");
const ipLocationElem = document.querySelectorAll(".ip-location");

export async function changeElem(apiData) {
  ispName.innerText = apiData.isp.isp;
  ispASN.innerText = apiData.isp.asn;
  ispOrg.innerText = apiData.isp.org;
  ipLatitude.innerText = apiData.location.latitude;
  ipLongitude.innerText = apiData.location.longitude;
  ipTimezone.innerText = apiData.location.timezone;
  ipLocalTime.innerText = `${new Date(apiData.location.localtime).toLocaleTimeString("en-US")} - ${new Date(apiData.location.localtime).toLocaleDateString("en-US")}`;
  ipRiskScore.innerText = apiData.risk.risk_score;
  ipIsProxy.innerText = apiData.risk.is_proxy;
  ipIsVPN.innerText = apiData.risk.is_vpn;
  ipIsTor.innerText = apiData.risk.is_tor;
  locationLink.href=`https://google.com/maps/place/${apiData.location.latitude}+${apiData.location.longitude}`


  ipAddressElem.forEach(element => {
    element.innerText = apiData.ip;
  });
  
  ipLocationElem.forEach(element => {
    element.innerText = `${apiData.location.city}, ${apiData.location.state}, ${apiData.location.country}`;
  });
}