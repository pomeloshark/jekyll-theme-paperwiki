module Jekyll
   module Tags
      class RenderPhoneticTag < Liquid::Tag

         def initialize(tag_name, text, tokens)
            super
            @text = text
         end

         def render(context)
            "<abbr class=\"gloss\" title=\"International Phonetic Alphabet\">IPA</abbr>: <span class=\"ipa\">#{@text}</span>"
         end

      end
   end
end

# The register_tag method takes two arguments: the user-facing name of the tag [lang], and the class that implements it [DefineLanguageTag].
Liquid::Template.register_tag("ipa", Jekyll::Tags::RenderPhoneticTag)
