import db from '../db'

class ColaboradoresController {
    insertColaborador(req, resp) {
        const {
            nome,
            cpf,
            email,
            telefone,
            diaDisponivel,
            funcao
        } = req.body;

        if (!nome || !cpf || !endereco || !email || !telefone || !diaDisponivel) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO colaboradores (nome, cpf, endereco, email, telefone, funcao, diaDisponivel)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, cpf, endereco, email, telefone, funcao, diaDisponivel], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })

    }
}

module.exports = new ColaboradoresController()