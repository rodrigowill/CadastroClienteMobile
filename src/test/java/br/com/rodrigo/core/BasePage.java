package br.com.rodrigo.core;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

public class BasePage {
	
	public void clicarBotao(By by) {
		DriverFactory.getDriver().findElement(by).click();
	}
	
	public void clicarBotaoPorClassName(String className) {
		clicarBotao(By.className(className));
	}
	
	public void clicarBotaoPorId(String id) {
		clicarBotao(By.id(id));
	}
	
	public void escrever(By by, String texto) {
		DriverFactory.getDriver().findElement(by).sendKeys(texto);
	}
	
	public void escreverPorId(String id, String texto) {
		escrever(By.id(id), texto);
	}
	
	public String obterMensagem(By by) {
		return DriverFactory.getDriver().findElement(by).getText();
	}
	
	public String obterMensagemPorId(String id) {
		return obterMensagem(By.id(id));
	}
	
	public void clicarAlertaOK() {
		DriverFactory.getDriver().switchTo().alert().accept();
		DriverFactory.getDriver().switchTo();
	}

	public void selecionarComboEItemEstado(String idCombo, String classItens, String opcaoEstado) {
		DriverFactory.getDriver().findElement(By.id(idCombo)).click();
		DriverFactory.getDriver().findElement(By.xpath("//" + classItens + "[@text='" + opcaoEstado + "']")).click();
	}

	public void clicarItemLista(String classe, String texto) {
		DriverFactory.getDriver().findElement(By.xpath("//" + classe + "[@text='" + texto + "']")).click();
	}
	
	public void voltarTelaAnterior() {
		DriverFactory.getDriver().navigate().back();
	}
	
	public void pesquisarCliente(String nome) {
		DriverFactory.getDriver().findElement(By.id("br.com.dudstecnologia.cadastrodeclientes:id/editPesquisar")).sendKeys(nome);
	}
	
	public boolean existeClienteExcluido(String classe, String texto) {
		try {
			return DriverFactory.getDriver().findElement(By.xpath("//" + classe + "[@text='" + texto + "']")).isDisplayed();
		} catch (NoSuchElementException e) {
			return false;
		}
	}

}
