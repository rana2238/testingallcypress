export default class TrashPage {
    elements = {
      Trashbutton: () =>  cy.findByRole('link', {name:'Trash'}),
  
      UrlAssertion: () => cy.url().should('include', '/9002137880/settings/trash'),
      
      TextAssertion:()=> cy.findAllByText('Items shown below will be automatically deleted forever after 30 days'),
      
      Searchbar:()=> cy.findByRole('link', {name:'Trash'}),

      Filterassertion:()=>cy.get('div.cu-trash__filter-icon'),

      clearallassertion:()=>cy.findAllByText('Clear all trash'),

     clickfilter:()=>cy.get('div.cu-trash__filter-icon'),

     spaceName:()=>cy.findByPlaceholderText('Search'),

     crossicon:()=>cy.get('div.cu-trash__search-close'),

     items:()=>cy.findAllByText('Space','Whiteboard'),
     
     assertionfilter:()=>cy.findAllByText('Type','Deleted by'),
     clickType:()=>cy.get('button[data-test="dropdown-list-item__type"].cu-dropdown-list-item__link-container'),
     
     Typelist:()=>cy.findAllByText('Task','Subtask','List','Folder','Space','Document','Conversation','Page','Custom Field','Dashboard','Tag','Form','Reminder','Time Tracked'),
      
     clicktask:()=>cy.get('div[data-test="dropdown-list-item__Task"].cu-dropdown-list-item__title-text'),

     check:()=>cy.get('div[data-test="dropdown-list-item__check"].cu-dropdown-list-item__check'),

     outsideclick:()=>cy.get('body'),

     typecheck:()=>cy.contains('button[data-test="dropdown-list-item__type"]', '(1)'),


     delteby:()=>cy.get('.cu-dropdown-list-item__link_deletedby'),
    
     searchBar:()=>cy.findByPlaceholderText('Search...'),

     allcollaborators:()=>cy.get('[data-test="user-list__body"]'),

     collaboratorclick:()=>cy.findAllByText('rahulrkrana@gmail.co'),

     selected:()=>cy.get('div[data-test="user-item__icon-close"]'),

    //  hover:()=>cy.findAllByText('R').eq(1) ,

    //  offlinetext:()=>cy.findAllByText('offline'),

    //  email:()=>cy.findAllByAltText('rahulrkrana@gmail.co'),

    //  viewprofile:()=>cy.findAllByText('View Profile'),

     threedots:()=>cy.get('[tabindex="0"][aria-label="Dropdown menu"]').eq(3),

     Restore:()=>cy.findByRole('button', {name:'Restore'}),

     Deleteforeever:()=>cy.findByRole('button', {name:'Delete forever'})

    }
    clickTrashButton() {
        this.elements.Trashbutton().click();
      }
      urlAssertion() {
        cy.url().should('include', '/9002137880/settings/trash');
      }
      Searchbar() {
        this.elements.Searchbar().should('exist');
      }
    
      Filterassertion() {
        this.elements.Filterassertion().should('exist');
      }
    
      clearallassertion() {
        this.elements.clearallassertion().should('exist');
      }
    
      clickfilter() {
        this.elements.clickfilter().should('exist');
      }
    
      clickspaceName() {
        this.elements.spaceName().click().type('space');
      }
    
      clickcrossicon() {
        this.elements.crossicon().should('exist').click();
      }
      clickitems() {
        this.elements.items().should('exist');
      }

      openfilter() {
        this.elements.clickfilter().click();
      }
     assertionfilter() {
        this.elements.assertionfilter().should('exist');
      }
    
      clickType() {
        this.elements.clickType().click({ multiple: true });
      }
      Typelist() {
        this.elements.Typelist().should('exist');
      }
      clicktask() {
        this.elements.clicktask().click();
      }
      check() {
        this.elements.check().should('exist');
      }
      outsideclick() {
        this.elements.outsideclick().click();
      }
      typecheck() {
        this.elements.typecheck().should('exist')
      }
    //   typechecknot() {
    //     this.elements.typecheck().should('not.contain', '(1)')
    //   }
    
    delteby() {
        this.elements.delteby().click()
      }
      searchBar() {
        this.elements.searchBar().click()
      }
      allcollaborators() {
        this.elements.allcollaborators().click()
      }
      collaboratorclick() {
        this.elements.collaboratorclick().click()
      }
      selected() {
        this.elements.selected().should('exist')
      }
      notselected() {
        this.elements.selected().should('not.exist')
      }
      hover() {
        this.elements.hover()
        .invoke('mouseover')
        .wait(5000) // Adjust the delay duration if necessary
        .get('div.cu-user-profile-card__dropdown')
        .should('be.visible');;
        
      }
      offlinetext() {
        this.elements.offlinetext().should('exist')
      }
      email() {
        this.elements.email().should('exist')
      }
      viewprofile() {
        this.elements.viewprofile().should('exist')
      }
      dbloutsideclick() {
        this.elements.outsideclick().dblclick();
      }
      threedots() {
        this.elements.threedots().click();
      }
      Restore() {
        this.elements.Restore().should('exist');
      }
      Deleteforeever() {
        this.elements.Deleteforeever().should('exist').click();
      }
}
