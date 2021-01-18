# kyletimmermans.github.io


### ToDo

<div>-Create home page</div>
<div>&ensp;&ensp;-Welcome fade in and out in different languages</div>
<div>&ensp;&ensp;-add video background to home page</div>
<div>&ensp;&ensp;-make sure footer is visible after scrolling down</div>

</br>

<div>Update all sites with kyletimmermans.github.io when finished</div>

# Notes
### POSTS NEEDS DATE IN FILENAME WITH yyyy-mm-dd format
### To use gists with image, create gist. Then push image, get raw image url, update link on gist. Finally, edit the gist url (?file=) to include just the one part of the gist with the new name, just copied, not the whole thing that would repeat any standalone images
### jsincluded > home(jsincluded) > index.html(home(jsincluded)) A.K.A. jsincluded is essentially default layout for the homepage but with all the javascript things needed
### Timelapse vid hosted on storm - https://storm.cis.fordham.edu/~ktimmermans/timelapse4k.webm
### Fix video size: https://stackoverflow.com/questions/42306807/css-background-video-sizing-issue-with-large-videos
### homeheader.html added to includes so that jsinclude.html can use it. A.K.A. Header is translucent for homepage and text brightens up and that is only possible by adding a new site header class called site-header-home in header.scss in assets.
### home > jsinclude.html > homeheader.html > header2.scss > .site-header-2
<div>&ensp;&ensp;-Replace all white in this new header.scss file with translucent</div>
<div>&ensp;&ensp;-Add -2 to every class name so we don't mix them as two global classes in both header2.scss and homeheader.html</div>
<div>&ensp;&ensp;-Add header2.scss to -sections-dir.scss</div>
### If you want to add more projects with picutre boxes, might have to change a number variable somewhere
