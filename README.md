# Materiales Vallejo — Website

Live version: [v2.0](http://materialesvallejo.com/)

## Introduction
Materiales Vallejo is a small business in [Matamoros, Tamaulipas](https://www.google.com.mx/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=matamoros%2C%20tamaulipas) that sells construction materials to wholesellers, construction firms, and for retail. This is Materiales Vallejo's first online presence, and coincidentally, it's also the first time I build a website from scratch. It's a very small site and it's been a fun and challenging learning experience. Before this project I had basic experience building websites with Webflow, Squarespace and Adobe Muse. 

I started working on _v1.0_ late Jan 2016 and finished on April 18th, 2016. _v2.0_ was started on May 2016 and finished on June 23rd, 2016. _v3.0_ started October 5th, 2016 and will _hopefully_ end October 9th, 2016.

## Current Site Structure
- Index
- About
- Privacy Policy
- 404
- Jobs _(v3.1)_
- Job Detail _(v3.1)_
- Job application form _(v3.1)_

_Note:_ The site will also have an English version.

## v3.0 vs. v2.0
v3.0 will include/improve upon v2.0 in the following ways —
  + __Single-page Experience:__ Placing the most important content on the index page will help users find the content they are looking for much faster.
  + __Product Navigation:__ v2.0's interactive product gallery is not optimized for IE browsers and navigation between product categories is slow.  The user has to click through each category individually to navigate the product catalogue. v3.0 will have a redesigned product experience by featuring a simple responsive product carrousel that doesn't require the user to click on specific product categories to view the products they're interested in.
  + __Asset Optimization:__ v2.0's assets weren't optimized or minified. v3.0 will deliver minified, gzipped assets and optimized images to minimize loading time. Asset optimization will be automated with [Gulp.js](http://gulpjs.com/).
  + __CSS Optimization:__ For v2.0 I did my best to manage CSS classes. My classes were usually overly specific, which prevented me from creating reusable classes. For v3.0 I will design with [Tachyons](http://tachyons.io/), a CSS library of modular, responsive classes. I'll be using Tachyons to minimize the amount of CSS I write and maximize the reusability of my CSS classes. If you haven't had the chance to work with Tachyons, I highly recommend it. It makes web development fun (it feels like building Legos) because things just work and don't break. If you think it's intimidating, don't worry, I did too. It took me about a day to get used to it, and it's been one of the best investments of my time this year. If you want to develop websites faster and have fun while doing it, give Tachyons a try.
  + __Faster Development:__ For v1.0 and v2.0 I built the site without any framework. v3.0 will be built with [Middleman](https://middlemanapp.com/), a Ruby static site generator. One of the things I love about Middleman is how I can use `.json` files to create and structure data models. What's so great about data models is that you can create dynamic HTML/CSS layouts and structures. This is another tool I've really enjoyed working with and would highly recommend diving into Middleman or Jekyll or any other static site generator.
  + __Practice:__ Other than building a faster experience (technically and structurally) I want to build v3.0 because I want to learn more about how I can improve my previous work to create better work in future projects.

## v3.0
### Design Tools —
First commit: _October 8, 2016_  |  Last commit: _TBD_  |  Hosted on: _TBD_
 + Wireframing: [Swipies](http://www.swipi.es/)
 + Experience / Visual Design: [Figma](https://www.figma.com/)
 + Icon Design: [Figma](https://www.figma.com/)

### Development Tools —
 + Text Editor: [Vim](http://vimdoc.sourceforge.net/htmldoc/help.html)
 + Terminal: [iTerm2](https://www.iterm2.com/) 
 + Markup: [HTML/CSS](https://developer.mozilla.org/en-US/)
 + CSS Framework: [Tachyons](http://tachyons.io/)
 + Interactivity: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 + Static Site Generator: [Middleman](https://middlemanapp.com/)
 + Build tool: [Gulp](http://gulpjs.com/)
 + Host: TBD ([GitHub Pages](https://pages.github.com/) / [Netlify](https://www.netlify.com/))

## v2.0
First commit: _June 6, 2016_  |  Last commit: _June 23, 2016_  |  Hosted on: [AWS S3](https://aws.amazon.com/s3/)
### Design tools —
 + Wireframing: [Moleskine](http://www.moleskine.com/collections/model/product/squared-soft-notebook-large)
 + Experience / Visual Design: [Sketch](https://sketchapp.com/)
 + Icon Design: [Illustrator](http://www.adobe.com/products/illustrator.html)

### Development Tools —
 + Text Editor: [Atom](https://atom.io/)
 + Terminal: [Mac Terminal](https://www.google.com.mx/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Mac+Terminal)
 + Markup: [HTML/CSS](https://developer.mozilla.org/en-US/)
 + Interactivity: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 + Deployment: [AWS CLI](http://docs.aws.amazon.com/cli/latest/reference/s3/)


## v1.0
First commit: _March 20, 2016_  |  Last commit: _April 18, 2016_  |  Hosted on: [AWS S3](https://aws.amazon.com/s3/)
### Design Tools —
 + Wireframing: [Moleskine](http://www.moleskine.com/collections/model/product/squared-soft-notebook-large)
 + Experience / Visual Design: [Sketch](https://sketchapp.com/)
 + Image Editing: [Photoshop](http://www.adobe.com/products/photoshop.html)
 + Icon Design: [Illustrator](http://www.adobe.com/products/illustrator.html)
 + Photography: [Canon EOS Rebel XT](https://www.amazon.com/Canon-Digital-Camera-18-55mm-f3-5-5-6/dp/B0007QKN22?th=1)

### Development Tools —
 + Text Editor: [Sublime](https://www.sublimetext.com/)
 + Markup: [HTML/CSS](https://developer.mozilla.org/en-US/)
 + Preprocessor: [SASS](http://sass-lang.com/)
 + Interactivity: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
