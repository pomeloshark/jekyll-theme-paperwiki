#usage {% main_article [link] %}

module Jekyll
   module Tags
      class RenderMainArticleTag < Liquid::Tag

         # initialize is called when we encounter the {% main_article %} Liquid tag; 'main_article' is the tag name and anything immediately after it is passed in via the second argument
         def initialize(tag_name, text, tokens)
            super
            @text = text
         end

         def render(context)
            "<span class=\"main_article\">Main article: [#{@text}]({% link _wiki/#{@text}.md %})</span>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [main_article], and the class that implements it [RenderMainArticleTag].
Liquid::Template.register_tag("main_article", Jekyll::Tags::RenderMainArticleTag)
