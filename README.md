<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>
<p align="center">Projeto realizado durante o Bootcamp GoStack v10.0 da RocketSeat</p>


# Intstalação
### Pré-equisitos
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
#### Opicional
- [Reactotron](https://github.com/infinitered/reactotron)
---

### :floppy_disk: Base de dados
<p>Inicie os containers com as imagens do PostgreSQL e do Redis utilizando o docker:<p>

```bash
 # Inicia a maquina virtual do docker, se ainda não estiver iniciada
 docker-machine start
 
 # Cria um container do PostgreSQL
 docker run --name fastfeetdb -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
 
 # Cria um container do Redis
 docker run --name fastfeetredis -p 6379:6379 -d -t redis:alpine
```

***

### :postbox: Backend
<p>Dentro da pasta <b>backend</b>, execute:</p>

```bash
 # Instala todas as dependências
 yarn
```
<p>Antes dos próximos passos, é necssario criar e configurar o arquivo <i>.env</i> seguindo o <i>.env.example</i></p>

<p>Continuando... :</p>

```bash
 # Envia as migrations para o banco de dados
 yarn sequelize db:migrate
 
 # Adiciona um usuário administrador
 yarn sequelize db:seed:all
 
 # Inicia a aplicação
 yarn dev
 
 # Inicia a fila de Background-Jobs
 yarn queue
```

***

### :computer: Web
<p>Dentro da pasta <b>web</b>, execute:</p>

```bash
 # Instala todas as dependências
 yarn
 
 # Inicia a aplicação ReactJs
 yarn start
```

***

### :iphone: Mobile (Android)
<p>Dentro da pasta <b>mobile</b>, execute:</p>

```bash
 # Instala todas as dependências
 yarn
 ```
 
 <p>Para que a aplicação reconheça os serviçoes externos (como o backend, o reactotron e até mesmo o próprio bundle),
 faça os seguintes redirecionamentos:<p>
 
 ```bash
 # Redireciona a porta do backend
 adb reverse tcp:3333 tcp:3333
 
  # Redireciona a porta do Reactotron
 adb reverse tcp:9090 tcp:9090
 
   # Redireciona a porta do bundle
 adb reverse tcp:8081 tcp:8081
 ```
 
 <p>Por fim, instale a aplicação:</p>

 ```bash
 # Instala a aplicação React-Native
 yarn react-native run-android
```

*****

<h3 align="center">Por <a href="https://github.com/HCSHeber">Heber Chaves</a> :)</h3>
