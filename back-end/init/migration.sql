USE informacoes;

CREATE TABLE
    tipo_info (
        tipo_id INT NOT NULL AUTO_INCREMENT,
        tipo_info VARCHAR(20) NOT NULL,
        PRIMARY KEY(tipo_id)
    ) ENGINE = INNODB;

CREATE TABLE
    faixa_etaria (
        faixa_etaria_id INT NOT NULL AUTO_INCREMENT,
        faixa_etaria VARCHAR(20) NOT NULL,
        PRIMARY KEY(faixa_etaria_id)
    ) ENGINE = INNODB;

CREATE TABLE
    dados (
        dados_id INT NOT NULL AUTO_INCREMENT,
        img_url VARCHAR(100),
        titulo VARCHAR(30) NOT NULL,
        conteudo VARCHAR(255) NOT NULL,
        faixa_etaria_id INT NOT NULL,
        tipo_id INT NOT NULL,
        PRIMARY KEY(dados_id),
        FOREIGN KEY (faixa_etaria_id) REFERENCES faixa_etaria (faixa_etaria_id) ON DELETE CASCADE,
        FOREIGN KEY (tipo_id) REFERENCES tipo_info (tipo_id) ON DELETE CASCADE
    ) ENGINE = INNODB;