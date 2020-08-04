$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastro.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "gerenciar cadastro de clientes",
  "description": "Como um usuario\nEu quero gerenciar o cadastro dos clientes\nPara poder consulta-los quando necessario",
  "id": "gerenciar-cadastro-de-clientes",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 9,
  "name": "Cadastrar cliente com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;cadastrar-cliente-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 10,
  "name": "que estou no app",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "realizo o cadastro basico de um cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o cadastro eh realizado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.que_estou_no_app()"
});
formatter.result({
  "duration": 38665788600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.realizo_o_cadastro_basico_de_um_cliente()"
});
formatter.result({
  "duration": 19347786000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.o_cadastro_eh_realizado_com_sucesso()"
});
formatter.result({
  "duration": 1296364900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Alterar cadastro de cliente com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;alterar-cadastro-de-cliente-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 16,
  "name": "que estou no app",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "seleciono algum cliente cadastrado",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "realizo alguma alteração nos dados cadastrais desse cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "a alteracao eh efetuada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.que_estou_no_app()"
});
formatter.result({
  "duration": 28124010800,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_algum_cliente_cadastrado()"
});
formatter.result({
  "duration": 22548632700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.realizo_alguma_alteração_nos_dados_cadastrais_desse_cliente()"
});
formatter.result({
  "duration": 3247856300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_alteracao_eh_efetuada_com_sucesso()"
});
formatter.result({
  "duration": 1664036500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Deletar cliente cadastrado com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;deletar-cliente-cadastrado-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 23,
  "name": "que estou no app",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "seleciono algum cliente cadastrado",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "deleto esse cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "a delecao eh efetuada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.que_estou_no_app()"
});
formatter.result({
  "duration": 27774844100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_algum_cliente_cadastrado()"
});
formatter.result({
  "duration": 23180972400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.deleto_esse_cliente()"
});
formatter.result({
  "duration": 1893324500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_delecao_eh_efetuada_com_sucesso()"
});
formatter.result({
  "duration": 12088963900,
  "status": "passed"
});
});