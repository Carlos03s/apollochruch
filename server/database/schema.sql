CREATE DATABASE IF NOT EXISTS `apollo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `apollo`;

CREATE TABLE IF NOT EXISTS `doadores` (
  `id` varchar(255) UNIQUE NOT NULL,
  `nome` varchar(120) UNIQUE NOT NULL,
  `cpf` varchar(120),
  `endereco` varchar(255) NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
  `telefone` varchar(100) UNIQUE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;