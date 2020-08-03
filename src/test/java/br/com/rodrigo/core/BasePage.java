package br.com.rodrigo.core;

import org.openqa.selenium.By;

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

	public void clicarItemLista(String id, String texto) {
		DriverFactory.getDriver().findElement(By.id("br.com.dudstecnologia.cadastrodeclientes:id/nomeLista")).click();
		//DriverFactory.getDriver().findElement(By.xpath("//"+id+"[@text='"+texto+"']")).click();;
		
	}
	
	public void voltarTelaAnterior() {
		DriverFactory.getDriver().navigate().back();
	}

}
