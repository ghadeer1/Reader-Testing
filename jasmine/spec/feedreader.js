/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


          it("URL is not empty", function() {
            for(let feed of allFeeds) { //loop through allfeeds.
                expect(feed.url).toBeDefined; //url should be defined.
                expect(feed.url).not.toBe(""); 
            }
        });

           it("each has name", function() {
            for(let feed of allFeeds) { 
                expect(feed.name).toBeDefined; 
                expect(feed.name).not.toBe(""); 
            }
        });
    });


     describe("menu", function() {
        
        it("menu hidden by default", function() {
            let menu = document.querySelector("body");
            expect(menu.classList.contains('menu-hidden')).toBe(true); 
        });
       
         it("menu changes visibility when clicked", function() {
            let menu = document.querySelector("body");
            let menuIcon = document.querySelector(".menu-icon-link"); 
            
            simulateClick(menuIcon); //simulating a click on menu icon.
            expect(menu.classList.contains('menu-hidden')).toBe(false); //menu should appear

            simulateClick(menuIcon); //simulating a click on menu icon.
            expect(menu.classList.contains('menu-hidden')).toBe(true); //menu should disappear
        });
         }); 


     it("menu changes visibility when clicked", function() {
            let menu = document.querySelector("body");
            let menuIcon = document.querySelector(".menu-icon-link"); 
            
            simulateClick(menuIcon); //simulating a click on menu icon.
            expect(menu.classList.contains('menu-hidden')).toBe(false); //menu should appear

            simulateClick(menuIcon); //simulating a click on menu icon.
            expect(menu.classList.contains('menu-hidden')).toBe(true); //menu should disappear
        });
    }); 
 describe("Initial Entries", function() {
      
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it("has entries in feed container", function(done) { 
            let cont = document.querySelector(".feed");
            expect(cont.hasChildNodes()).toBe(true);
            done();
        });
    });
    describe("new feed selection", function() {
       
        let content1;
        beforeEach(function(done) { 
            loadFeed(0, function() {
                content1 = document.querySelector(".feed").innerHTML; //select the old feed
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it("feed container should change", function(done) { 
            const content2 = document.querySelector(".feed").innerHTML; //select the new feed
            expect(content2).not.toBe(content1); //the content of the old feed should be different than the new feed.
            done();
        });
    });
        


var simulateClick = function (elem) {
    
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
 
    var canceled = !elem.dispatchEvent(evt);
};