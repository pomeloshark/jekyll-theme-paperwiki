---
   layout: collections
   title: All grammars
   permalink: /polyglot/grammars:all
---

<ul class="collections_list">
   {% for grammar in site.grammars %}
      <li>
         <a href="{{ grammar.url }}">{{ grammar.title }}</a>
      </li>
   {% endfor %}
</ul>
