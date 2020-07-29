package br.com.rodrigo.pages;

import org.junit.Assert;

import br.com.rodrigo.core.BasePage;

public class CadastroPage extends BasePage{

	public void escreverNome() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editNome", "Fulano");
	}

	public void escreverRG() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editRg", "123456789");
	}

	public void escreverCPF() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editCpf", "12345678910");
	}

	public void escreverDataNascimento() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editData", "15061999");
	}

	public void escreverEndereco() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editEndereco", "Rua Amador Bueno");
	}

	public void escreverNroEndereco() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editNumero", "1234");
	}

	public void escreverBairro() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editBairro", "Mooca");
	}

	public void escreverCEP() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editCep", "01234190");
	}

	public void escreverCidade() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editCidade", "São Paulo");
	}

	public void selecionarEstado() {
		this.selecionarComboPorId("br.com.dudstecnologia.cadastrodeclientes:id/spinnerEstados", "SP");
	}

	public void escreverTel1() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editTelefone1", "11987654321");
	}

	public void escreverTel2() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editTelefone2", "11912345678");
	}

	public void escreverEmail() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editEmail", "fulano@teste.com");
	}

	public void clicarBotaoSalvar() {
		this.clicarBotaoPorId("br.com.dudstecnologia.cadastrodeclientes:id/btnSalvar");
	}

	public void validarMensagemCadastro() {
		Assert.assertEquals("Cadastro efetuado com sucesso", this.obterMensagemPorId("android:id/message"));
	}

	public void alterarRG() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editRg", "987654321");
	}

	public void alterarEmail() {
		this.escreverPorId("br.com.dudstecnologia.cadastrodeclientes:id/editEmail", "fulano@testando.com");
	}

	public void validarMensagemAlteracao() {
		Assert.assertEquals("Cadastro atualizado com sucesso", this.obterMensagemPorId("android:id/message"));
	}

	public void clicarBotaoExcluir() {
		this.clicarBotaoPorId("br.com.dudstecnologia.cadastrodeclientes:id/btnExcluir");
	}

	public void confirmarExclusao() {
		
	}

}
