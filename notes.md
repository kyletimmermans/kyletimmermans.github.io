# <div align="center">ToDo</div>
- [ ] Bootstrap the video into mobile homepage too - https://medium.com/just-goe-frontend-adventures/how-to-fullscreen-background-autoplay-video-on-mobile-in-2018-208dfee26bc1

</br>

# <div align="center">Notes</div>
### POSTS NEEDS DATE IN FILENAME WITH yyyy-mm-dd format in the front
### To use gists with image, create gist. Then push image, get raw image url, update link on gist. Finally, edit the gist url (?file=) to include just the one part of the gist with the new name, just copied, not the whole thing that would repeat any standalone images
### jsincluded > home(jsincluded) > index.html(home(jsincluded)) A.K.A. jsincluded is essentially default layout for the homepage but with all the javascript things needed
### Timelapse vid hosted here - https://kyletimmermans.github.io/croatia.webm
### Fix video size: https://stackoverflow.com/questions/42306807/css-background-video-sizing-issue-with-large-videos
### homeheader.html added to includes so that jsinclude.html can use it. A.K.A. Header is translucent for homepage and text brightens up and that is only possible by adding a new site header class called site-header-home in header.scss in assets.
### home > jsinclude.html > homeheader.html > header2.scss > .site-header-2
<div>&ensp;&ensp;-Replace all white in this new header.scss file with translucent</div>
<div>&ensp;&ensp;-Add -2 to every class name so we don't mix them as two global classes in both header2.scss and homeheader.html</div>
<div>&ensp;&ensp;-Add header2.scss to -sections-dir.scss</div>

### If you want to add more projects with picutre boxes, might have to change a number variable in config.yml
### homedefault.scss to remove underlined text in homepage (container-3 and posts-wrapper-3)
### homefooter.html uses homefooter.scss
### videobg css needs "position: absolute" instead of "fixed" so we can scroll down
### Scroll past div to change text from white to black - https://stackoverflow.com/questions/37513628/check-if-scrolled-past-div-with-javascript-no-jquery
### Delay print https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
### Fix Добро пожаловать becoming 2 lines by adding "white-space: nowrap; overflow: hidden;" to "centered" css class
<div>&ensp;&ensp;-Add to "Enjoy your stay!" text div and add "centered" class as well and fix "translateY" lines</div>

### Detect mobile browsers to serve mobile homepage instead - https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
### For SASS colors, use RGB() instead of rgb()
### mobile_index.html > homeMobile.html > mobileForHome.html
### Hover for mobile - See mobileheader.html in the includes file
### CNAME here and DNS settings pointing here from www.kyles.world
### Setup ALIAS record that points kyles.world to www.kyles.world  (Had to wait 10 mins for propagation)
### Hamburger menu fix - Toggle between display block and none to show on click (no more :hover) and then toggle backgroundColor between white and gray, and finally, set the dropdown-content box to top: 100% because this is relative to the the dropbtn
### To fix all mobile page headers (CVE, Projects, etc), fix default.html and check for mobile and docment.createElement() as necessary
### For Jekyll Liquid tags (variables that use {}) "Front matter" must be added "--- ---"
### Add in safe apostraphes by using \\'
### mobilheader.html had to be minified and hard coded into the layout: default.html
<div>&ensp;&ensp;-Hardcoded w/o its original javascript, that javascript is found further down in default.html</div>
<div>&ensp;&ensp;-Want to fix mobileheader.html in includes? Place it in default.html in layouts b/c it's hardcoded there</div>

### Handle mobile resume pdf redirecct javascript in default.html
### CVE Github Gist Fix: Host gist locally and don't import as src file.js (Full github gist css and html can be copied in full)
<div>&ensp;&ensp;-Inspect element on page that only has normal gist embeded and copy everything</div>
<div>&ensp;&ensp;-To make it content, just remove html, body, and head tags and minify it with http://minifycode.com/html-minifier/</div>
<div>&ensp;&ensp;-Should be all the code beginning with link rel and finish with heart from github</div>
<div>&ensp;&ensp;-String escapes needed for script tags (Back slashes)</div>
<div>&ensp;&ensp;-Article tag escape (Closed to begin code and an open one for the end</div>
<div>&ensp;&ensp;-Apostrophe escapes (Back slashes)</div>
<div>&ensp;&ensp;-Add an extra space after the heart where it says "with heart by GitHub"</div>

### IF YOU MAKE EDITS TO CVE GISTS IN OFFICIAL GITHUB GISTS, YOU MUST UPDATE IT HERE INSIDE cves.html

<div>&ensp;&ensp;-Permalinks put in main pages so they are accessible outside of /pages/ and without .html by removing item.file to item.name in layouts/default.html, includes/header.html, includes/homeheader.html, includes/mobileheader.html. Have to do this for the normal view and the dropdown view.
| downcase to fix endpoint names after the /

<div>&ensp;</div>
<div>&ensp;&ensp;-When putting in a project post, the title cannot have an apostrophe so use this code instead: &"#39;  but just remove the quote in there

### Don't make website make new connections in href, e.g. '../assets/croatia.webm' instead of 'https://github.com/croatia.webm'. It's already loaded, don't load again
