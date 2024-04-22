const userCtrl = {};

userCtrl.getUser = (req, res)=> res.send("Search user success");

userCtrl.createUser = (req, res)=> res.send("User created");

userCtrl.deleteUser = (req, res)=> res.send("User deleted");

module.exports = userCtrl;