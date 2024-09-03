---
   layout: collections
   title: All works
   permalink: /works:all
---

<ul class="collections_list">
   {% for work in site.works %}
      <li>
         <a href="{{ work.url }}">{{ work.title }}</a>
      </li>
   {% endfor %}
</ul>
