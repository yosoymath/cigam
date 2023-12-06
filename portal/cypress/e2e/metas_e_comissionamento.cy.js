describe('Automações do módulo Metas e Comissionamentos', function() {
    const THREE_SECONDS = 3000
    this.beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://dev3.cigamgestor.com.br/login')
    
        cy.get('#acesskey').type('RLIV_27_09')
        cy.get('#user').type('administ')
        cy.get('#password').type('gestor99')
    
        cy.get('#buttonLogin').click()
    
        cy.get('.nav-menu-main').then(($btn) => {
            if ($btn.hasClass('be.visible')){
                cy.get('.nav-menu-main').click()
                cy.contains('Outras Opções').click()
                cy.get('#item_MetaseComissionamento').click()
            }
            if(cy.contains('Selecione a franqueadora')){
                cy.contains('Salvar').click()
                cy.contains('Outras Opções').click()
                cy.get('#item_MetaseComissionamento').click()
            }
            else{
                cy.contains('Outras Opções').click()
                cy.get('#item_MetaseComissionamento').click()
            }
        })
    })

    it('Faz a pesquisa sem parâmetros', function(){
        cy.get('[type="submit"]').click()

        cy.get('.toastify-body > span').should('be.visible')
    })
    it('Faz a pesquisa, e verifica se tem informação', function(){
        cy.get('.col-md-6 > .undefined > .react-select > .select__control > .select__value-container')
            .as('select2')

        cy.get('@select2')
            .click()
        cy.get('#react-select-2-option-1')
            .click()

        cy.get('.MuiButtonBase-root').click()
        cy.contains('jun').click()
        cy.contains('2023').click()
        
        cy.contains('Pesquisar').click()

        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .d-flex > .title')
            .should('be.visible')
    })
    it('Realiza pesquisa, clica na lupa, e verifica se o vendedor tem vendas atreladas à ele.', function(){
        cy.get('.col-md-6 > .undefined > .react-select > .select__control > .select__value-container').click() //Clica no select de Lojas/Empresas
        cy.get('#react-select-2-option-2').click() //Escolhe alguma opção no select

        cy.get('.MuiButtonBase-root').click() //Clica na opção de escolher o período
        cy.contains('jun').click() //Escolhe o mês para o período
        cy.contains('2023').click() //Escolhe o ano para o período
        
        cy.get('[id="submit"]').click() //Clica no botão de "Pesquisar"

        cy.get(':nth-child(1) > .margin-card > .card-body > .first-step > .sc-dmRaPn > .sc-fLlhyt > .sc-bczRLJ > .sc-hHLeRK > #row-0 > #cell-1-undefined').click() //Clica na lupa do primeiro período do primeiro vendedor
        cy.get('.modal-title > .d-flex').should('be.visible') //Verifica se o título do modal está visível        
    })
    it('Realiza a Importação do Arquivo, e verifica se o arquivo foi importado com sucesso', function(){
        cy.contains('Importar metas')
            .click()

        cy.get('[style="margin-top: -10px;"] > .bg-warning').as('Import')
            .selectFile('cypress/fixtures/Tabela.xlsx')

        cy.contains('Importação de Metas Realizada com sucesso!')
            .should('be.visible')
    })
    it.only('Realiza a Importação do Arquivo com erros de preenchimento na planilha, e verifica se erros foram apresentados', function(){
        cy.contains('Importar metas')
            .click()

        cy.get('[style="margin-top: -10px;"] > .bg-warning').as('Import')
            .selectFile('cypress/fixtures/Tabela_error.xlsx')

        cy.contains('Existem erros de preenchimento na planilha. Resolva os erros listados e tente novamente!')
            .should('be.visible')
    })
    it('Realiza exportação do Comissionamento e verifica se o arquivo está com o padrão solicitado para o projeto', function(){

        cy.get('.col-md-6 > .undefined > .react-select > .select__control > .select__value-container').click()
            cy.get('#react-select-2-option-0').click()

            cy.get('.MuiButtonBase-root').click() 
            cy.contains('jun').click() 
            cy.contains('2023').click() 
            cy.contains('Exportar comissionamento')
                .click()
                
            cy.wait(THREE_SECONDS)

            cy.contains('Arquivo exportado com sucesso!').should('be.visible')

            cy.readFile('./cypress/downloads/comissionamento.csv').as('fileContent')
            cy.get('@fileContent')
                .should('contain', 'vendedor;totalComissao')
                .its('length')
                .should('be.gt', 22)
    })
})