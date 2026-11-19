app.get("/user", async (req, res) => {
  const user = await db.query("SELECT * FROM users WHERE id = " + req.query.id);
  res.json(user);
});
// added a comment
//hiiii kitty
