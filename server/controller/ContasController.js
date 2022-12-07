import db from '../db'

class ContasController {
    inserContas(req, resp) {
        const {
            tipo,
            data_pagamento,
            valor,
            observacao
        } = req.body;

        if (!tipo || !data || !valorAproximado, observacao) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO colaboradores (nome, cpf, valorAproximado, observacao)
        VALUES (?, ?, ?, ?, ?, ?)
        `
        db.query(sql, [nome, cpf, valorAproximado, observacao], function(err, result) {
            if (err) throw err;

            return res.send(result)
        })

    }
}

module.exports = new ContasController()