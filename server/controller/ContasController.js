const db = require('../db')

class ContasController {
    inserContas(req, res) {
        const {
            tipo,
            data_pagamento,
            valor,
            observacao
        } = req.body;

        if (!tipo || !data_pagamento || !valor) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const sql = `
        INSERT INTO contas_pagas (tipo, data_pagamento, valor, observacao)
        VALUES (?, ?, ?, ?)
        `
        db.query(sql, [tipo, data_pagamento, valor, observacao], function(err, result) {
            if (err) throw err;

            return res.json({
                result: 'foi' 
            })
        })

    }

    getContas(req, res) {

        const sql = `
        SELECT tipo
        FROM contas_pagas
        `
        db.query(sql, function(err, result) {
            if (err) throw err;
  
            return res.send(result)
        }) 
    }

    inserHistoricoContas(req, res) {
        const {
            tipo,
            valor,
        } = req.body;

        if (!tipo || !valor) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const d = new Date()
        const datestring =  d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
        console.log(datestring)
        const data = datestring
        const categoria = 'conta'

        const sql = `
        INSERT INTO historico_contas (tipo, data, valor, categoria)
        VALUES (?, ?, ?, ?)
        `

        const sqlHistorico = ` 
        INSERT INTO historico (tipo, data, valor, categoria)
        VALUES (?, ?, ?, ?)
        `

        db.query(sqlHistorico, [tipo, data, valor, categoria], function(err, result) {
            if (err) throw err;            
            db.query(sql, [tipo, data, valor, categoria], function(err, result) {
                if (err) throw err;
            
                return res.json({
                    result: 'foi' 
                })
            })
        })
    }

    getContasResumido(req, res) {
        const sql = `
        SELECT data, valor, tipo
        FROM historico_contas
        `
        db.query(sql, function(err, result) {
            if (err) throw err;
  
            return res.send(result)
        })
    }
}

module.exports = new ContasController()