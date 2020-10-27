<h1 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/94995053-ff717100-0571-11eb-87d6-3be5205ed70b.png" width="20%" ></img>
</h1>

<h3 align="center">Resumo sobre banco de dados e mongodb.</h3>

<br>

## :pushpin: Tema:

<h1 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/97368043-e4500380-1888-11eb-964c-22eb14d49786.jpg" width="50%"></img> 
</h1>

<h3>

- ### O que é banco de dados?

O banco de dados é a organização e armazenagem de informações sobre um domínio específico. De forma mais simples, é o agrupamento de dados que tratam do mesmo assunto, e que precisam ser armazenados para segurança ou conferência futura.

É comum que empresas tenham diversas informações que precisam ser organizadas e disponibilizadas dentro do negócio para que sejam consultadas posteriormente pela equipe e pela gerência.

Por isso, é interessante ter um sistema de gerenciamento de banco de dados, SGBD, para conseguir manipular as informações e tornar a rotina da empresa muito mais simples.

Hoje, existem diversos tipos de SGBDs, e cada um é adequado para uma necessidade dos clientes. São os mais comuns: Oracle, DB2, MySQL, SQL Server, PostgreSQL e outros.

> Pesquisa feita por - [rockcontent](https://rockcontent.com/br/blog/banco-de-dados/)

<br>

<hr>
<br>

<h1 align="center">
    <img src="https://arquivo.devmedia.com.br/marketing/img/artigo-nosql-hospedando-bancos-de-dados-mongodb-31056.png" width="50%"></img> 
</h1>

- ### O que é MongoDB?

O MongoDB é um banco de dados orientado a documentos (document database) no formato JSON, ou seja, diferente de um banco de dados relacional, ele não possui como restrição a necessidade de ter as tabelas e colunas criadas previamente, permitindo que um documento represente toda a informação necessária, com todos os dados que você queira, no formato de um JSON.

Assim como em um JSON utilizado em comunicações HTTP entre aplicações, no documento do MongoDB podem existir valores simples, como números, strings e datas, assim como também podem existir listas de valores e listas de objetos.

Os documentos são agrupados em collections. E um conjunto de collections forma um database (banco de dados). O MongoDB permite que seu database seja replicado para outros servidores, aumentando assim a disponibilidade de suas informações, sendo esse recurso conhecido por replica set. Dessa forma, cada servidor terá uma cópia dos dados.

> Pesquisa feita por - [dev.ninja](http://desenvolvedor.ninja/mongodb-o-que-e-e-para-que-serve/)

<br>

## :information_source: Rodar o MongoDB no Linux:

- Instalar o mongo: [Link](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-pt)

```bash

# verifica o status do serviço MongoDB:
$ sudo systemctl status mongod

# Parar o serviço
$ sudo systemctl stop mongod

# Iniciar o serviço quando ele estiver parado
$ sudo systemctl start mongod

# Reiniciar o servidor quando ele já estiver executando
$ sudo systemctl restart mongod

# Entrar no mongo
$ mongo

# Ver banco de dados
> show dbs

# Comando para criar um banco de dados novo:
> use <nomeBanco>

# Criar collection
> db.createCollection("NomeDaCollection")

# Listar todas as collections:
> show collections

# Inserir objetos na collection
> db.NomeDaCollection.insertOne({"nome":"Lilian", "idade":25, "signo":"gemeos"})

# Comando para buscar todos os registros de uma collection:
> db.NomeDaCollection.find()

# Procurar objeto criados mais amigavel
> db.<NomeDaCollection>.find().pretty()

# Comando que retorna apenas um único registro:
> db.<NomeDaCollection>.findOne()

# Comando para incluir um registro dentro de uma collection:
> db.<NomeDaCollection>.insertOne({<Atributos>})

# Comando para incluir vários registros de uma única vez:
> db.<NomeDaCollection>.insertMany([ { // objetos a serem inseridos // } ])

# Excluir todo o banco de dados (nao recomendado)
> db.dropDatabase()

```

<br>
<hr>

Created by Lilian Dias :wave: [Hi-5!](https://www.linkedin.com/in/dias-lilian/)
