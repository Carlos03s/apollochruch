import db from '../db'

class ColaboradoresController {
    insertColaborador(req, resp) {
        const {
            nome,
            cpf,
            endereco,
            email,
            telefone,
            funcao
        } = req.body;

        if (!nome || !cpf || !endereco || !email || !telefone) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO colaboradores (nome, cpf, endereco, email, telefone, funcao)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, cpf, endereco, email, telefone, funcao], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })

    }
}

module.exports = new ColaboradoresController()