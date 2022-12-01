import db from '../db'

class ContasController {
    inserContas(req, resp) {
        const {
            tipo,
            data,
            valorAproximado
        } = req.body;

        if (!tipo || !data || !valorAproximado) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO colaboradores (nome, cpf, valorAproximado)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, cpf, valorAproximado], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })

    }
}

module.exports = new ContasController()