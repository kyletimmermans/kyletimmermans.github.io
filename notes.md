# <div align="center">ToDo</div>
- [ ] Bootstrap the video into mobile homepage too - https://medium.com/just-goe-frontend-adventures/how-to-fullscreen-background-autoplay-video-on-mobile-in-2018-208dfee26bc1

</br>

# <div align="center">Notes</div>
### POSTS NEEDS DATE IN FILENAME WITH yyyy-mm-dd format in the front
### To use gists with image, create gist. Then push image, get raw image url, update link on gist. Finally, edit the gist url (?file=) to include just the one part of the gist with the new name, just copied, not the whole thing that would repeat any standalone images
### Fix video size: https://stackoverflow.com/questions/42306807/css-background-video-sizing-issue-with-large-videos
### homeheader.html added to includes so that jsinclude.html can use it. A.K.A. Header is translucent for homepage and text brightens up and that is only possible by adding a new site header class called site-header-home in header.scss in assets.
### videobg css needs "position: absolute" instead of "fixed" so we can scroll down
### Scroll past div to change text from white to black - https://stackoverflow.com/questions/37513628/check-if-scrolled-past-div-with-javascript-no-jquery
### Delay print https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
### Fix Добро пожаловать becoming 2 lines by adding "white-space: nowrap; overflow: hidden;" to "centered" css class
### Detect mobile browsers to serve mobile homepage instead - https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
### For SASS colors, use RGB() instead of rgb()
### CNAME here and DNS settings pointing here from www.kyles.world
### Setup ALIAS record that points kyles.world to www.kyles.world  (Had to wait 10 mins for propagation)
### Hamburger menu fix - Toggle between display block and none to show on click (no more :hover) and then toggle backgroundColor between white and gray, and finally, set the dropdown-content box to top: 100% because this is relative to the the dropbtn
### For Jekyll Liquid tags (variables that use {}) "Front matter" must be added "--- ---"
### Add in safe apostraphes by using \\

<div>&ensp;&ensp;-Permalinks put in main pages so they are accessible outside of /pages/ and without .html by removing item.file to item.name in layouts/default.html, includes/header.html, includes/homeheader.html, includes/mobileheader.html. Have to do this for the normal view and the dropdown view.
| downcase to fix endpoint names after the /
<div>&ensp;&ensp;-When putting in a project post, the title cannot have an apostrophe so use this code instead: &"#39;  but just remove the quote in there

### Don't make website make new connections in href, e.g. '../assets/croatia.webm' instead of 'https://github.com/croatia.webm'. It's already loaded, don't load again
  
<div>&ensp;</div>
<div>&ensp;-Filename dates for files in _posts cannot be in the future, otherwise they do not show up on /projects</div>

<div>&ensp;</div>
<div>&ensp;-Do not use "../" in any href, use absolute file paths with href="/any-home-directory"</div>
<div>&ensp;</div>
  
### Firefox bookmarks and toolbar will not show any normal favicon, SVG or PNG unless there is a favicon.ico at the root of your website directory. However, if you have one that is being set in your &lt;head> tags, that will override it going to your root. Basically, if you have more than one favicon assigned in &lt;head> it will only load one of those, and never check the root dir. So if the user agent is firefox, do not load favicons in &lt;head> and just let Firefox find it in our root dir

<div>&ensp;</div>
<div>&ensp;-https://realfavicongenerator.net/favicon_checker?protocol=https&site=www.kyles.world</div>
<div>&ensp;</div>

<div>&ensp;</div>
<div>&ensp;-Homepages, desktop and mobile, must have their code in _layouts</div>
<div>&ensp;</div>

<div>&ensp;</div>
<div>&ensp;-GH Pages Jekyll Dependency Versions: https://pages.github.com/versions/</div>
<div>&ensp;</div>

<div>&ensp;</div>
<div>&ensp;-CVE gist can be copied as src js (default embed copy)</div>
<div>&ensp;</div>
