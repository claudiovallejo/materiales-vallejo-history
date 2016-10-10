# Middleman Project: Development Check-ins
Development started @ 17:00 CDT on October 8th, 2016

### Day #1
- **Date**: October 8th, 2016 @ 19:40 CDT
- **Update**:
  - Initialized Middleman project
  - Created data models for Spanish content
  - Configured `tachyons.css` to include project style guide
  - Created `_menu.erb`
  - Created `main.erb`
  - Created`index.html.erb`
  - Added `logo.svg`
  - Fixed `policy.json` and `services.json` syntax errors.
  - Worked on `_menu.erb` and centered logo vertically and horizontally in `<nav>`
- **Notes**:
  - Started working with Vim... gave up (for the day). It was taking me a lot of time to edit simple things. After an hour and a half of struggling decided to use Atom instead. Tomorrow I'll give Vim another shot.
  - Took me about half an hour to setup project style guide in `tachyons.css`. There has to be a more efficient way of configuring `tachyons.css` classes...
  - Still need to figure out how to localize content. Should do next.
  - During my break I watched several Vim YouTube videos. Still struggling to navigate between files, but managed to make previous edits in Vim.
  - Struggled to center logo vertically and horizontally. What I was struggling with was in determining what classes to use (`.dt`, `.v-mid`) to achieve that. Googled around for a bit and inspected several Navigation components in the Tachyons Docs. Figured it out. Will finish building partial tomorow.

### Day #2
- **Date**: October 9th, 2016 @ 11:04 CDT
- **Update**:
  - Created responsive hero section in `index.html.erb`
  - Created mobile Products section in `index.html.erb`
  - Created mobile Services section in `index.html.erb` and started working on Contact section.
  - Created `_contact.erb` and included in `index.html.erb`
  - Created `_footer.erb` and included in `main.erb`
  - Imported icons into `images/icons`
- **Notes**:
  - For the contact section, I'm unsure what's the best way to go about building the button components. I found two different ways of building the buttons.
    1. Floats and vertical align middle (wrapped by an `<a>` tag)
    ```html
    <a class="db cf center mb1 pv1 ba b--silver br0125" style="max-width: 17rem;">
      <div class="fl w-20 h-100 tc">
        <%= image_tag "#{ contact.phone.icon_path }" %>
      </div>
      <div class="fl w-80">
        <p class="relative top-025 ma0 lato fw4 f1 dark-gray"><%= contact.phone.number %></p>
      </div>
    </a>
    ```
    2. Table with one table row (wrapped by an `<a>` tag)
    ```html
    <a class="db cf center mb1 pv1 ba b--silver br0125" style="max-width: 17rem;">
      <table class="w-100">
        <tbody>
          <tr>
            <td class="tc w-20">
              <%= image_tag "#{ contact.phone.icon_path }", :class => "v-mid" %>
            </td>
            <td class="w-80">
              <p class="ma0 lato fw4 f1 dark-gray"><%= contact.phone.number %></p>
            </td>
          </tr>
        </tbody>
      </table>
    </a>
    ```
    **Note,** read that `<a>` tags shouldn't wrap block elements because its a **Web Crime.** It doesn't offer any valid reasons why block level elements should be wrapped by inline elements and it doesn't offer any workarounds.

    ...Airbnb nests block elements in an `<a>` tag to create home cards...
    ...Apple nests block elements in an `<a>` for their index slideshow...
    ...Stripe does it as well in their new homepage redesign for the footer cards...

    So? Are the companies I look up to wrong? This is one of the things I find challenging about web dev, there are so many *opinions* on how to build things *correctly*. If you happen to have read this, let me know [@claudiovallejop](https://twitter.com/claudiovallejop), would love to chat and listen to your opinion on this.

### Day #3
- **Date**: October 10th, 2016 @ 13:26 CDT
- **Update**:
  - Created responsive `about.html.erb`
  - Created a local variable for `_contact.erb` to display/hide the header.
  - Added a new image data model in `about.json`.
  - Created `error.erb` and `error.html.erb`. Still need to work on centering content vertically within page (I'll use Adam Morse's `<table>`). I will think about whether or not its necessary to add (and create) a new logo partial just for the error page.
- **Notes**:
  - For `_contact.erb` I created a local variables that shows/hides the `<article>`'s `<header>`. I've read that it is not ok to create an article that doesn't have a header.
  - Will not have a lot of time this week to work on this project. I'll be travelling and working on another client project. But I'll work on it whenever I have a small break.
