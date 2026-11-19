app.get("/user", async (req, res) => {
  const user = await db.query("SELECT * FROM users WHERE id = " + req.query.id);
  res.json(user);
});
// added a comment
//hiiii kitty
//adding openrouter api..
//4th commit
//5th commit
//model problem solving
//Review ready, posting comment...
//Comment posted!
//2.Review ready, posting comment... Comment posted!
app.post("/login", (req, res) => {
  const password = "admin123";
  if (req.body.pass == password) res.send("ok");
});

