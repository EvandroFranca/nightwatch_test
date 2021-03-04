module.exports = {
    url: 'http://www.novigisolution.com.br/',

    elements : {
        logo : '.logo',
        btnContato : 'li[id=menu-item-993]',
        inputNome : 'input[id=avia_1_1]',
        inputEmail : 'input[id=avia_2_1]',
        inputAssunto : 'input[id=avia_3_1]',
        textAreaMensagem : 'textArea[id=avia_4_1]',
        btnEnviar : 'input[value=Enviar'
    },

    commands: [{
        clicar(elemento) {
            const pagina = this;
            pagina.click(elemento);
            return this;
        },

        aguardarVisibilidade(elemento) {
            const pagina = this;
            pagina.waitForElementVisible(elemento);
            return this;
        },

        preencherCampo(elemento, valor) {
            const pagina = this;
            pagina.setValue(elemento, valor);
            return this;
        }
    }],
};