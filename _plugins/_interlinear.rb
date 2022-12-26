module Jekyll
   module Tags
      class InterlinearGlossTag < Liquid::Block

         require "shellwords"

         # initialize is called when we encounter the {% interlinear %} Liquid tag; 'interlinear' is the tag name and anything immediately after it is passed in via the second argument
         def initialize(tag_name, text, tokens)
            super
#            @text = text.shellsplit
#            @wordcount = @text[0].length
            # object_lang, morphemic_analysis, morphemic_gloss, target_lang
         end

         def render(context)
#            "<table class=\"interlinear-gloss\"><tbody><tr><td colspan=\"7\">#{@text[0]}</td></tr>" + "<tr><td>#{@text[1]}</td></tr></tbody></table>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [interlinear], and the class that implements it [InterlinearGlossTag].
Liquid::Template.register_tag('interlinear', Jekyll::Tags::InterlinearGlossTag)
