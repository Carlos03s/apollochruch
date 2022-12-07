const { Router } = require('express');

const router = Router();

const DoadoresControllers = require('./controller/DoadoresControllers');
const ColaboradoresController = require('./controller/ColaboradoresController');
const ContasController = require('./controller/ContasController');
const CommonController = require('./controller/CommonController');

// common 
router.get('/get-doacao-conta', CommonController.getDoadorEContas);
router.get('/get-doacao-conta-detalhado', CommonController.getDoadorEContasDetalhado);
router.get('/sum-contas-doacao', CommonController.sumDoadorAndContas);


// ---------- doacao ---------
router.post('/insert-doacao', DoadoresControllers.insertDoacao);
router.get('/get-doador/:order', DoadoresControllers.getDoador);
router.post('/insert-historico', DoadoresControllers.insertHistoricoDoacoes);
router.get('/get-doacoes-resumido', DoadoresControllers.getDoacoesResumido);
router.delete('/del-doador', DoadoresControllers.deleteDoador);
router.get('/get-doador-nome', DoadoresControllers.getDoadorName);

// ---------- contas ---------
router.post('/insert-contas', ContasController.inserContas);
router.get('/get-contas', ContasController.getContas);
router.post('/insert-historico-contas', ContasController.inserHistoricoContas);
router.get('/get-contas-resumido', ContasController.getContasResumido);

// ---------- colaborador ---------
router.post('/insert-colaborador', ColaboradoresController.insertColaborador);
router.get('/get-colaborador/:order', ColaboradoresController.getColaboradores);
router.delete('/del-colaborador', ColaboradoresController.deleteColaboradores);


module.exports = router;