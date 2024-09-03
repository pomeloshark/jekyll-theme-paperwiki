---
   layout: collections
   title: WIP wiki pages
   permalink: /wiki/portal:wips
---

<ul class="collections_list">
   {% for wiki in site.wiki %}
      {% if wiki.wip %}
         <li>
            <a href="{{ wiki.url }}">{{ wiki.title }}</a>
         </li>
      {% endif %}
   {% endfor %}
</ul>
