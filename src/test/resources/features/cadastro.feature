# language: pt

Funcionalidade: gerenciar cadastro de clientes
	Como um usuario
	Eu quero gerenciar o cadastro dos clientes
	Para poder consulta-los quando necessario
	
Cenario: Cadastrar cliente com sucesso
	Dado que estou no app
	Quando realizo o cadastro basico de um cliente
	Entao o cadastro eh realizado com sucesso
	
Cenario: Alterar cadastro de cliente com sucesso
	Dado que estou no app
	E seleciono algum cliente cadastrado
	Quando realizo alguma alteração nos dados cadastrais desse cliente
	Entao a alteracao eh efetuada com sucesso
	
Cenario: Deletar cliente cadastrado com sucesso
	Dado que estou no app
	E seleciono algum cliente cadastrado
	Quando deleto esse cliente
	Entao a delecao eh efetuada com sucesso