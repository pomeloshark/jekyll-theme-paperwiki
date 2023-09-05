# jekyll-theme-paperwiki

![A screenshot of the PaperWiki homepage.](/assets/images/homepage.png)

For storing your worldbuilding notes! The intent of this theme is to get all the code out of the way and to allow you to write Markdown articles; the best way to do that is to install the theme as a gem. However, if you want to tinker with the code, just download this repository.

For the easiest starting point, I have uploaded a [sample site](https://github.com/pomeloshark/paperwiki-example) that you can download with everything preconfigured, so if you're unfamiliar with Jekyll you can bypass all the setup and get right to it. See that repo for instructions.

This theme is not really intended for blogging, but you could add in the functionality easily enough by creating a `_posts` collection and setting a default post layout in the config file, as there is a dedicated `post` layout, as well as a `blog.md` which will list all of your blog posts on one page. If you have no need for it you can delete this file.



## Installation

[Install Jekyll](https://jekyllrb.com/docs/). If you're using the example site linked above, you can skip ahead to the [using the wiki](#using-the-wiki) section. Otherwise, create a new site by running the following in your terminal:

```
jekyll new SITE_NAME_HERE
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

To use this theme, open your Jekyll site's `Gemfile`, delete the line that says `gem "minima"` and replace it with this line:

```ruby
gem "jekyll-theme-paperwiki", "~> [version]"
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

This will show you the default wiki homepage. The three links - explore, contents, and random page - link to pages that are included with the theme, and consist of pregenerated content based on the wiki articles you've written. Now you can start adding articles in your `_wiki` folder. See my [guide](https://pomeloshark.github.io/jekyll) for further details.



## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).



## Credits

This theme uses the fonts [Inter](https://rsms.me/inter/), [Libertinus Serif](https://github.com/alerque/libertinus), and [Liberation Mono](https://fontlibrary.org/en/font/liberation-mono), all of which are released under the SIL Open Font License; and the icon font [RemixIcon](https://remixicon.com/), which is available under the Apache License 2.0. The [example favicon](https://www.flaticon.com/free-icon/toucan_3002355) is by Freepik at Flaticon.

The search function uses [Lunr.js](https://lunrjs.com/). Random page functionality is from [Jekyll Random Redirect](https://github.com/jekylltools/jekyll-random-redirect).
