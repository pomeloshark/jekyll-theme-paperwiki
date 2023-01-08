# usage: {% ipa /phonemic text/%}
# usage: {% ipa [phonetic text]%}

module Jekyll
   module Tags
      class RenderPhoneticTag < Liquid::Tag

         # initialize is called when we encounter the {% ipa %} Liquid tag; 'ipa' is the tag name and anything immediately after it is passed in via the second argument
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

# The register_tag method takes two arguments: the user-facing name of the tag [ipa], and the class that implements it [RenderPhoneticTag].
Liquid::Template.register_tag("ipa", Jekyll::Tags::RenderPhoneticTag)
