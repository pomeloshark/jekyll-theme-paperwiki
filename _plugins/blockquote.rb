# usage: {% blockquote text[0] text[1] text[2]%}
# usage: {% blockquote text[0] text[1] text[2]%}
# text[0]: the text of the blockquote
# text[1]: the author of the blockquote
# text[2]: the source of the blockquote

module Jekyll
   module Tags
      class RenderBlockquoteTag < Liquid::Tag

         require "shellwords"

         # initialize is called when we encounter the {% blockquote %} Liquid tag; 'blockquote' is the tag name and anything immediately after it is passed in via the second argument
         def initialize(tag_name, text, tokens)
            super
            @text = text.shellsplit
         end

         def render(context)
            "<figure><blockquote>#{@text[0]}<figcaption>#{@text[1]}, <cite>#{@text[2]}</cite></figcaption></blockquote></figure>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [blockquote], and the class that implements it [RenderBlockquoteTag].
Liquid::Template.register_tag("blockquote", Jekyll::Tags::RenderBlockquoteTag)
