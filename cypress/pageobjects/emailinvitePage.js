export default class EmailInvitePage {
    elements = {
      hoverLink: () => cy.findByRole('link', { name: 'Download ClickUp for iOS' }),
  
      androidLink: () => cy.findByRole('link', { name: 'Download ClickUp for Android' }),
  
      desktopLink: () => cy.findByRole('link', { name: 'Download ClickUp for Desktop' }),
  
      chromeLink: () => cy.findByRole('link', { name: 'Download ClickUp for Chrome' }),
  
      peopleLink: () => cy.findByRole('link', { name: 'People' }),
  
      searchInput: () => cy.findByPlaceholderText('Search by name or email'),
  
      invitebyemail:()=>cy.findByPlaceholderText('Invite by email (multiple lines and CSV accepted)'),
  
      inviteButton: () => cy.findByRole('button', { name: 'Invite' }),
  
      inviteDropdown: () => cy.get('[data-test="invite-team-user__dropdown-menu"]'),
  
      howToInviteLink: () => cy.findByRole('link', { name: 'How to invite a guest' }),
  
      bannerEmail: () => cy.get('[data-test="team-users-settings__banner__rahulrkrana25@gmail.com"]'),
  
      searchCloseButton: () => cy.get('[data-test="team-users-settings__search-close"]'),
  
      emailList: () => cy.get('.cu-tms-user__email'),
  
      toastSuccess: () => cy.get('div[data-test="team-users-settings__toast-success"]'),
  
      Memberaccess:()=>cy.findByRole('button', { name: 'Member Access to public Spaces, Docs and Dashboards.' }),
  
      Fullmembers:()=> cy.findByRole('tab', { name: 'Full members (2)' }),
  
      Externalguests:()=> cy.findByRole('tab', { name: 'External Guests (0/2)' }),
  
      Internalguests:()=>cy.findByRole('tab', { name: 'Internal Guests (0)' }),
  
      AdminManageSpaces:()=>cy.findByRole('button', { name: 'Admin Manage Spaces, People, Billing, and other Workspace settings.' }),
  
      Scrollbar:()=>cy.get('[data-test="team-users-settings__main-scroll-body"]'),
  
      dropdown:()=>cy.get('.cu-dropdown__toggle.cu-tms-user-settings-list__ellipsis'),
  
      resendinvite:()=>cy.get('.cu-tms-user-settings-list__icon.cu-icon_control-resend-invitation'),
  
      cancelinvite:()=>cy.get('.cu-tms-user-settings-list__text'),
  
      canceliToast:()=>cy.get('div.toast__undo-content[data-test="settings-success-items__removed-user__Invitation to ashish0600@gmail.com has been canceled from Tester\'s Workspace"]'),
  
      emailbanner:()=>cy.get('[data-test="team-users-settings__banner__ashish0600@gmail.com"]')
  
    };
  
    // -Hover the mouse on Android, IOS, desktop and Chrome available in bottom anverify the all tooltip
  // - Click on People
  // - Verify the user should navigate to Invite page
  // - Verify Search bar, Invite button, Dropdown, Learn more and How to invite a quest should available
  // - Verify three section should visible
  
    hover() {
      this.elements.hoverLink().should('exist').trigger('mouseover');
        this.elements.androidLink().should('exist').trigger('mouseover');
          this.elements.desktopLink().should('exist').trigger('mouseover');
            this.elements.chromeLink().should('exist').trigger('mouseover');
    
    }
  
    // - Verify Search bar, Invite button, Dropdown, Learn more and How to invite a quest should availabl
    clickPeople() {
      this.elements.peopleLink().click().then(() => {
        cy.url().should('include', '/9002137880/settings/team/9002137880/users');
        this.elements.searchInput().should('exist');
        this.elements.inviteButton().should('exist');
        this.elements.inviteDropdown().should('exist');
        this.elements.howToInviteLink().should('exist');
      });
    }
  
  // Verify Search bar, Invite button, Dropdown, Learn more and How to invite a quest should available
  // -Verify three section should visible
  // Full members
  // External Guests
  // Internal Guests
  
    checkSections() {
      this.elements. Fullmembers().should('exist').then(() => {
        this.elements.Externalguests().should('exist');
      }).then(() => {
        this.elements.Internalguests().should('exist');
      });
    }
  
  
  // Click on Search by Name or email and enter the existed name
    searchEmail(email) {
    
      this.elements.searchInput().type(email).then(() => {
       
        // - Verify the searched result should display
        this.elements.bannerEmail().should('exist');
      }).then(() => {
        // Click on X
        this.elements.searchCloseButton().click();
      }).then(() => {
       
        // Verify the all existed user should display
        this.elements.emailList().should('exist');
  
        
      })
    }
  
    inviteGuest(email2) {
      //  How to invite a guest
      this.elements.howToInviteLink().should('exist')   
        .then(() => {
  
          // Click on Invite by Email and enter valid email
          this.elements.invitebyemail().type(email2);
        })
        .then(() => {
  
          // Click on dropdown available beside Invite button
          this.elements.inviteDropdown().click();
        })
        // Verify the option window should open and Contains
        // Member(by default selected and Admin
        .then(() => {
          this.elements.Memberaccess();
        })
  
        // Select the Admin
        .then(() => {
          this.elements.AdminManageSpaces()
            .click();
        })
        // Click on Invite button
        .then(() => {
          this.elements.inviteButton().click();
        })
        // succes toast appear
        .then(() => {
          this.elements.toastSuccess().should('exist');
        });
    }
  
    cancelInvitedEmail() {
      // scroll right
      this.elements.bannerEmail()
        .then(() => {
          this.elements.Scrollbar().scrollTo('right');
        })
        // click on three dots
        .then(() => {
          this.elements.dropdown().first().click();
        })
        .then(() => {
          // Resend Invitation and Cancel Invite should exist
          this.elements.resendinvite().should('exist');
          this.elements.cancelinvite().eq(1).click();
        })
        // click on cancel invite
        .then(() => {
  
          // cancel toast should appear
          this.elements.canceliToast()
            .should('contain', 'Invitation to ashish0600@gmail.com has been canceled from Tester\'s Workspace')
            .should('exist');
  
            // Verify the cancelled invited user should not exist on page.
            this.elements.emailbanner().should('exist');
        });
    }
  }
  