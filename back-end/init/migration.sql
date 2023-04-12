USE informacoes;

CREATE TABLE
    tipo_info (
        tipo_id INT NOT NULL AUTO_INCREMENT,
        tipo_info VARCHAR(20) NOT NULL,
        PRIMARY KEY(tipo_id)
    ) ENGINE = INNODB;

INSERT INTO
    informacoes.tipo_info (tipo_info)
VALUES ('riscos'), ('cuidados');

CREATE TABLE
    faixa_etaria (
        faixa_etaria_id INT NOT NULL AUTO_INCREMENT,
        faixa_etaria VARCHAR(20) NOT NULL,
        PRIMARY KEY(faixa_etaria_id)
    ) ENGINE = INNODB;

INSERT INTO
    informacoes.faixa_etaria (faixa_etaria)
VALUES ('adolescente'), ('criança');

CREATE TABLE
    dados (
        dados_id INT NOT NULL AUTO_INCREMENT,
        img_url VARCHAR(100),
        titulo VARCHAR(50) NOT NULL,
        conteudo VARCHAR(400) NOT NULL,
        faixa_etaria_id INT NOT NULL,
        tipo_id INT NOT NULL,
        PRIMARY KEY(dados_id),
        FOREIGN KEY (faixa_etaria_id) REFERENCES faixa_etaria (faixa_etaria_id) ON DELETE CASCADE,
        FOREIGN KEY (tipo_id) REFERENCES tipo_info (tipo_id) ON DELETE CASCADE
    ) ENGINE = INNODB;

INSERT INTO
    informacoes.dados (
        titulo,
        conteudo,
        faixa_etaria_id,
        tipo_id
    )
VALUES (
        'Conteúdos nocivos',
        'Nessa fase esse tipo de conteúdo ainda preocupa.
        Durante a puberdade é natural que jovens tem curiosidade em pornografia, 
        mas não só . Os jovens ainda estão expostos 
        a máteriais que estimulam comportamento ruim , fake news, entre outros meios de desinformação ',
        1,
        1
    ), (
        'Grooming',
        'Termo em inglês utilizado para definir aliciamento de crianças e adolescentes por meio 
        da internet. Os aliciadores, tornam-se amigos do jovem e com meios sedutores, 
        conseguem descobrir dados e informações , podendo resultar em tŕafico infantil, 
        pornográfia infantil , entre outros tipos de assédio',
        1,
        1
    ), (
        'Sextorsão',
        'Podemos dizer que é uma prática vinculada ao sexting. Quando o sexting evolui de uma conversa picante para o envio de uma foto sensual
        , em alguns casos o criminoso. pode pedir dinheiro ,
         relação sexual ou mais fotos, sob ameaça de divulgar as fotos intímas.',
        1,
        1
    ), (
        'Cyberbullying',
        'O Cyberbullying é um tipo de agressão moral, em ambientes virtuais.
         O agressor usa comentários, fotos, videos , montagens para atormetar a vítima.
        Em alguns casos esa agressãopode virar física, como na prática de Happy Slaping , onde o agressor filma ,a agressão fisica.',
        1,
        1
    ), (
        'Conteúdos nocivos',
        'As crianças são expostas a muita informação na internet, 
        e nem todo conteúdo é adequado. 
        Exemplos de conteúdos nocivos são: pornográfia, material violento ou com 
        linguagens ofensivas e até videos que estimulam desobediência aos país 
        ( plataformas de compartilhamento de vídeos)',
        2,
        1
    ), (
        'Danos a equipamentos',
        'Crianças são curiosas e tendem a clicar em links e pop-ups
        chamativos, e essa é isso gera uma oportunidade para hackers e programas malicioso .
        Podendo assim, perder ou divulgar dados importantes e confidenciais ',
        2,
        1
    ), (
        'Dificuldade para se relacionar',
        'O mau uso e/ou uso excessivo da internet pode gerar na criança uma dificuldade de interação 
        com pessoas e para fazer amizades,
        pois o excesso de uso da web pode acabar alterando neles o valor das relações humanas',
        2,
        1
    ), (
        'Virais constrangedores',
        'Os Videos e fotos postados inocentemente podem viralizar,
         gerando uma exposição desnecessária
        e abrir precedentes para Web Bullying.
        Lembrando que é muito díficil remover um conteúdo viralizado.',
        2,
        1
    );

INSERT INTO
    informacoes.dados (
        img_url,
        titulo,
        conteudo,
        faixa_etaria_id,
        tipo_id
    )
VALUES (
        'https://icons8.com.br/icon/49958/rel%C3%B3gio-despertador',
        'Estabeleça Horários',
        'Determine horários para o acesso  à internet.
        O recomendável nessa idade são de até 3 horas.',
        1,
        2
    ), (
        'https://icons8.com.br/icon/9R5NOwlHzjAp/roteador',
        'Controle Parental',
        'Sistemas Operacionais oferecem serviço de controle parental,
         aonde você consegue definir qual conteúdo seu filho poderá acessar.',
        1,
        2
    ), (
        'https://icons8.com.br/icon/44504/fam%C3%ADlia-homem-mulher',
        'Negocie Espaço',
        'A confiança deve ser conquistada aos poucos, 
        jovens de 15 a 17 anos podem ter uma maior autonomia,
         mas a vigilância ainda é necessária',
        1,
        2
    ), (
        'https://icons8.com.br/icon/42928/monitor',
        'Previna',
        'Instale o computador de seu filho em um local que você
         possa ficar de olho mesmo que de longe.
         Portas sempre abertas.',
        1,
        2
    ), (
        'https://icons8.com.br/icon/VXlFzKL00ftK/cyberbullying',
        'Vigie Sinais',
        'Depressão, baixa autoestima, ansiedade... 
        podem ser sinais que seu filho esteja sofrendo cyberbullying.
         Se for o caso, denuncie.',
        1,
        2
    ), (
        'https://icons8.com.br/icon/80457/discurso',
        'Converse muito',
        'Por mais que pareça repetitivo, mas seja exemplo,
         orientar seu filho como agir é a melhor maneira de manter ele seguro.',
        1,
        2
    );