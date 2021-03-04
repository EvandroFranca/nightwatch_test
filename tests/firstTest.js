module.exports = {
    'My first test case': function(browser) {
        var novigi = browser.page.telaNovigi();
        
        novigi.navigate()
        .aguardarVisibilidade('@logo')
        .clicar('@btnContato')
        .preencherCampo("@inputNome", "$$$$$$$$")
        .preencherCampo("@inputEmail", "$$$$$$$$")
        .preencherCampo("@inputAssunto", "$$$$$$$$")
        .preencherCampo("@textAreaMensagem", "$$$$$$$$")
        .pause(4000)
        .end();
    }
}