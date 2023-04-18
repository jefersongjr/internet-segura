CREATE SCHEMA informacoes;

SET search_path TO informacoes;

CREATE TABLE tipo_info (
tipo_id SERIAL PRIMARY KEY,
tipo_info VARCHAR(20) NOT NULL
);

CREATE TABLE faixa_etaria (
faixa_etaria_id SERIAL PRIMARY KEY,
faixa_etaria VARCHAR(20) NOT NULL
);

CREATE TABLE dados (
dados_id SERIAL PRIMARY KEY,
img_url VARCHAR(100),
titulo VARCHAR(50) NOT NULL,
conteudo VARCHAR(400) NOT NULL,
faixa_etaria_id INT NOT NULL REFERENCES faixa_etaria(faixa_etaria_id) ON DELETE CASCADE,
tipo_id INT NOT NULL REFERENCES tipo_info(tipo_id) ON DELETE CASCADE
);