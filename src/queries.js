const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailExist = "SELECT s FROM users s WHERE s.email = $1";
const addUser = 
    "INSERT INTO users (name, password, email, rol, absences, department_id) VALUES ($1, $2, $3, $4, $5, $6)";
const removeUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";

const getAbsences = "SELECT * FROM absences";
const getAbsenceById = "SELECT * FROM absences WHERE absence_id = $1";
const addAbsence = "INSERT INTO users (employee, start_day, end_day, status) VALUES ($1, $2, $3, $4)";

module.exports = {
    getUsers,
    getUserById,
    checkEmailExist,
    addUser,
    removeUser,
    updateUser,
    getAbsences,
    getAbsenceById,
    addAbsence,
};