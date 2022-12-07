const db = require('../db')
const { v4: uuidv4 } = require('uuid');

class DoadoresControllers {
    insertDoacao(req, res) {
        const {
            nome,
            cpf,
            email,
            telefone
        } = req.body;

        if (!nome || !cpf || !email || !telefone) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const id = uuidv4(cpf);

        const sql = `
        INSERT INTO doadores (id, nome, email, telefone, cpf)
        VALUES (?, ?, ?, ?, ?)
        `
        db.query(sql, [id, nome, email, telefone, cpf], function(err, result) {
            if (err) throw err;
  
            return res.json({
                result: 'foi'
            })
        })

    }

    getDoadorName(req, res) {

        const sql = `
        SELECT *
        FROM doadores
        `

            db.query(sql, function(err, result) {
                if (err) throw err;
      
                return res.send(result)
            })

    }


    getDoador(req, res) {

        const {
            order
        } = req.params

        const sqlAsc = `
        SELECT *
        FROM doadores
        ORDER BY nome ASC
        `

        const sqlDesc = `
        SELECT *
        FROM doadores
        ORDER BY nome DESC
        `

        if (order == 'asc') {
            db.query(sqlAsc, function(err, result) {
                if (err) throw err;
      
                return res.send(result)
            })
        } else  (
            db.query(sqlDesc, function(err, result) {
                if (err) throw err;
      
                return res.send(result)
            })
        )


    }

    insertHistoricoDoacoes(req, res) {
        const {
            nome,
            valor,
        } = req.body;

        if (!nome || !valor) {
            return res.status(404).send("Preencha todos os campos.")
        }

        const d = new Date()
        const datestring =  d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
        console.log(datestring)
        const data = datestring
        const categoria = 'doacao'
        

        const sql = ` 
        INSERT INTO historico_doacao (nome, data, valor, categoria)
        VALUES (?, ?, ?, ?)
        `
        const sqlHistorico = ` 
        INSERT INTO historico (nomeDoador, dataDoacao, valorDoacao, categoria)
        VALUES (?, ?, ?, ?)
        `

        db.query(sqlHistorico, [nome, data, valor, categoria], function(err, result) {
            if (err) throw err;  
            db.query(sql, [nome, data, valor, categoria], function(err, result) {
                if (err) throw err;
      
                return res.json({
                    result: 'foi'
                })
            }) 
        }) 

    }

    getDoacoesResumido(req, res) {
        const sql = `
        SELECT data, valor, nome
        FROM historico_doacao
        `
        db.query(sql, function(err, result) {
            if (err) throw err;
  
            return res.send(result)
        })
    }


    deleteDoador(req, res) {

        const {
            id
        } = req.body;

        if (!id ) {
            return res.status(404).send('err')
        }

        const sql = `
        DELETE FROM doadores
        WHERE id=?
        `

        db.query(sql, [id], function(err, result) {
            if (err) throw err;
            return res.send(result); 
        })
    }

}  

module.exports = new DoadoresControllers()