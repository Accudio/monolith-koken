# Monolith Koken Theme - based on Bootstrap 4
[![GitHub](https://img.shields.io/badge/GitHub-Accudio-0366d6.svg)](https://github.com/Accudio) [![Twitter](https://img.shields.io/badge/Twitter-@accudio-1DA1F2.svg)](https://twitter.com/accudio) [![Website](https://img.shields.io/badge/Website-accudio.com-4B86AF.svg)](https://accudio.com) [![Donate](https://img.shields.io/badge/Donate-Paypal-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=alistair.shepherd@hotmail.co.uk&item_name=Supporting+open+source+projects+by+Alistair+Shepherd&currency_code=GBP)

Monolith is a bold Koken theme with extensive customisability built for photographers and artists. Based on Bootstrap 4, it has lots of styling options, on template files and text entries. If this documentation and [Koken's documentation](http://koken.me/) do not provide the information you require, or you would like to suggest changes or features, please get in touch, our information is below under Further Support.

## Demo
You can find a demo of the theme at [theme.accudio.com/koken/monolith](https://theme.accudio.com/koken/monolith).

## Getting Started
This guide assumes you have a working installation of Koken. If you have yet to set this up, please see the [Koken Installation](http://help.koken.me/customer/portal/articles/632102-installation) Guide. For advanced users it is suggested to ```git clone``` in /storage/themes/ to stay up to date with changes to the theme. Alternatively, you can follow the instrcutions below:

1. Download the latest release zip file: ```wget https://github.com/Accudio/monolith-koken/releases/download/v1.1.1/monolith-koken-v1.1.1.zip```
2. Extract the zip in the /storage/themes/ directory: ```unzip monolith-koken-v1.1.1.zip```.
3. Ensure ```themes/``` includes the folder ```monolith```.
4. Navigate to your Koken admin panel and to 'Site'. Click 'Themes' below the site preview.
5. Click on Monolith and 'Use Theme' button in the top left.

Note: If you don't see Monolith in your themes menu, try refreshing your browser. Also make sure that monolith is in the correct location, with css, js, etc folders under /storage/themes/monolith.

## Koken Documentation
Koken has extensive and detailed documentation on it's operation. If you are not toally familiar with Koken, extremely good documentation and guides are available at [help.koken.me](http://help.koken.me/).

## Theme Settings
### Preloader
The preloader displays a white screen with loading icon until the page has fully loaded. Avoids page not looking as intended while it loads. (default: on)

### Full Width Layout
Makes page fill width of browser window. Only affects browsers with a width > 1200px (most desktops and laptops and large tablets). For background settings, must be disabled.

### Site Title/Logo
Set site title as:

* Text. Displays 'Site Title' and optionally 'Tagline' set in Koken site settings. (default)
* Image. Display image as set in text box below. Enter URL from site root, so for 'website.com/image/logo.png' enter 'image/logo.png'. A PNG with transparency is recommended but not required.
* None. Will hide site title and display nav bar at top of page.

### Background
Set background as a repeating pattern (courtesy of [subtlepatterns](http://subtlepatterns.com/)) or as a configurable solid colour. Only enabled with 'Full Width' disabled. (default: Photography)

### Colours
The background colour of the header and footer, and the colour of the navigation bar and links can be configured using Koken's colour selectors.

### Social Sharing Buttons
At the bottom of content and essay pages, social sharing buttons are displayed. Choose which buttons to enable, untick all to disable entirely.

## Custom Content
A normal Koken installation does not integrate the ability to add custom text and headings to template files (eg, albums, essays) without editing theme files.

This is why Monolith includes a 'Custom Content' system on the pages:

* Home
* Timeline
* Albums
* Contents
* Essays
* Sets
* Favorites
* Login

To use Custom Content on one of these pages, create a 'Page' via the 'Text' menu, with the desired title for the template, and desired template content. Once done, **take note of the 'Page ID'** in the right toolbar.

Navigate to the page on which you want to enable custom content and enable 'Custom Content' in the Template Settings. Insert the Page ID from earlier into the Page ID text box, and wait for the preview to reload. This may take a few seconds. The title and content of the 'Page' will be inserted into that template.

This process onlt needs to be done once (unless Page IDs change) and you simply need to update the appropriate page to update the template.

## Template Settings
In addition to Custom Content, many pages have extra settings specific to that template. These are:

### Home
* Home Header. Set a header between the navigation bar and slideshow. Options are:
  * None (default)
  * Welcome Header. Displays "Welcome to [site title]"
  * Custom Header. Allows custom text inserted into box below
* Home Slideshow. Display slideshow with featured images on homepage (default: on)
* Home Featured Albums. Display featured albums at bottom of home page (default: on)
* Slideshow Controls. Option to disable controls below home page slider (default: on)
* Allow Slideshow Fullscreen. The theme includes a button to play slideshow fullscreen, this can be disabled. (default: on)

### Album, Contents
* Lazy Loading. Only loads visible images. Reduces initial load time but requires waiting for images to load after scrolling (default: on)

### Content
* Content Properties. Table displaying image properties and EXIF data. Includes:
  * Date Captured
  * Categories
  * Tags
  * Camera Make and Model
  * Aperture
  * Exposure
  * Focal Length
  * ISO
* (This enables or disables the entire content properties table. Individual properties can be managed below.)
* Individual Content Properties. Manage individual content properties listed (default: all enabled)

## Theme Assembly
Monolith uses Koken's Lens template system, outlined at [help.koken.me](http://help.koken.me/)

* css/ — contains Bootstrap, Font Awesome, theme styling, and settings styling
* fonts/ — contains Font Awesome files
* img/ — includes optional background patterns
* js/ — includes bootstrap, tether and theme javascript
* layouts/ — reusable html layouts including header, footer and timeline events
* preview.jpg — Preview image for Theme menu
* info.json — Theme configuration and settings
* .lens files — Templates

## Credits
* [Koken Lens template system](http://help.koken.me/customer/portal/topics/375567-theme-development/articles)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
* [Hubspot Tether](http://tether.io/)
* [jQuery](http://jquery.com/)
* [Subtle Patterns](http://subtlepatterns.com/)

## Further Support
If this documentation and the Koken documentation does not answer your questions or you are having issues please contact us on [Github](https://github.com/Accudio/monolith-koken).

[Accudio](https://accudio.com/) also offers theme customisation beyond existing capabilities, custom theme development, and full site development. For more info, check out our website at [accudio.com](https://accudio.com/), or contact us on [GitHub](https://github.com/Accudio), [Twitter](https://twitter.com/accudio), [Facebook](htpps://facebook.com/accudio), or by [email](mailto:info@accudio.com).

## License
Copyright © 2018 [Alistair Shepherd](https://accudio.com/about/accudio/)

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. 

You should have received a copy of the GNU General Public License along with this program. If not, see &lt;[http://www.gnu.org/licenses/](http://www.gnu.org/licenses/)&gt;.