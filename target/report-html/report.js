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
  "keyword": "Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@executar"
    }
  ]
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
  "duration": 29051829600,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.realizo_o_cadastro_basico_de_um_cliente()"
});
formatter.result({
  "duration": 19556457900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.o_cadastro_eh_realizado_com_sucesso()"
});
formatter.result({
  "duration": 857422000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Alterar cadastro de cliente com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;alterar-cadastro-de-cliente-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 14,
      "name": "@executar"
    }
  ]
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
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_algum_cliente_cadastrado()"
});
formatter.result({
  "duration": 10298137100,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-U1Q8D37\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Rodrigo\\desafio-am..., appPackage: br.com.dudstecnologia.cadas..., autoGrantPermissions: true, automationName: uiautomator2, databaseEnabled: false, desired: {app: C:\\Users\\Rodrigo\\desafio-am..., autoGrantPermissions: true, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S), deviceName: 0037363468, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: 0037363468, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: fb1d8675-855b-472b-97e7-199a46341dda\n*** Element info: {Using\u003dclass name, value\u003dandroid.widget.ImageButton}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByClassName(DefaultGenericMobileDriver.java:125)\r\n\tat io.appium.java_client.AppiumDriver.findElementByClassName(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByClassName(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat br.com.rodrigo.core.BasePage.clicarBotao(BasePage.java:8)\r\n\tat br.com.rodrigo.core.BasePage.clicarBotaoPorClassName(BasePage.java:12)\r\n\tat br.com.rodrigo.pages.HomePage.clicarAdicionar(HomePage.java:8)\r\n\tat br.com.rodrigo.steps.CadastroSteps.realizo_o_cadastro_basico_de_um_cliente(CadastroSteps.java:21)\r\n\tat br.com.rodrigo.steps.CadastroSteps.seleciono_algum_cliente_cadastrado(CadastroSteps.java:47)\r\n\tat ✽.E seleciono algum cliente cadastrado(src/test/resources/features/cadastro.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastroSteps.realizo_alguma_alteração_nos_dados_cadastrais_desse_cliente()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CadastroSteps.a_alteracao_eh_efetuada_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
});