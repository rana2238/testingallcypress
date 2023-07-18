describe('ClickUp Login', () => {
  
    it('should login to ClickUp and perform upgrade steps', () => {

        
        cy.visit('https://app.clickup.com/login')
        cy.findByLabelText('Email').should('exist').type('purposefortesting10@gmail.com');
     cy.findByLabelText('Password').type('Sept@12345');
  cy.findByRole('button', { name: 'Log In' }).click();
  cy.get('[data-test="team-avatar_Tester\'s Workspace"]',{ timeout: 30000}).should('exist');;
  
      // Click on the team avatar at the bottom of the left side
      cy.get('[data-test="team-avatar_Tester\'s Workspace"]').click();
  
      // Click on the Upgrade button
      cy.findByRole('link', { name: 'Upgrade' }).click();
  
      // Verify the user is navigated to the billing page
      cy.url().should('include', '/9002137880/settings/billing');
  
      // Verify the available plans
      cy.get('div[data-test="plan-options__business"]');
      cy.get('div[data-test="plan-options__unlimited"]');
      cy.get('div[data-test="plan-options__business-plus"]');
      cy.get('div[data-test="plan-options__enterprise"]');
  
      // Verify each plan has yearly and monthly toggle and set to yearly
      cy.get('div[data-test="plan-options__business"]').then(($parentElement) => {
        cy.wrap($parentElement).find('div[data-test="pricing-switch-label-yearly"]');
        cy.wrap($parentElement).find('div[data-test="pricing-interval-toggle"]');
      });
      cy.get('div[data-test="plan-options__unlimited"]').then(($parentElement) => {
        cy.wrap($parentElement).find('div[data-test="pricing-switch-label-yearly"]');
        cy.wrap($parentElement).find('div[data-test="pricing-interval-toggle"]').click();
      });
      cy.get('div[data-test="plan-options__business-plus"]').then(($parentElement) => {
        cy.wrap($parentElement).find('div[data-test="pricing-switch-label-yearly"]');
        cy.wrap($parentElement).find('div[data-test="pricing-interval-toggle"]');
      });
  
      // Verify the displayed plan costs
      cy.findAllByText('5', '12', '19');
  
      // Verify the most popular plan is displayed
      cy.get('div[data-test="upgrade-plans__item-badge"].upgrade-plans__item-badge_popular');
  
      // Click on the Upgrade button for the Unlimited plan
      cy.get('div[data-test="plan-options__unlimited"]').then(($parentElement) => {
        cy.wrap($parentElement)
          .find('div[data-test="upgrade-plans__item-btn-unlimited"].upgrade-plans__item-btn')
          .click();
      });
  
      // Verify the order summary is displayed
      cy.findAllByText('Order Summary');
  
      // Verify the billing plan is selected as Billed Monthly and highlighted
      cy.findAllByText('Billed Yearly').should('exist')
      cy.findByPlaceholderText('Credit Card Number' ).should('exist')
      
      cy.findByPlaceholderText('Expiring MM/YY').should('exist')
      cy.findByTitle('Secure Credit Card Frame - CVV').should('exist')
      // Verify the text box for the zip code is available
      cy.findByPlaceholderText('Zip Code (US Only)').should('exist')
      cy.findByTitle('Secure Credit Card Frame - Credit Card Number').click().type(56565665665);
      // cy.findAllByText('Invalid credit card number')
  
      // Select India from the country dropdown
      cy.get('select[id="country"]').select('AF');
        // .select(cy.findByRole('menuitem', { name: 'India' }))
        ;
  
      // Verify the Upgrade button is present
      cy.findByRole('button', { name: 'Upgrade' });
      cy.get('.checkout.scrollable').scrollTo('top');
  
      cy.get('div[class="ng-star-inserted"]').click()
      cy.url().should('include', '/9002137880/settings/billing')
    });
  });
  