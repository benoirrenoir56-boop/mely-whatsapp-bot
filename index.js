const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Melly WhatsApp Bot est en ligne 🚀");
});

app.post("/webhook", (req, res) => {
  console.log("Message reçu :", JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
