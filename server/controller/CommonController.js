const db = require('../db')

class CommonController {
    getDoadorEContas(req, res) {

        const sql = `
        SELECT data, valor, categoria, valorDoacao, dataDoacao
        FROM historico ORDER BY id DESC
        `

        db.query(sql, function(err, result) {
            if (err) throw err;
            const contasResult = result;
            return res.send(contasResult); 
        })
    } 

    getDoadorEContasDetalhado (req, res) {
 
        const sql = `
        SELECT tipo, data, valor, categoria, valorDoacao, nomeDoador, dataDoacao
        FROM historico ORDER BY id DESC
        `

        db.query(sql, function(err, result) {
            if (err) throw err;
            const contasResult = result;
            return res.send(contasResult); 
        })
    } 

    sumDoadorAndContas(req, res) {
        const sql = `
        SELECT sum(valor) as valor, data
        FROM historico_contas
        `

        const sqlDoacao = `
        SELECT SUM(valor) as valor, data
        FROM historico_doacao
        `
 
        db.query(sql, function(err, result) {
            if (err) throw err;
            const contasResult = result[0];

            db.query(sqlDoacao, function(err, result) { 
                if (err) throw err;
                const doacaoResult = result[0];
                const total = doacaoResult.valor - contasResult.valor
                // return res.send(doacaoResult)
                return res.json({
                    contas: contasResult,
                    doacao: doacaoResult,
                    total
                }); 
            })
        })
    }
}

module.exports = new CommonController()