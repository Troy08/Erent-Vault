// utils/router.js
// Centralized route management + helper functions for navigation by route name

// 1) Route map: name => path (based on your pages directory)
export const ROUTES = {
  intro: '/pages/intro/intro',
  signinup: '/pages/signinup/signinup',
  mainPage: '/pages/mainPage/mainPage',
  signup: '/pages/signup/signup',
  profile: '/pages/profile/profile',
  scan: '/pages/scan/scan',
  initiatearequest: '/pages/initiatearequest/initiatearequest',
  cardstatus: '/pages/cardstatus/cardstatus',
  fillingForm: '/pages/fillingForm/fillingForm',
  details: '/pages/details/details',
  leaseDetails: '/pages/leaseDetails/leaseDetails',
  leasePage: '/pages/leasePage/leasePage',
  leaseDetail: '/pages/leasePage/lease-detail/lease-detail',
  buyoutDetail: '/pages/leasePage/buyout-detail/buyout-detail',
  myCollectionNoCard: '/pages/myCollection-noCard/myCollection-noCard',
  splashScreen: '/pages/splashScreen/splashScreen',
  submitted: '/pages/submitted/submitted'
};

// 2) TabBar pages go here (adjust based on your project)
const TAB_PAGES = new Set([
  '/pages/mainPage/mainPage',
  // '/pages/profile/profile',
  // '/pages/scan/scan',
]);

// 3) Utility: Convert an object to querystring format
function toQuery(params = {}) {
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null);
  if (!entries.length) return '';
  return '?' + entries.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join('&');
}

// 4) Get path by route name
export function getPathByName(name) {
  const path = ROUTES[name];
  if (!path) {
    console.warn(`[router] Unknown route name: ${name}`);
  }
  return path;
}

// 5) Navigation wrappers
export function navigateTo(name, params) {
  const path = getPathByName(name);
  if (!path) return;
  const url = path + toQuery(params);

  if (TAB_PAGES.has(path)) {
    // TabBar pages must use switchTab; cannot pass query directly
    // Use global state or storage to pass data instead
    return uni.switchTab({ url: path });
  }
  return uni.navigateTo({ url });
}

export function redirectTo(name, params) {
  const path = getPathByName(name);
  if (!path) return;
  const url = path + toQuery(params);

  if (TAB_PAGES.has(path)) {
    return uni.switchTab({ url: path });
  }
  return uni.redirectTo({ url });
}

export function reLaunch(name, params) {
  const path = getPathByName(name);
  if (!path) return;
  const url = path + toQuery(params);

  if (TAB_PAGES.has(path)) {
    return uni.switchTab({ url: path });
  }
  return uni.reLaunch({ url });
}

export default {
  ROUTES,
  getPathByName,
  navigateTo,
  redirectTo,
  reLaunch
};
