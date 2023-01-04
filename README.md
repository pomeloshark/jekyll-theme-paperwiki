# jekyll-theme-paperwiki

The intent of this theme is to get all the code out of the way and to allow you to write Markdown articles; the best way to do that is to install the theme as a gem. However, if you want to tinker with the code, just download this repository.

This theme is not mobile friendly, as I personally do absolutely no worldbuilding on mobile and thus my development skills are lacking. There is also no dark mode or other alternate colour scheme, but please feel free to fork this project and add whatever functionality it's missing.



## Usage

In case you're unfamiliar with it, a basic Jekyll site includes the following:
+ The `_includes` folder contains snippets of HTML that are frequently reused on pages throughout the website. This saves us from having to copy and paste the HTML on multiple pages, and we only have to edit it in one file in order to change every instance of it.
+ The `_layouts` folder contains the formatting for different types of pages, meaning that instead of formatting each page individually we can just specify which layout template to use.
+ The `_sass` folder contains all the styling for the site, written in SCSS.
+ The `_site` folder contains everything that Jekyll outputs when it builds the site. Don't edit anything in this folder, as it will be rewritten the next time you serve the site.
+ The `assets` folder contains things like fonts, images, and Javascript files. It also contains a `.scss` file importing all of your SCSS so that Jekyll can convert it to regular CSS.

This theme comes with all of these prepackaged, so most of what you have to do is edit the `_config.yaml` file. The theme has some default config set already, but you can override these in your own config file if you wish. You can also add any of the above folders with includes, layouts, or SCSS to override the theme's own files. For example, you will want to add your own `assets` folder to store your own images, including one titled `favicon.png` in order to override the placeholder one i've included.



## Installation

[Install Jekyll](https://jekyllrb.com/docs/). Create a new site by running the following in your terminal:

```
$ jekyll new MYSITENAME
```

This will give you a very bare bones Jekyll site, with an index page, a folder for blog posts, a config file, and a Gemfile. You'll have to do a little setup to make it usable with this theme. Here's what the directory should look like:

```
.
├── _pages/
│   ├── wiki/ # In here is where your organizational pages for your wiki will go.
├── _posts/ # If you want to write blog posts, they go in here.
├── _site/
├── collections/
│   ├── _wiki/ # In here is where all your articles will go, in markdown or html files.
├── _config.yml
├── 404.html
├── about.md
├── Gemfile
├── index.md
```

(Don't worry about the .gitignore or the Gemfile.lock.)

(You can also move your `_posts` folder into your `collections` folder if you want; I find it makes things a little neater.)

To use this theme, open your Jekyll site's `Gemfile`, delete the line that says `gem "minima"` and replace it with this line:

```ruby
gem "jekyll-theme-paperwiki", "~> 0.1.2"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-paperwiki
```

And then execute:

```
$ bundle
```

Or install it yourself as:

```
$ gem install jekyll-theme-paperwiki
```

To serve your site locally, navigate into the site's directory and run:

```
$ bundle exec jekyll serve
```

Navigate to your localhost and...you will see an empty page. This is because the layout in the default `index.md` is not set properly. Open this file and change the layout like so:

```yaml
layout: launchpad
```

This will show you the default wiki homepage. The three links - explore, contents, and random page - link to pages that are included with the theme, and consist of pregenerated content based on the wiki articles you've written. Now you can start adding articles in your `_wiki` folder.

### Using the wiki

All of your wiki pages should be written in markdown, and you must begin each `.md` file like so:

```
---
---
```

Between these two lines is where you include *front matter*, such as specifying the layout or the permalink to the page. However, you can leave the front matter blank - wiki pages have layouts and permalinks set by default in the theme's config file, and you only need to specify them if you want to override the defaults. You also do not need to specify a title for the page, as it is automatically taken from the filename. All you absolutely need is the two triple-dashed lines, as Jekyll needs it to know that the front matter is there in order to output the page.

​

## Config

By default, PaperWiki is set up to just be a collection of articles, with a handful of navigational pages, similar to Wikipedia. The articles are organized into the `collections` folder, in a subfolder titled `_wiki`. This is defined in the theme's config file like so:

```yaml
collections_dir: collections
collections:
   wiki:
      output: true
      permalink: /:collection/:name
```

`/:collection/:name` means the url to each wiki entry will be `wiki/article_title` without the article file extension.

However, if you would like to have additional collections akin to the Wikimedia Foundation's other projects - such as Wikisource, Wikispecies, or Wiktionary - then you can specify them in the same format as above, also under the `collections` key:

```yaml
   collection_name:
      output: true
      permalink: /:collection/:name
```

Make sure to add the corresponding folders within `collections`, including the preceding underscore: `_literature`, `_dictionary`, etc.

Add into your `_config.yml`:

```yaml
multi_projects: true
```

You will also need to add a data file listing your projects: create a folder titled `_data` and inside it a file titled `projects.yml`. Within it you need to list the following, formatted in the same way:

``` yaml
- name: Wiki
  link: /wiki
  icon: ri-global-line
  desc: A brief description here
```

For the icon, find one you like from RemixIcon and copy the code.

This will add links to each different collection on your homepage, and allow you to limit the scope of your searches to a single collection or expand it to cover all of them at once. You do not need to do anything to



## Development

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-paperwiki.gemspec` accordingly.



## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).



## Credits

This theme uses the fonts [Inter](https://rsms.me/inter/), [Libertinus Serif](https://github.com/alerque/libertinus), and [Liberation Mono](https://fontlibrary.org/en/font/liberation-mono), all of which are released under the SIL Open Font License; and the icon font [RemixIcon](https://remixicon.com/), which is available under the Apache License 2.0. The [example favicon](https://www.flaticon.com/free-icon/toucan_3002355) is by Freepik at Flaticon.

The search function uses [Lunr.js](https://lunrjs.com/).
