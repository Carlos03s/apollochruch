import db from '../db'

class DoadoresControllers {
    insertDoacao(req, resp) {
        const {
            nome,
            cpf,
            email,
            telefone
        } = req.body;

        if (!nome || !cpf || !email || !telefone) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO doadores (nome, email, telefone)
        VALUES (?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, email, telefone], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })

    }
}

module.exports = new DoadoresControllers()