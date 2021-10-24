describe('styleguide: Styleguide component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=styleguide--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Styleguide!');
    });
});
