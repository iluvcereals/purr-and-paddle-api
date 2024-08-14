const { users } = require("../userData");

const loginUser = (req, res) => {
  const { usernameAttempt, passwordAttempt } = req.body;

  const user = users.find(
    ({ username, password }) =>
      username === usernameAttempt && password === passwordAttempt,
  );

  if (!user) {
    return res
      .status(401)
      .json({ msg: "Account doesn't exist or credentials are incorrect" });
  }

  res.status(200).json({ username: user.username, msg: "welcome back!" });
};

const createUser = (req, res) => {
  const { usernameAttempt, passwordAttempt } = req.body;
  const existingUser = users.find(
    ({ username, password }) =>
      username === usernameAttempt && password === passwordAttempt,
  );
  if (existingUser) {
    return res.status(400).json({ msg: "Account already exists" });
  }

  const newUser = {
    id: users.length + 1,
    username: usernameAttempt,
    password: passwordAttempt,
  };
  users.push(newUser);

  res.status(201).json({ res: users });
};

module.exports = { loginUser, createUser };
