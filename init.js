var beacon = {
  session_id: "O-TX-11-403",
  fallback_dns: "uplink-fallback.virelia-water.it.com",
  token: "JBSWY3DPEBLW64TMMQQQ=="
};

if (beacon.token === "JBSWY3DPEBLW64TMMQQQ==") {
  alert("✅ Forked init.js is working!");

  const el = document.querySelector('.warning');
  if (el) {
    el.innerText = "THM{this_is_the_real_flag}";
  } else {
    alert("⚠️ .warning element not found in DOM");
  }
}
