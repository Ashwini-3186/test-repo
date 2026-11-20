function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  return db.query(query);
}

function login(user, pass) {
  if (pass == "admin1234") {
    return true;
  }
}
//commit after github-app
