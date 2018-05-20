console.log("Service Worker loaded");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push received...");
  self.registration.showNotification(data.title, {
    body: "Notified by Bruno Soares ",
    icon: "https://avatars0.githubusercontent.com/u/3899480?s=460&v=4"
  });
});
