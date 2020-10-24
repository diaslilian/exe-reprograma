<h1 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/94995053-ff717100-0571-11eb-87d6-3be5205ed70b.png" width="20%" ></img>
</h1>
    <br>

![servidor-serie](https://user-images.githubusercontent.com/47895394/97087409-6679c700-1600-11eb-899a-a1fe3515e4d0.png)
<h4>
O projeto consiste em um CRUD completo.
</h4>
<br>

## Instruções



* Tema.

API para controlar as séries que queremos assistir e poder cadastrar séries, cada uma com inúmeras temporadas e cada temporada com uma lista de episódios.

---

### Contratos que deverão ser entregues

| Verbo        | Recurso                | Descrição                             |
| ------------ | ---------------------- | ------------------------------------- |
| GET          | `/series`              | Retornar todas as séries              |
| GET          | `/series/:id`          | Retornar apenas uma série específica  |
| POST         | `/series`              | Cadastrar nova série                  |
| PUT          | `/series/:id`          | Atualizar uma série específica        |
| DELETE       | `/series/:id`          | Deletar uma série específica          |
| PATCH        | `/series/:id/liked`    | Atualizar se gostou da série ou não   |

---

---

### Contratos para ir ao infinito e além

Nossa API de séries contém várias temporadas e essas contém vários episódios. Podemos criar mais algumas rotas para trabalhar com essas temporadas e episódios:

| Verbo        | Recurso                | Descrição                             |
| ------------ | ---------------------- | ------------------------------------- |
| POST         | `/series/:id/season/:seasonId/episode` | Cadastrar novo episódio na temporada, onde :id é o id da série e :seasonId é o id da temporada |
| POST         | `/series/:id/season`                   | Cadastrar nova temporada na série, onde o :id é o id da série |
| DELETE       | `/series/:id/season/:seasonId`         | Deletar uma temporada específica, onde :id é o id da série e :seasonId é o id da temporada |
| DELETE       | `/series/:id/season/:seasonId/episode/:episodeId` | Deletar um episódio específico na temporada, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio |
| PATCH        | `/series/:id/season/:seasonId/episode/:episodeId/watched` | Atualizar se o episódio foi assistido ou não, onde :id é o id da série, :seasonId é o id da temporada e :episodeId é o id do episódio |

---


## :rocket: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Nodemon](http://nodemon.io)

## :information_source: COMO USAR:

Para clonar e executar a aplicação, precisa ter o [Git](https://git-scm.com) e [Node.js v12.18.3](https://nodejs.org/en/) instalados. 


### **Clonar o repositório**

```bash
# Clonar o repositório
$ git clone https://github.com/diaslilian/exe-reprograma

# Entrar na pasta do repositório
$ cd S11Exercicio

# Instalar as dependências
$ npm install

# Executar o servidor
$ nodemon server

```


### :eyes: **Visualizar no navegador**

Servidor executando: `http://localhost:3000`

<br><br>

<hr>

Created by Lilian Dias :wave: [Hi-5!](https://www.linkedin.com/in/dias-lilian/)