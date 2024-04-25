
const username = Cypress.env('Username')
const password = Cypress.env('Password')

describe("Task E",()=>{
     it("Test",()=>{
          //1. Login 
          cy.viewport(1200, 800);
          cy.visit("https://aminsite.s2-tastewp.com/wp-login.php?loggedout=true&wp_lang=en_US");
          cy.get('#user_login').type(username);
          cy.get('#user_pass').type(password);
          cy.get('#wp-submit').click();
          //2. Check whether the WP Dark Mode Plug in Active or not
          cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click();
          cy.get('#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item').click();
          cy.get('#plugin-search-input').type("WP Dark Mode");
          cy.wait(3000);
          let flag = false
          //3. Active navigate to the WP Dark Mode & continue.
 
          cy.get('.plugin-title > strong').contains("WP Dark Mode").then(()=>{
            flag = true;
            cy.get('#deactivate-wp-dark-mode').contains('Deactivate').then(()=>{
             cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click();
            })
            
          });
  
      
          //3. Not Active so install it and activate it
/*
          cy.wrap(flag).then((flag)=>{
               if (!flag) {
                    cy.get('.colspanchange').contains("No plugins found for: WP Dark Mode");
                    cy.get('#menu-plugins > .wp-submenu > :nth-child(3) > a').click();
                    cy.get('#search-plugins').type("WP Dark Mode");
                    cy.wait(3000);
                    cy.get('.plugin-card-wp-dark-mode > .plugin-card-top > .action-links > .plugin-action-buttons > :nth-child(1) > .install-now').click();
                    cy.get('#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item').click();
                    //cy.get('.subsubsub > .inactive > a').click();
                    cy.get('#menu-dashboard > .wp-has-submenu > .wp-menu-name').click();
                    cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click();
                    cy.get('#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item').click();
                    cy.get('#activate-wp-dark-mode').click();
               
               }
          })
         
   */      
          //4. Enable Backend Darkmode from Settings -> General Settings.
          cy.get('#menu-settings > .wp-has-submenu > .wp-menu-name').click();
          // bug found
          cy.get('#menu-settings > .wp-has-submenu > .wp-menu-name').contains('Backend Darkmode').should('not.exist');
          //5. Validate whether the Darkmode is working or not on the Admin Dashboard.
          cy.get('#menu-settings > .wp-has-submenu > .wp-menu-name').click();
          cy.get('.updated').should('not.have.css', 'color', 'rgb(255, 255, 255)');
          //6. Navigate to the WP Dark Mode.
          cy.get('#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name').click();
          //7. From Settings -> Switch Settings - Change the “Floating Switch Style” from the default selections (Select any one from the available options, except the default selected one).
          cy.get(':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex > .text-base').click();
          cy.get('[href="#/switch"]').click();
          cy.get('.rounded.gap-6 > .rounded > .flex-wrap > :nth-child(3)').click();
          //8. From Settings -> Switch Settings - Select Custom Switch size & Scale it to 220.
          cy.get('span.opacity-50').click();
          cy.get('.close-promo').click();
          cy.get('.bg-gray-50 > :nth-child(6) > span').click();
    
          //9.From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom)
          cy.get(':nth-child(2) > .bg-gray-50 > .bg-gray-100').click();
          //10. Disable Keyboard Shortcut from the Accessibility Settings.
          cy.get(':nth-child(3) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between').click();
          cy.get('.wp-dark-mode-admin-sidebar-nav-container > .flex-col > [href="#/accessibility"]').click();
          //cy.get('.bg-white.gap-5 > :nth-child(1) > .sm\:items-center > .w-auto > .relative > .w-5').click();
          cy.get('.bg-blue-500').click();
          //11. From Settings -> Animation - Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections (Select any one from the available options, except the default selected one).

     })
})

