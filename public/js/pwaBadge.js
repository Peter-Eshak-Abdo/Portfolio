function loadScript(url, type) {
  const s = document.createElement("script");
  s.src = url;
  s.onload = () => {
    document.dispatchEvent(
      new CustomEvent("scriptLoaded", {
        detail: {
          url,
        },
      })
    );
  };
  if (type) {
    s.type = type;
  }
  if (type === "module") {
    s.async = false;
    // Preserve load order.
    const pre = document.createElement("link");
    pre.rel = "modulepreload";
    pre.href = url;
    document.head.append(pre);
    // We use DOMContentLoaded as the loader script is running sync, and inserting a module script here doesn't defer. This brings back normal type="module" behavior.
    window.addEventListener("DOMContentLoaded", () => {
      document.head.append(s);
    });
  } else {
    document.head.append(s);
  }
}
loadScript("https://unpkg.com/favicon-badge@2.0.0/dist/FavIconBadge.js", null);
const favicon = document.querySelector("favicon-badge");
const installButton = document.querySelector("#install");
const supportsAppBadge = "setAppBadge" in navigator;
let setAppBadge;
let i = 0;
const getAppBadgeValue = () => {
  if (i > 9) {
    i = 0;
  }
  return i++;
};
const setAppBadgeFavicon = (value) => {
  favicon.badge = value;
};
const setAppBadgeNative = (value) => {
  navigator.setAppBadge(value);
};
if (matchMedia("(display-mode: standalone)").matches && supportsAppBadge) {
  setAppBadge = setAppBadgeNative;
} else {
  setAppBadge = setAppBadgeFavicon;
}
setInterval(() => {
  setAppBadge(getAppBadgeValue());
}, 1000);
if ("BeforeInstallPromptEvent" in window) {
  let installEvent = null;
  const onInstall = () => {
    installButton.disabled = true;
    installEvent = null;
    if (supportsAppBadge) {
      favicon.badge = false;
      setAppBadge = setAppBadgeNative;
    }
  };
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installEvent = event;
    installButton.disabled = false;
  });
  installButton.addEventListener("click", async () => {
    if (!installEvent) {
      return;
    }
    installEvent.prompt();
    const result = await installEvent.userChoice;
    if (result.outcome === "accepted") {
      onInstall();
    }
  });
  window.addEventListener("appinstalled", (event) => {
    onInstall();
  });
}

