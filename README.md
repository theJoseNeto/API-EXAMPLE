# Para rodar o projeto na sua máquina:
*Você deve configurar um banco de dados postgres em um container Docker ou na máquina host do projeto.*
<br/><br/>
Copie e cole no terminal ou gitbash o seguinte comando: 
<br/>
```
git init && git clone https://github.com/theJoseNeto/API-EXAMPLE.git && cd API-EXAMPLE 
```
<br/>

Agora vamos configurar as variáveis de ambiente. 

```
cat > .env # Isso abrirá um input para você digitar o seguinte: 
```

```
DB_NAME='nome do seu banco'
DB_UNAME='seu usuário' 
DB_PASSWORD='Sua senha forte'

# pressione Enter
# pressione ctrl + c
```
<br> 
Agora vamos rodar o projeto.

```
npm install && npm run dev 
```
Você deve obter esta saída : ```Listen```
<br/><br/><br/>

# Usando a aplicação com [insominia](https://insomnia.rest/download):

<br/>

## listando os usuários: 

GET: http://localhost:3000/users

<br/>

## Armazenando usuários:

POST: http://localhost:3000/users


<br/>

## listando endereço associado a um usuário: 

GET: http://localhost:3000/:user_id/addresses

<br/>

## Armazenando endereços associados a um usuário:

POST: http://localhost:3000/:user_id/addresses

## Armazenando e associando tecnogia/s a um usuário: 

POST: http://localhost:3000/:user_id/techs

## Listando tecnologias associadas a um ou mais usuários: 

GET: http://localhost/:user_id/tech 









