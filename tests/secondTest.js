describe('Acessar a área de contato do site Novigi Solution', function() {

    test('Teste positivo', function(browser) {
        browser
        .url('http://www.novigisolution.com.br/')
        .windowMaximize()
        .waitForElementVisible('.logo')
        .click('li[id=menu-item-993]')
        .waitForElementVisible('input[id=avia_1_1]')
        .moveToElement('input[id=avia_1_1]', 0, 0)
        .setValue('input[id=avia_1_1]', 'teste2')
        .setValue('input[id=avia_2_1]', 'teste2')
        .setValue('input[id=avia_3_1]', 'teste2')
        .setValue('textArea[id=avia_4_1]', '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        .moveToElement('input[value=Enviar', 0, 0)
        .pause(5000)            
    });

});