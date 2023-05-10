const pool = require('../db')
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addUser = (req, res) => {
    const { name, password, email, rol, absences, department_id } = req.body;
    pool.query(queries.checkEmailExist, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
            return;
        }

        pool.query(queries.addUser,
            [name, password, email, rol, absences, department_id],
            (error, results) => {
            if (error) throw error;
            res.status(201).send("User created successfully");
        });
    });
}

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database, could not remove");
            return;
        }
        
        pool.query(queries.removeUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student removed successfully");
        });
    });
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database, could not remove");
            return;
        }

        pool.query(queries.updateUser, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student updated successfully");
        })
    });
}

const getAbsences = (req, res) => {
    pool.query(queries.getAbsences, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

/* const getAbsenceById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAbsenceById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addAbsence = (req, res) => {
    const { employee, start_day, end_day, status } = req.body;
    pool.query(queries.getAbsenceById, [id], (error, results) => {
        if (results.rows.length) {
            res.send("Absence already exists.");
            return;
        }

        pool.query(queries.addAbsence,
            [ employee, start_day, end_day, status ],
            (error, results) => {
            if (error) throw error;
            res.status(201).send("Absence created successfully");
        });
    });
} */

module.exports = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser,
    getAbsences,
    getAbsenceById,
    addAbsence,
}