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
  "line": 8,
  "name": "Cadastrar cliente com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;cadastrar-cliente-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 9,
  "name": "que estou no app",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "realizo o cadastro basico de um cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o cadastro eh realizado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.que_estou_no_app()"
});
formatter.result({
  "duration": 31384204000,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.realizo_o_cadastro_basico_de_um_cliente()"
});
formatter.result({
  "duration": 24360740400,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-U1Q8D37\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Rodrigo\\desafio-am..., appPackage: br.com.dudstecnologia.cadas..., autoGrantPermissions: true, automationName: uiautomator2, databaseEnabled: false, desired: {app: C:\\Users\\Rodrigo\\desafio-am..., autoGrantPermissions: true, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S), deviceName: 0037363468, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: 0037363468, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 1f12e76a-1589-4d0b-9c06-247e9ce85310\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.CheckedTextView[@text\u003d\u0027Nintendo Switch\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:151)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat br.com.rodrigo.core.BasePage.selecionarCombo(BasePage.java:37)\r\n\tat br.com.rodrigo.core.BasePage.selecionarComboPorId(BasePage.java:41)\r\n\tat br.com.rodrigo.pages.CadastroPage.selecionarEstado(CadastroPage.java:46)\r\n\tat br.com.rodrigo.steps.CadastroSteps.realizo_o_cadastro_basico_de_um_cliente(CadastroSteps.java:32)\r\n\tat ✽.Quando realizo o cadastro basico de um cliente(src/test/resources/features/cadastro.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastroSteps.o_cadastro_eh_realizado_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Alterar cadastro de cliente com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;alterar-cadastro-de-cliente-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 14,
  "name": "que estou no app",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "seleciono algum cliente cadastrado",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "realizo alguma alteração nos dados cadastrais desse cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "a alteracao eh efetuada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.que_estou_no_app()"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_algum_cliente_cadastrado()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.realizo_alguma_alteração_nos_dados_cadastrais_desse_cliente()"
});
formatter.result({
  "duration": 10307902300,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-U1Q8D37\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Rodrigo\\desafio-am..., appPackage: br.com.dudstecnologia.cadas..., autoGrantPermissions: true, automationName: uiautomator2, databaseEnabled: false, desired: {app: C:\\Users\\Rodrigo\\desafio-am..., autoGrantPermissions: true, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S), deviceName: 0037363468, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: 0037363468, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 1f12e76a-1589-4d0b-9c06-247e9ce85310\n*** Element info: {Using\u003did, value\u003dbr.com.dudstecnologia.cadastrodeclientes:id/editRg}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat br.com.rodrigo.core.BasePage.escrever(BasePage.java:20)\r\n\tat br.com.rodrigo.core.BasePage.escreverPorId(BasePage.java:24)\r\n\tat br.com.rodrigo.pages.CadastroPage.alterarRG(CadastroPage.java:70)\r\n\tat br.com.rodrigo.steps.CadastroSteps.realizo_alguma_alteração_nos_dados_cadastrais_desse_cliente(CadastroSteps.java:52)\r\n\tat ✽.Quando realizo alguma alteração nos dados cadastrais desse cliente(src/test/resources/features/cadastro.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastroSteps.a_alteracao_eh_efetuada_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Deletar cliente cadastrado com sucesso",
  "description": "",
  "id": "gerenciar-cadastro-de-clientes;deletar-cliente-cadastrado-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 20,
  "name": "que estou no app",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "seleciono algum cliente cadastrado",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "deleto esse cliente",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "a delecao eh efetuada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastroSteps.que_estou_no_app()"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.seleciono_algum_cliente_cadastrado()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroSteps.deleto_esse_cliente()"
});
formatter.result({
  "duration": 10162593400,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-U1Q8D37\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\Rodrigo\\desafio-am..., appPackage: br.com.dudstecnologia.cadas..., autoGrantPermissions: true, automationName: uiautomator2, databaseEnabled: false, desired: {app: C:\\Users\\Rodrigo\\desafio-am..., autoGrantPermissions: true, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 27, deviceManufacturer: motorola, deviceModel: Moto G (5S), deviceName: 0037363468, deviceScreenDensity: 480, deviceScreenSize: 1080x1920, deviceUDID: 0037363468, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 3, platform: LINUX, platformName: Android, platformVersion: 8.1.0, statBarHeight: 72, takesScreenshot: true, viewportRect: {height: 1704, left: 0, top: 72, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 1f12e76a-1589-4d0b-9c06-247e9ce85310\n*** Element info: {Using\u003did, value\u003dbr.com.dudstecnologia.cadastrodeclientes:id/btnExcluir}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat br.com.rodrigo.core.BasePage.clicarBotao(BasePage.java:8)\r\n\tat br.com.rodrigo.core.BasePage.clicarBotaoPorId(BasePage.java:16)\r\n\tat br.com.rodrigo.pages.CadastroPage.clicarBotaoExcluir(CadastroPage.java:82)\r\n\tat br.com.rodrigo.steps.CadastroSteps.deleto_esse_cliente(CadastroSteps.java:66)\r\n\tat ✽.Quando deleto esse cliente(src/test/resources/features/cadastro.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CadastroSteps.a_delecao_eh_efetuada_com_sucesso()"
});
formatter.result({
  "status": "skipped"
});
});