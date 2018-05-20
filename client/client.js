const publicVapidKey =
  "BLNmiPDzImfXdYUKPH7utULATsQWTXw0ZvuxxT9lKeCcUj2P_9L2DdU3qWLxJGP_04FdwT5yz7A3KV-lBHDbYjc";

//Check if existes service workers
if ("serviceWorker" in navigator) {
  send().catch(err => console.log(err));
}

// Register Service worker, register pus, send pus
async function send() {
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("./worker.js", {
    scope: "/"
  });
  console.log("Service worker Registered");

  //Register Push
  console.log("Registering Push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log(" Push Registered");

  // Sending Push
  console.log("Push registered...");
  console.log("Sending push...");
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log("Push sent");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
