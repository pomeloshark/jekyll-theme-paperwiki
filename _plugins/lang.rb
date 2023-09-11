# usage: {% lang text[0] text[1]     text[2]%}
# usage: {% lang ko      바이 괕 모    iced jelly dish%}
# text[0] = language code
# text[1] = the text, in latin script or not
# text[2] = the translation into english

module Jekyll
   module Tags
      class DefineLanguageTag < Liquid::Tag

         require "shellwords"

         # initialize is called when we encounter the {% lang %} Liquid tag; 'lang' is the tag name and anything immediately after it is passed in via the second argument
         def initialize(tag_name, text, tokens)
            super
            @text = text.shellsplit
         end

         def render(context)
            "<abbr class=\"gloss\" title=\"#{@text[0]}\">#{@text[0]}</abbr>: <strong>#{@text[1]}</strong> <em>#{@text[2]}</em>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [lang], and the class that implements it [DefineLanguageTag].
Liquid::Template.register_tag('lang', Jekyll::Tags::DefineLanguageTag)
