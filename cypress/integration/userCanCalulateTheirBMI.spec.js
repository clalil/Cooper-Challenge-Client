describe('BMI Calculator calculates successfully', () => {
  before(() => {
      cy.visit('http://localhost:3001')
  })

  beforeEach(() => {
      cy.reload()
  })

  it('should display "BMI Calculator" text on page', () => {
      cy.contains('BMI Calculator')
  })

  describe('Metric method', () => {
      beforeEach(() => {
          cy.get('select[id="method"]').select('metric')
          cy.get('input[id="weight"]').type('95')
          cy.get('input[id="height"]').type('186')
      })

      it('displays assesment', async () => {   
          cy.contains('You are Overweight')
      })

      it('displays BMI value', async () => {   
          cy.contains('BMI of 27.46')
      })
  })

  describe('Imperial method', () => {
      beforeEach(() => {
          cy.get('select[id="method"]').select('imperial')
          cy.get('input[id="weight"]').type('200')
          cy.get('input[id="height"]').type('73')
      })

      it('displays assesment', async () => {   
          cy.contains('You are Overweight')
      })

      it('displays BMI value', async () => {   
          cy.contains('BMI of 26.38')
      })
  })
})