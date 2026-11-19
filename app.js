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
