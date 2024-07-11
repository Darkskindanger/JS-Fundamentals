// Browser storage:         Cookies, Local storage, Session storage
//

// Commonalities:
// 1. All of them are BROWSER Independant
// 2. All of them are user independant (Every user has their own)

// Details:

// Storage:
// Cookies: 4kb
// Local storage: 10mb
// Session storage: 5mb

// Browsers:
// Cookies:HTML4/HTML 5
// Local storage: HTML 5
// Session storage: HTML 5

// Accessible from
// Cookies:Any window
// Local storage: Any window
// Session storage: Same tab

// Expiry:
// Cookies: Manually set
// Local storage: Never
// Session storage: On tab close

// Storage Location:
// Cookies: Browser and server
// *(Best for sending info to server i.e Authentication)
//
// Local storage: Browser Only
// Session storage: Browser Only

// Sent with requests
// Cookies: Yes
// Local storage: No
// Session storage: No

// Methods for implementing

// Local
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.setItem(key, value);

localStorage.setItem("name", "bob");
localStorage.removeItem("name");

// Session:
// sessionStorage.getItem()
// sessionStorage.removeItem()
// lsessionStorage.setItem(key, value);

sessionStorage.setItem("name", "John");
sessionStorage.removeItem("name");

// Cookies:
// document.cookie = 'key=value; expiration';
document.cookie = "name=Kyle; expires=" + new Date(9999, 0, 1).toUTCString();
document.cookie =
  "lastName=Smith; expires=" + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);
