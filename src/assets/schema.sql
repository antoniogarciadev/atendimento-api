CREATE DATABASE loja;
USE loja;
CREATE TABLE IF NOT EXISTS tendimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE,
    service VARCHAR(100),
    cliente VARCHAR(100),
    status ENUM('ativo', 'realizado', 'cancelado')
);