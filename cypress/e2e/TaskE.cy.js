const username = Cypress.env('Username')
const password = Cypress.env('Password')

describe("Task E",()=>{
     it("Test",()=>{
          //1. Login 
          cy.visit("https://aminsite.s2-tastewp.com/wp-login.php?loggedout=true&wp_lang=en_US");
          cy.get('#user_login').type(username);
          cy.get('#user_pass').type(password);
          cy.get('#wp-submit').click();
     })

     it("Test",()=>{
          
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
          cy.get('#toplevel_page_wp-dark-mode > .wp-submenu > li.wp-first-item > .wp-first-item').click();
          //cy.get("a[class='router-link-active router-link-exact-active nav-item-child focus:outline-none active']").click();
          cy.get('#toplevel_page_wp-dark-mode > .wp-submenu > li.wp-first-item > .wp-first-item').click();
     })
})
