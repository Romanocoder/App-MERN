const { Router } = require("express");
const router = Router();
const { getUser, createUser, deleteUser } = require("../controllers/usersController");

router.route("/")
    .get(getUser)
    .post(createUser)
    
    
router.route("/:id")
    .delete(deleteUser)

module.exports = router;