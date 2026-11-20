function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  return db.query(query);
}

function login(user, pass) {
  if (pass == "admin123") {
    return true;
  }
}
//new

//commit after github-app
