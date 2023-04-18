SET search_path TO informacoes;

INSERT INTO
    tipo_info (tipo_info)
VALUES ('riscos'), ('cuidados');

INSERT INTO
    faixa_etaria (faixa_etaria)
VALUES ('adolescente'), ('criança');

INSERT INTO
    dados(
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
        a máteriais que estimulam comportamento ruim, fake news, entre outros meios de desinformação ',
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
    dados (
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


INSERT INTO
    dados (
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
        O recomendável nessa idade são de 1 a 2 horas , com supervisão.',
        2,
        2
    ), (
        'https://icons8.com.br/icon/94518/conversa',
        'Converse  e Ensine',
        'O dialogo é a arma mais eficiente nesse tipo de combate. 
         Seja exemplo, ensine seu filho,
         tenha um dialógo aberto e tenha uma relação de confiança.',
        2,
        2
    ), (
        'https://icons8.com.br/icon/3OKbBNcUQqLh/pesquisar',
        'Fique de Olho',
        'Não deixe seu filho acessar a internet sem nenhuma supervisão. 
        Esteja sempre ciente sobre o que ele consome ou posta na rede.',
        2,
        2
    ), (
        'https://icons8.com.br/icon/44504/fam%C3%ADlia-homem-mulher',
        'Navegue com ele',
        'Reserve algum momento do seu dia para acessar a internet com o seu filho,
         e orienta-lo a acessar um conteúdo saudavel e proveitoso.',
        2,
        2
    ), (
        'https://icons8.com.br/icon/41992/spam',
        'Tenha cuidado',
        'Não poste fotos dos seus filhos nus, seminus na internet. 
        Essas fotos podem cair em redes de de exploração sexual comercial.',
        2,
        2
    ), (
        'https://icons8.com.br/icon/81744/dia-parcialmente-nublado',
        'Desconectar',
        'Incentive seu filho a praticar atividades ao ar livre 
        e a manter contato com outras crianças.',
        2,
        2
    );