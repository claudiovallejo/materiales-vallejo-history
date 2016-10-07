# Materiales Vallejo — Website

You can view v2.0 of the site [here](http://materialesvallejo.com/).

## Introduction
Materiales Vallejo is a small business in [Matamoros, Tamaulipas](https://www.google.com.mx/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=matamoros%2C%20tamaulipas) that sells construction materials.

Materiales Vallejo was looking for a basic website to display
  + the products they sell
  + services they offer
  + contact information
  + a snippet of who the company is

This is the first web project I designed and developed from scratch. Before this project I had basic experience building websites with Webflow, Squarespace and Adobe Muse. I've been responsible for everything about this website: photography, image editing, content, icon design, visual design, and front-end development, and every bug you encounter :). It's a very small site, but it's been challenging and fun nonetheless. As of today I've designed and built two versions of the site and am currently working on building v3.0. Here are several reasons why I think v3.0 is necessary —
  + __Single-page Experience:__ The main point of the website is to display product, service, and contact information. Condensing the site into a single page will create a unified, continuous experience for the user and will reduce the time it takes for them to find the information they are looking for.
  + __Product Gallery:__ v2.0's interactive product gallery is not optimized for IE browsers and it doesn't have continous navigation. The user has to click through each category individually to navigate the product catalogue. v3.0 will have a redesigned product experience and it will have two interactive, responsive, continuous swimlanes to make product navigation continuous and faster.
  + __Asset Optimization:__ v2.0's assets weren't optimized or minified (wasn't aware of such a thing existed.) v3.0 will deliver minified, gzipped assets and optimized images to minimize loading time and the optimization will be automated with Gulp.js
  + __CSS Optimization:__ For v2.0 I did my best to manage my CSS classes, my classes were sometimes overly specific, which mean CSS styles weren't as reusable as possible. For v3.0 I will design with [Tachyons](http://tachyons.io/), a CSS library of modular, responsive classes. I'll be using Tachyons to minimize the amount of CSS I write and maximize the reusability of my CSS classes.
  + __Faster Development:__ For v1.0 and v2.0 I built the site without any framework. v3.0 will be built with [Middleman](https://middlemanapp.com/), a Ruby static site generator. One of the things I love about Middleman is how I can use `.json` files to create and structure data models. What's so great about data models is that I create dynamic HTML/CSS layouts and structures based on the content.
  + __Practice:__ Other than building a faster experience (technically and structurally) I want to build v3.0 because I want to learn more about how I can improve my previous work to create better work in future projects.


## Version History
### v3.0
#### Design Tools —
  + Wireframing: [Swipies](http://www.swipi.es/)
  + Experience / Visual Design: [Figma](https://www.figma.com/)
  + Icon Design: [Figma](https://www.figma.com/)

#### Development Tools —
  + Text Editor: [Atom](https://atom.io/)
  + Terminal: [Hyperapp](https://hyper.is/)
  + Markup: [HTML/CSS](https://developer.mozilla.org/en-US/)
  + CSS Framework: [Tachyons](http://tachyons.io/)
  + Static Site Generator: [Middleman](https://middlemanapp.com/)
  + Build tool: [Gulp](http://gulpjs.com/)
  + Host: TBD (Either [GitHub Pages](https://pages.github.com/) or [Netlify](https://www.netlify.com/))


### v2.0
First commit: _June 6, 2016_  |  Last commit: _June 23, 2016_  |  Hosted on: [AWS S3](https://aws.amazon.com/s3/)
#### Design tools —
  + Wireframing: [Moleskine](http://www.moleskine.com/collections/model/product/squared-soft-notebook-large)
  + Experience / Visual Design: [Sketch](https://sketchapp.com/)
  + Icon Design: [Illustrator](http://www.adobe.com/products/illustrator.html)

#### Development Tools —
  + Text Editor: [Atom](https://atom.io/)
  + Terminal: [Mac Terminal](https://www.google.com.mx/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Mac+Terminal)
  + Markup: [HTML/CSS](https://developer.mozilla.org/en-US/)
  + Interactivity: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  + Deployment: [AWS CLI](http://docs.aws.amazon.com/cli/latest/reference/s3/)


### v1.0
First commit: _March 20, 2016_  |  Last commit: _April 18, 2016_  |  Hosted on: [AWS S3](https://aws.amazon.com/s3/)
#### Design Tools —
  + Wireframing: [Moleskine](http://www.moleskine.com/collections/model/product/squared-soft-notebook-large)
  + Experience / Visual Design: [Sketch](https://sketchapp.com/)
  + Image Editing: [Photoshop](http://www.adobe.com/products/photoshop.html)
  + Icon Design: [Illustrator](http://www.adobe.com/products/illustrator.html)
  + Photography: [Canon EOS Rebel XT](https://www.amazon.com/Canon-Digital-Camera-18-55mm-f3-5-5-6/dp/B0007QKN22?th=1)

#### Development Tools —
  + Text Editor: [Sublime](https://www.sublimetext.com/)
  + Markup: [HTML/CSS](https://developer.mozilla.org/en-US/)
  + Preprocessor: [SASS](http://sass-lang.com/)
  + Interactivity: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
