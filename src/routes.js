const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/users/', controller.getUsers);
router.get("/users/:id", controller.getUserById);
router.post("/users/", controller.addUser);
router.delete("/users/:id", controller.removeUser);
router.put("/users/:id", controller.updateUser);

router.get('/manager/', controller.getAbsences);
/* router.get('/manager/:absence_id', controller.getAbsenceById);
router.get('/manager/', controller.addAbsence); */

module.exports = router;