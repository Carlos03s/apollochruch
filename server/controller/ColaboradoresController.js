const db = require('../db')

class ColaboradoresController {
    insertColaborador(req, res) {
        const {
            nome,
            cpf,
            email,
            telefone,
            endereco,
            funcao
        } = req.body;

        if (!nome || !cpf || !email || !telefone || !endereco || !funcao) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO colaboradores (nome, cpf, email, telefone, funcao, endereco)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, cpf, email, telefone, funcao, endereco], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })
    }

    getColaboradores(req, res) {

        const {
            order
        } = req.params

        const sqlAsc = `
        SELECT nome, cpf, email, telefone, funcao, endereco, id
        FROM colaboradores
        ORDER BY nome ASC
        `

        const sqlDesc = `
        SELECT nome, cpf, email, telefone, funcao, endereco, id
        FROM colaboradores
        ORDER BY nome DESC
        `

        if (order == 'asc') {
            db.query(sqlAsc, function(err, result) {
                if (err) throw err;
                return res.send(result)
            })
        } else {
            db.query(sqlDesc, function(err, result) {
                if (err) throw err;
                return res.send(result)
            })
        }

    }

    deleteColaboradores(req, res) {

        const {
            id
        } = req.body;

        if (!id) {
            return res.status(404).send('err')
        }

        const sql = `
        DELETE FROM colaboradores
        WHERE id=?
        `

        db.query(sql, [id], function(err, result) {
            if (err) throw err;
            return res.send(result); 
        })
    }
}

module.exports = new ColaboradoresController()