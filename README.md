# kyletimmermans.github.io


## ToDo

<div>-Mobile Version</div>
<div>&ensp;&ensp;-Make all pages mobile (CVE, projects, about, etc) so they all have fixed hamburger menu</div>
<div>&ensp;&ensp;&ensp;&ensp;-Change time? With site.time?</div>

</br>

# Notes
### POSTS NEEDS DATE IN FILENAME WITH yyyy-mm-dd format in the front
### To use gists with image, create gist. Then push image, get raw image url, update link on gist. Finally, edit the gist url (?file=) to include just the one part of the gist with the new name, just copied, not the whole thing that would repeat any standalone images
### jsincluded > home(jsincluded) > index.html(home(jsincluded)) A.K.A. jsincluded is essentially default layout for the homepage but with all the javascript things needed
### Timelapse vid hosted on storm - https://storm.cis.fordham.edu/~ktimmermans/croatia.webm
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
### Can't use if else with Jekyll in default.html, just make two if statements with each condition we need
