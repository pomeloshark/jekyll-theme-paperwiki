---
   layout: collections
   title: All wiki articles
   permalink: /wiki
---

<ul class="collections_list">
   {% for wiki in site.wiki %}
      <li>
         <a href="{{ wiki.url }}">{{ wiki.title }}</a>
      </li>
   {% endfor %}
</ul>
