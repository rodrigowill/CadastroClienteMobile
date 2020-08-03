package br.com.rodrigo.pages;

import br.com.rodrigo.core.BasePage;

public class HomePage extends BasePage{

	public void clicarAdicionar() {
		this.clicarBotaoPorClassName("android.widget.ImageButton");
	}

	public void clicarCadastrarNovo() {
		this.clicarBotaoPorId("br.com.dudstecnologia.cadastrodeclientes:id/floating_novo");
	}

	public void clicarClienteCadastrado() {
		this.clicarItemLista("br.com.dudstecnologia.cadastrodeclientes:id/listViewClientes", "Fulano");
	}

	public void validarClienteExcluido() {
		
	}

}
