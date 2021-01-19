# kyletimmermans.github.io


### ToDo

<div>Create home page</div>
<div>&ensp;&ensp;-Make sure footer is visible</div>
<div>&ensp;&ensp;-Welcome fade in and out in different languages</div>
<div>Dark mode for rest of pages? (Need white text then) (Discord, Github, Slack color scan) </div>
<div>Fix Github Icon to have green hover and pink/purple instagram hover</div>

</br>

<div>-Mobile Version</div>
<div>&ensp;&ensp;-Recognize mobile script</div>
<div>&ensp;&ensp;-Serve a mobile homepage</div>
<div>&ensp;&ensp;-Fix pdf resume (screenshot each page?)</div>

</br>

<div>Update all sites with kyletimmermans.github.io when finished</div>

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

### If you want to add more projects with picutre boxes, might have to change a number variable somewhere
### homedefault.scss to remove underlined text in homepage (container-3 and posts-wrapper-3)
### Print welcome text: for-loop in a while(1) loop, will just keep going back to beginning of welcome message array

