# jekyll-theme-paperwiki

The intent of this theme is to get all the code out of the way and to allow you to write Markdown articles.



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

   $ jekyll new MYSITENAME

This will give you a very bare bones Jekyll site, with an index page, a folder for blog posts, a config file, and a Gemfile. You will want to add a folder called `collections`, and inside of that another folder called `_wiki`.

To use this theme, open your Jekyll site's `Gemfile`, delete the line that says `gem "minima"` and replace it with this line:

```ruby
gem "jekyll-theme-paperwiki"
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

Make sure to add the corresponding folders within `collections`, including the preceding underscore.

Add into your `_config.yml`:

```yaml
multi_projects: true
```

This will add links to each different collection on your homepage, and allow you to limit the scope of your searches to a single collection or expand it to cover all of them at once.



## Development

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-paperwiki.gemspec` accordingly.



## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).



## Credits

This theme uses the fonts [Inter](https://rsms.me/inter/), [Libertinus Serif](https://github.com/alerque/libertinus), and [Liberation Mono](https://fontlibrary.org/en/font/liberation-mono), all of which are released under the SIL Open Font License; and the icon font [RemixIcon](https://remixicon.com/), which is available under the Apache License 2.0. The [example favicon](https://www.flaticon.com/free-icon/toucan_3002355) is by Freepik at Flaticon.

The search function uses [Lunr.js](https://lunrjs.com/).
