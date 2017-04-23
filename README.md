Snappet Front-end Challenge
============

At [Snappet](http://www.snappet.org), we care about data and we care about code. When we interview for development positions, we want to see code and we want to discuss code. That's why we want candidates to show some work on our challenge. This challenge is not meant to cost you tons of time. A few hours should be enough. You could spend weeks on it, or half an hour. We understand that in 2 hours, you can only do so much. Don't worry about completeness, work on something that works and shows your skills.

### Task requirements

* Create a responsive HTML page to represent the designs `FED-{state}.png` found in the root of this project. The breakpoints are 1280 (desktop), 786 (tablet) and 544 (mobile).
* Use semantic, accessible and valid mark-up.
* Style the page so that it looks like the design. This can be done in CSS, SCSS, LESS – whatever you prefer.
* Write a small piece of JavaScript so that the 'Math grade 5' dropdown shows and hides multiple classes, such as 'Math grade 4' and 'Math Grade 3'.
* Use the icons in the `/assets` folder to help you when styling the page.


## Important considerations

* We work as much as possible with latest technolgies, such as flexboxes or svg fragment identifiers. Your minimal requirements are to make it work in IE10+ and the latest two versions of Chrome, Firefox and Safari. Feel free to use technolgies such as `autoprefixer`.
* We don’t expect candidates to finish all of the styling detailed in the design (although you’ll get mega kudos if you manage to!).  Focus on making the parts that you do work on a good standard that reflects your ability.  We’d rather see a number of the components from the design styled well, than lots of incomplete components.
* Think about how the CSS you write can be used across other pages on the site.  We build our CSS in a component-driven way so show us that you can do that too.
* If you want to use a grid framework to help you out with the base layout, that’s completely fine.  Please don’t use a framework to do the majority of your styling though – we want to see an example of your own CSS, not that you can use a CSS framework.
* We understand you’re developing from a PNG and not a Sketch or Photoshop file – don’t get too hung up on exact colours of text or margins between elements.
* Don’t overcomplicate the JavaScript part of the task.  We just want to see that you know how to write basic JS. Feel free to use jQuery but do not use jQuery libraries such as [select2](https://select2.github.io/).

# Questions & respective answers

* What approaches did you use when completing the challenge?  Do you use any CSS methodologies or techniques to help this approach?
    * Developed the application using HTML5, CSS and JS (including jQuery).
    * Approach : 
	  * Created custom base CSS (my_grid.css) that includes 12 grid and responsive for screens	- done this from scratch and can be used as simple css framework in other projects as well.
	  * Written app related CSS (app_style.css) and done customizations according to design and feature implementation.
	  * Written Object based JS (app.js) - Object literal creation way, that have single namespace and everything goes within its scope. It includes event handlers for toggle button and select grade dropdowns.
	  * Also grid data (row wise) generation is done dynamically through JS (created dummyJSON).
	  
* If you had more time to spend on the challenge, what would you like to add to your solution?
    * Will apply component based development approach and shadom (virtual) dom
	* Will create this application in component based JS framework / library - especially Angular 2 / React-Redux
	* Will create fully responsive and adaptive design
	
* What browsers should your solution work in?  What will happen if we test it in older browsers?
    * It will work for IE 9+, Chrome, Firefox and Safari.
	
* What's your favourite programming language? Why?
    * JavaScript, especially when it comes to end-to-end development. As a JS developer one can develop for both server-side and client-side.
	* For asynchronous development and amazing feature of event-loop to achieve multi-threading and server which can handle huge requests as well (nodeJS)
	* And of course lot of amazing open source frameworks and libraries (Angular, React, Vue etc)

Thank you for your time, we look forward to hearing from you!  
Thanks to the [JustEat Challenge](https://github.com/justeat/JustEat.Recruitment.UI) for providing inspiration.