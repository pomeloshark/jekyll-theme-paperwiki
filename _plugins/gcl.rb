# usage: {% gcl [abbreviation] [grammatical category] %}


module Jekyll
   module Tags
      class RenderGramCatLabelTag < Liquid::Tag

         # initialize is called when we encounter the {% gcl %} Liquid tag; 'gcl' is the tag name and anything immediately after it is passed in via the second argument
         def initialize(tag_name, text, tokens)
            super
            @text = text
         end

         def render(context)
            "<abbr class=\"gcl\" title=\"Ergative case\">#{@text}</abbr>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [gcl], and the class that implements it [RenderGramCatLabelTag].
Liquid::Template.register_tag("gcl", Jekyll::Tags::RenderGramCatLabelTag)
