const { client } = require("nightwatch-api")

var clicarAction = {

    clicarPrimeiroLink: function() {
        return this.waitForElementVisible('@primeiroLink', 6000)
            .click('@primeiroLink').pause(5000);
    }

}

module.exports = {
    commands: [clicarAction],
    elements : {
        primeiroLink : '[class="LC20lb DKV0Md"]'
    }
}