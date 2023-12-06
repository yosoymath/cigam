beforeEach('Login no',() => {
    const THREE_SECONDS = 3000
    cy.viewport(1920, 1080)
    cy.visit('https://dev3.cigamgestor.com.br/login')

    cy.get('#acesskey').type('portal')
    cy.get('#user').type('administ')
    cy.get('#password').type('12345')

    cy.get('#buttonLogin').click()
})
it('Faz a pesquisa sem parâmetros', function(){
    cy.get('.nav-menu-main').then(($btn) => {
        if ($btn.hasClass('be.visible')){
            cy.get('.nav-menu-main').click()
            cy.contains('Cadastros').click()
            cy.contains('Agência Bancária').click()
        }
        else{
            cy.contains('Cadastros').click()
            cy.contains('Agência Bancária').click()
        }
    })
})