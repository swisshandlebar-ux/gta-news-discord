const fetch = require("node-fetch");

const WEBHOOK_URL = "https://discord.com/api/webhooks/1485670751645339899/ioeLXO7IDw8zRIdEgQH4HcNbQnUnKM3zU-JvQrfhFjB5s8hFHm-ktHOkpTzcxOSgYfmE";

async function run() {
  const res = await fetch("https://www.rockstargames.com/newswire");
  const text = await res.text();

  if (text.includes("GTA Online")) {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: "🚗 Nouvelle actu GTA Online disponible !\nhttps://www.rockstargames.com/newswire"
      })
    });
  }
}

run();
