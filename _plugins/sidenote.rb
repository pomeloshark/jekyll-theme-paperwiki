# usage: {% sidenote %}

module Jekyll
   module Tags
      class RenderSideNoteTag < Liquid::Tag

         require "shellwords"

         # initialize is called when we encounter the {% sidenote %} Liquid tag; 'sidenote' is the tag name and anything immediately after it is passed in via the second argument
         def initialize(tag_name, text, tokens)
            super
            @text = text.shellsplit
         end

         def render(context)
            "<label for='#{@text[0]}' class='margin-toggle sidenote-number'></label><input type='checkbox' id='#{@text[0]}' class='margin-toggle'/><span class='sidenote'>#{@text[1]} </span>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [sidenote], and the class that implements it [RenderSideNoteTag].
Liquid::Template.register_tag("sidenote", Jekyll::Tags::RenderSideNoteTag)
