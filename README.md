# urban-map-api

Api do Mapa de Acessibilidade Urbana.

### Pré-requisitos

- [Node.js](https://nodejs.org) (versão 12 ou maior)
- [PostgreSQL](https://www.postgresql.org/) (versão 9 ou maior)
- [pgAdmin](https://www.pgadmin.org/) (versão 4 ou maior)

### Ambientação
Crie uma cópia do arquivo `.env.default` com o nome `.env` na raíz do projeto. Em seguida, é necessário configurar corretamente as variáveis de ambiente no seu novo arquivo `.env`. As variáveis não são comitadas no repositório por questões de segurança. Entre em contato com o administrador do projeto para demais dúvidas.

### Banco de dados
É necessário tem um servidor de PostgreSQL rodando em sua máquina. Normalmente, esse servidor já é configurado automaticamente no momento da instalação.

Em seguida, conecte o pgAdmin ao servidor do PostgreSQL criado. Com isso, será possível criar um banco de dados que a aplicação possa usar.

Com o servidor do banco de dados configurado corretamente, insira no arquivo `.env` os dados referentes a conexão que será feita pela aplicação
```
PGDATABASE=[NOME-DO-BANCO]
PGUSER=[NOME-DO-USUARIO]
PGPASSWORD=[SENHA-DO-USUARIO]
PGHOST=[IP-DO-SERVIDOR]
PGPORT=[PORTA-DO-SERVIDOR]
```

### Integrações
Esta aplicação tem integração com o Facebook e o Google. Portanto, será necessário configurar corretamente o arquivo `.env` com as chaves de aplicação correspondente de cada plataforma. Além disso, peça ao administrador para ser adicionado nos projetos do Facebook e do Google.


### Desenvolvimento

Para executar aplicação em modo de desenvolvimento, primeiro execute o comando de instalação de dependências:
```
yarn
```


Enfim, rode a aplicação com o comando:
```
yarn dev
```
