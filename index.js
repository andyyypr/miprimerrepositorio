import express from "express";

const app = express();

app.get("/api/cantidadHabitaciones", (req, res) => {
  res.json({ cantidad: "5" });
});

app.listen(3000);
