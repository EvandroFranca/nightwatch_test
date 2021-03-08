const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
//const { inicial } = require(telaGoogle.js);

Given(/^I open Google's search page$/, () => {
  return client.url('http://google.com').waitForElementVisible('body', 1000);
});

Then('the title is {string}', function (title) {
  return client.assert.title(title);
});

Then(/^the Google search form exists$/, () => {
    client.pause(5000);
  return client.assert.visible('input[name="q"]');
});

When('preencho o campo pesquisar com {string}', function (dado) {
    var paginaInicial = client.page.telaGoogle();

    paginaInicial.informarPesquisa(dado);

  return client;
});

When('clico no botao pesquisar', function () {
    var paginaInicial = client.page.telaGoogle();

    paginaInicial.clicarPequisar();
    
  return client;
});

Then('clico no primeiro link', function() {
    var paginaPesquisa = client.page.telaPesquisa();

    paginaPesquisa.clicarPrimeiroLink();

    return client;
});