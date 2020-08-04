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
  "line": 22,
  "name": "Deletar cliente cadastrado com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;deletar-cliente-cadastrado-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@executar"
    }
  ]
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
  "duration": 29268202700,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_algum_cliente_cadastrado()"
});
formatter.result({
  "duration": 21903071300,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.deleto_esse_cliente()"
});
formatter.result({
  "duration": 1898005100,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.a_delecao_eh_efetuada_com_sucesso()"
});
formatter.result({
  "duration": 11570444500,
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat br.com.rodrigo.pages.HomePage.validarClienteExcluido(HomePage.java:23)\r\n\tat br.com.rodrigo.steps.CadastroSteps.a_delecao_eh_efetuada_com_sucesso(CadastroSteps.java:75)\r\n\tat ✽.Entao a delecao eh efetuada com sucesso(src/test/resources/features/cadastro.feature:26)\r\n",
  "status": "failed"
});
});