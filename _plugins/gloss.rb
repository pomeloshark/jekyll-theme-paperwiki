module Jekyll
   module InterlinearGlossFilter # Liquid just uses the method name as the filter name; there's no extra level of name-mapping like there is with tags and blocks

      def gloss(input) # will be available as the "gloss" filter
         @text = input
#         puts "<tr>"

#         lexemes = @text.split(" ")
#         lexemes.each do |word|
#            puts "<td class=\"gloss_item\">#{word}</td>"
#         end

#         puts "</tr>"

#         morphemic_analysis
#         morphemic_gloss

      end
   end
end

Liquid::Template.register_filter(Jekyll::InterlinearGlossFilter)
