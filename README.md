# Cadastro Cliente
Essa API é utilizada para criação,deleção e edição de cliente

## Endpoints

### GET /clientes
Edpoint é responsavel por listar todos os clientes cadastrado.

#### Paramentros
Nenhum

#### Respostas 
##### OK! 200
Caso essa reposta aconteça, vai retornar a listagem de clientes.

Exemplo de resposta:
...
 [
	{
		"id": 2,
		"nome": "Jose da silva ",
		"cpf": "39767084029",
		"email": "jose.pereira@gmail.com",
		"telefone": "(78)9928-74582",
		"sexo": "M",
		"data_de_nascimento": "1990-04-14T00:00:00.000Z",
		"createdAt": "2022-08-27T04:08:06.000Z",
		"updatedAt": "2022-08-27T13:35:24.000Z"
	},
	{
		"id": 3,
		"nome": "katia Oliveira",
		"cpf": "52776728000",
		"email": "katia@gmail.com",
		"telefone": "(78)9975-52145",
		"sexo": "F",
		"data_de_nascimento": "1997-04-27T00:00:00.000Z",
		"createdAt": "2022-08-27T13:35:19.000Z",
		"updatedAt": "2022-08-27T13:35:19.000Z"
	}
]
...

##### Bad Request  400
Caso isso aconteça, ocorreu uma falha de autenticação.
Motivos: Cliente já cadastrado ou dados invalidos.


### POST /cliente/create
Edpoint é responsavel por fazer o processo de cadastro de cliente.

#### Paramentros
nome: Nome do cliente deve está sem número e caracteres.
cpf: CPF do cliente deve ser válido e não deve ser um CPF já cadastrado.
email: Email do cliente para cadastro e deve ter o formato padrão "nome@gmail.com".
telefone: Telefone de cadastro deve ter o formato "(00)0000-00000.
sexo: Sexo do usuario deve ser definido por "F" feminino ou "M" de masculino,
data_de_nascimento: Data de nascimento do usaurio no formato ISO "YYYY-MM-DD (ano-mês-data)",

Exemplo:
...
{
	"nome": "katia Oliveira",
	"cpf": "527.767.280-00",
	"email": "katia@gmail.com",
	"telefone": "(78)9975-52145",
	"sexo": "F",
	"data_de_nascimento": "1997-04-27T00:00:00.000Z"
}
...

#### Respostas 
##### OK! 200
Caso essa reposta aconteça, o cliente foi cadastrado com sucesso.

##### Bad Request  400
Caso isso aconteça, ocorreu uma falha de autenticação.
Motivos: Cliente já cadastrado ou dados invalidos.

##### Internal Server Error 500
Caso isso aconteça, ocorreu uma falha de servidor.

### POST /cliente/delete
Edpoint é responsavel por fazer o processo de deletar o cadastro de cliente.

#### Paramentros
cpf: CPF do cliente deve ser válido e deve ser um CPF cadastrado.

Exemplo:
...
{
	"cpf": "527.767.280-00",
}
...

#### Respostas 
##### OK! 200
Caso essa reposta aconteça, o cliente foi deletado com sucesso.

##### Bad Request  400
Caso isso aconteça, ocorreu uma falha de autenticação.
Motivos: Cliente não existe.

### POST /cliente/update
Edpoint é responsavel por fazer o processo de atualização de dados do cliente.

#### Paramentros
nome: Nome do cliente deve está sem número e caracteres.
cpf: CPF do cliente deve ser válido e não deve ser um CPF já cadastrado.
email: Email do cliente para cadastro e deve ter o formato padrão "nome@gmail.com".
telefone: Telefone de cadastro deve ter o formato "(00)0000-00000.
sexo: Sexo do usuario deve ser definido por "F" feminino ou "M" de masculino,
data_de_nascimento: Data de nascimento do usaurio no formato ISO "YYYY-MM-DD (ano-mês-data)",

Exemplo:
...
{
	"nome": "katia Oliveira",
	"cpf": "527.767.280-00",
	"email": "katia@gmail.com",
	"telefone": "(78)9975-52145",
	"sexo": "F",
	"data_de_nascimento": "1997-04-27T00:00:00.000Z"
}
...

#### Respostas 
##### OK! 200
Caso essa reposta aconteça, o cliente foi atualizado com sucesso.

##### Internal Server Error 500
Caso isso aconteça, ocorreu uma falha de servidor.

### GET /cliente/edit/:id
Edpoint é responsavel por fazer o processo de encontrar o cliente pelo id.

#### Paramentros
id: Id já cadastrado do usuario. 

#### Respostas 
##### OK! 200
Caso essa reposta aconteça, o cliente foi encotrado com sucesso.

##### Bad Request  400
Caso isso aconteça, ocorreu uma falha de autenticação.
Motivos: Cliente não encontrado.






