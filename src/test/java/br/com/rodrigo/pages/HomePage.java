package br.com.rodrigo.pages;

import org.junit.Assert;

import br.com.rodrigo.core.BasePage;

public class HomePage extends BasePage{

	public void clicarAdicionar() {
		this.clicarBotaoPorClassName("android.widget.ImageButton");
	}

	public void clicarCadastrarNovo() {
		this.clicarBotaoPorId("br.com.dudstecnologia.cadastrodeclientes:id/floating_novo");
	}

	public void clicarClienteCadastrado() {
		this.clicarItemLista("android.widget.TextView", "Fulano");
	}

	public void validarClienteExcluido() {
		this.pesquisarCliente("Fulano");
		Assert.assertEquals(false, this.existeClienteExcluido("android.widget.TextView", "Fulano"));
	}

}
