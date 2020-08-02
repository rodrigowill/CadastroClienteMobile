package br.com.rodrigo.core;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import io.appium.java_client.MobileElement;

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
	
	public void selecionarCombo(By by, String estado) {
		
		MobileElement elemento = DriverFactory.getDriver().findElement(by);
		elemento.click();
		Select combo = new Select(elemento);
		combo.selectByVisibleText(estado);
		
	//	DriverFactory.getDriver().findElement(by).click();
	//	DriverFactory.getDriver().findElement(By.xpath("//br.com.dudstecnologia.cadastrodeclientes:id/spinnerEstados[@text='"+estado+"']")).click();;
	}
	
	public void selecionarComboPorId(String id, String estado) {
		selecionarCombo(By.id(id), estado);
	}
	
	public void clicarItemLista(String id, String texto) {
		
		DriverFactory.getDriver().findElement(By.className("android.widget.LinearLayout")).click();;
		//DriverFactory.getDriver().findElement(By.xpath("//"+id+"[@text='"+texto+"']")).click();;
	}

}
