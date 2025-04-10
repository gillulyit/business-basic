# Business Basic

A theme with no bloat or nonsense to start your dream business.

## Features

Changeable site logo: By either placing your logo file in static/pics/logo.png or using the params.brandlogo key to specify a path to your own file

Built in nav menu: By using the built-in main archetype, you can easily create pages which will add themselves to the site menu. So `hugo new -k main filename.md` will create the content page with the keys necessary to add it to the menu.

Editable footer: The footer is editable by creating a footer.md file and editing that to your preference. To create one which won't clutter your build with its own path and html file, run `hugo new -k footer footer.md`. Then edit your comment.

Social links: You can add social links to your footer by creating url and icon values in the params.social list. Icon values which can be used are "x", "facebook", "messenger", "nextdoor", "lastfm", "github", and "rss". Example below:

hugo.toml
```
...
[params]
...
[[params.social]]
url = "your profile link here"
icon = "x"
label = "Link to X/Twitter"
[[params.social]]
url = "your profile link here"
icon = "facebook"
label = "Link to Facebook"
...
```

Update 4/10/2025: Added label function to apply ARIA label element to links for better screen reader capability.

## Installation

### No source control

If you're not using git on your main site; do the following with a terminal in your site's directory:

```
git clone --depth=1 https://github.com/gillulyit/business-basic.git themes/business-basic
```

Then add the following line to hugo.toml after baseURL, languageCode, and title:

```
theme = "business-basic"
```

### Sites with git

If you're already using git to track changes on your site. You can do the following with a terminal in your site's directory:

```
git submodule add --depth=1 https://github.com/gillulyit/business-basic.git themes/business-basic
```

Then add the following line to hugo.toml after baseURL, languageCode, and title:

```
theme = "business-basic"
```

## Configuration

There are some custom configuration options which can be put in params.

### Slogan

To add a slogan to your site, which will appear below the site title in the desktop layout, add the slogan key and value to hugo.toml. For instance if you want to make the slogan "the best in the business", add the slogan key as follows:

```
...
[params]
...
slogan = "the best in the business"
```

### Overriding logo image path

You can override the logo image path. For instance, let's say you want to use logo.jpg in the pics directory instead, add the following to the site's config file in the params section as shown:

```
...
[params]
...
brandlogo = "pics/logo.jpg"
```

### Hidden Text

You can add hidden text to the bottom of your website as an easter egg for anyone who knows how to view page source or use a browser's devtools. Use the following hiddentext key and value:

```
...
[params]
...
hiddentext = "Your hidden text goes here."
```