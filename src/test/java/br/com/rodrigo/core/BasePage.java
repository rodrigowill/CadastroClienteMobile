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
	
	public void selecionarCombo(By by, String estado) {
		DriverFactory.getDriver().findElement(by).click();
		DriverFactory.getDriver().findElement(By.xpath("//android.widget.CheckedTextView[@text='Nintendo Switch']")).click();;
	}
	
	public void selecionarComboPorId(String id, String estado) {
		selecionarCombo(By.id(id), estado);
	}

}
