describe('User attempts to view his/her performance data', () => {

  before(() => {
    cy.visit('http://localhost:3001')
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://clarissa-sverrir-cooper.herokuapp.com/api/v1/performance_data',
      response: 'fixture:performance_data_index.json'
    })
    cy.route({
      method: 'POST',
      url: 'https://clarissa-sverrir-cooper.herokuapp.com/api/v1/auth/sign_in',
      response: 'fixture:login.json',
      headers: {
        "uid": "user@mail.com"
      }
    })
    cy.get('#login').click()
    cy.get('#login-form').within(() => {
      cy.get('#email').type('user@mail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
  })

  it('successfully', () => {
    cy.get('button[id="show-index"]').click()
    cy.get('.ui.large.header')
    cy.should('contain', 'My Cooper Data Results')
  })

  it('shows doughnut chart', () => {
    cy.get('.chartjs-render-monitor')
      .should('be.visible')
  })
})