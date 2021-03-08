const { client } = require("nightwatch-api")

var pesquisaAction = {

    informarPesquisa: function (dado) {

        return this
            .waitForElementVisible('@txtPesquisa', 5000)
            .setValue('@txtPesquisa', dado);
    },

    clicarPequisar: function () {

        return this
            .click('@btnPesquisa').pause(5000);

    }

}

module.exports = {
    commands: [pesquisaAction],

    elements: {
        txtPesquisa: '[name="q"]',
        btnPesquisa: '[class="gNO89b"]'
    }
}

