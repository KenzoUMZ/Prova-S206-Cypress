describe('Visitar site GloabalsQA', () => {
    it('Entrar na homePage', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    })
})

describe('Teste form customer', () => {
    it('Login na plataforma com sucesso', () => {
        loginCustomer();

    })
})

// Cenario Negativo
describe('Teste login sem info', () => {
    it('Login na plataforma com sucesso', () => {
        cy.contains('Bank Manager Login').click();
        cy.contains('Add Customer').click();
        cy.get('button[type=submit]').click();
        // Tenta encontrar a mensagem de erro
        // cy.contains('Please fill out this field');

        cy.contains('Home').click();

    })
})

describe('Teste delete customer', () => {
    it('Abrir lista e deletar um customer', () => {
        cy.contains('Bank Manager Login').click();
        cy.contains('Customers').click();
        cy.get('.form-control').type('Hermoine');
        cy.get(':nth-child(5) > button').click();
    })
})

function loginCustomer() {
    let userName = 'Ron Weasly';
    cy.contains('Customer Login').click();
    cy.get('#userSelect').select(userName);
    cy.contains('Login').click();
    // Verificando o user na WelcomePage
    cy.contains('Welcome Ron Weasly');
    // Volta pra homePage
    cy.contains('Home').click();
}
