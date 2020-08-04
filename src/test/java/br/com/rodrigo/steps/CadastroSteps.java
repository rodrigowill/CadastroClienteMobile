package br.com.rodrigo.steps;
import br.com.rodrigo.core.DriverFactory;
import br.com.rodrigo.pages.CadastroPage;
import br.com.rodrigo.pages.HomePage;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CadastroSteps {
	
	HomePage homePage = new HomePage();
	CadastroPage cadastroPage = new CadastroPage();	
	
	@Dado("^que estou no app$")
	public void que_estou_no_app() throws Throwable {
		DriverFactory.getDriver();
	}

	@Quando("^realizo o cadastro basico de um cliente$")
	public void realizo_o_cadastro_basico_de_um_cliente() throws Throwable {
		homePage.clicarAdicionar();
		homePage.clicarCadastrarNovo();
		cadastroPage.escreverNome();
		cadastroPage.escreverRG();
		cadastroPage.escreverCPF();
		cadastroPage.escreverDataNascimento();
		cadastroPage.escreverEndereco();
		cadastroPage.escreverNroEndereco();
		cadastroPage.escreverBairro();
		cadastroPage.escreverCEP();
		cadastroPage.escreverCidade();
		cadastroPage.selecionarEstado();
		cadastroPage.escreverTel1();
		cadastroPage.escreverTel2();
		cadastroPage.escreverEmail();
		cadastroPage.clicarBotaoSalvar();
	}

	@Entao("^o cadastro eh realizado com sucesso$")
	public void o_cadastro_eh_realizado_com_sucesso() throws Throwable {
		cadastroPage.validarMensagemCadastro();
		DriverFactory.killDriver();
	}

	@Dado("^seleciono algum cliente cadastrado$")
	public void seleciono_algum_cliente_cadastrado() throws Throwable {
		realizo_o_cadastro_basico_de_um_cliente();
		cadastroPage.clicarOKNaMensagemDeSucesso();
		cadastroPage.voltarTela();
		homePage.clicarClienteCadastrado();
	}

	@Quando("^realizo alguma alteração nos dados cadastrais desse cliente$")
	public void realizo_alguma_alteração_nos_dados_cadastrais_desse_cliente() throws Throwable {
		cadastroPage.alterarRG();
		cadastroPage.alterarEmail();
		cadastroPage.clicarBotaoSalvar();
	}

	@Entao("^a alteracao eh efetuada com sucesso$")
	public void a_alteracao_eh_efetuada_com_sucesso() throws Throwable {
		cadastroPage.validarMensagemAlteracao();
		cadastroPage.clicarOKNaMensagemDeSucesso();
		DriverFactory.killDriver();
	}

	@Quando("^deleto esse cliente$")
	public void deleto_esse_cliente() throws Throwable {
		cadastroPage.clicarBotaoExcluir();
		cadastroPage.confirmarExclusao();
	}

	@Entao("^a delecao eh efetuada com sucesso$")
	public void a_delecao_eh_efetuada_com_sucesso() throws Throwable {
		homePage.validarClienteExcluido();
		DriverFactory.killDriver();
	}

}
