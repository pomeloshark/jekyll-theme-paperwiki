---
   layout: collections
   permalink: /wiki:all
   title: All wiki articles
---

<ul class="collections_list">
   {% for page in site.wiki %}
      <li>
         <a href="{{ page.url }}">{{ page.name | remove: ".md" }}</a>
      </li>
   {% endfor %}
</ul>
