describe('User attempts save data', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001')
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/performance_data',
      response: 'fixture:saving_entry_response.json'
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/auth/sign_in',
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
  });

  it('successfully', () => {
    cy.get('select[id="method"]').select('imperial')
    cy.get('input[id="weight"]').type('200')
    cy.get('input[id="height"]').type('73')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
  })

  it('can save two different entries', () => {
    cy.get('select[id="method"]').select('imperial')
    cy.get('input[id="weight"]').type('200')
    cy.get('input[id="height"]').type('73')
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
    cy.get('input[id="method"]')
    cy.click()
    cy.get('#save-result').click()
    cy.contains('Your entry was saved')
  })
})