---
date: "2023-01-01T08:00:00-07:00"
title: "Home"
menu:
  main:
    weight: 1
---

This is the default content file for the home page for the simple business theme. You can follow the instructions below to get started.

## Creating New Pages

New pages can be added using the `hugo new filename.md` command when you're in your site's directory. You can nest pages under certain folders by using slashes.

For instance you can create a new page in the articles folder by running `hugo new articles/filename.md`.

New page bundles (gives you the ability to store media only related to that page in the same folder) can be created by making the filename `index.md` in a folder named what would normally be the page name. A filename of `_index.md` instead will create a section, rather than a page bundle.

As an example, let's say you want to create a blog post about an event, organized by year. First you can create a blog section, if it's not already in your site by issuing the command `hugo new blog/_index.md`. Then you can create the post using `hugo new blog/2025/04/event-name/index.md`. Any media can go right into the folder, so you only need to specify the filename to link it.

## Archetypes (Page Templates)

There are a few archetypes or page templates included in this theme. Articles and blog posts (not the section page) should be automatic, everything else you can specify manually by modifying the `hugo new` command with a -k switch.

For instance, if you want to create a new page to appear on the main nav menu, with the permalink of /contact, you can use the following command:

```
hugo new -k main contact.md
```

And then go to your site's content folder, and modify the contact.md file to produce the page that you want.

Available archetypes are as follows:

- main: For a page to show up on the main menu
- footer: Render is set to never, for use on the footer page
- articles: For a date sensitive blog/articles post

## Front Matter

Each page should have a front matter which is between three -'s on both the top and bottom of it. It uses the yaml configuration language. If you see a section with three +'s on either end instead, it will be formatted on toml config language.

I'm more familiar with yaml so I generally write my files for that. But the main difference you will see is toml will use an = sign between the key and value, and yaml will use a :.

The values are pretty self explanatory. For instance, changing the value after the title key, will change the page title of the post/page. Changing the weight key after the menu specifications, will change the priority of how it's sorted.

One thing you have to do is chage the draft key from true to false to actually publish posts.

## Overriding this screen

You can override this by using the following command:

```
hugo new _index.md
```

And then edit the text below the frontmatter in the `_index.md` file in your site's `content` folder.

This should replace the home page for your site so this message won't be built with it anymore.