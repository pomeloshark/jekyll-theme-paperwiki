---
   permalink: /search
   title: Search results
---

<h1>{{ page.title }}</h1>

<dl id="search-results"></dl>

<script>
   window.pages = {
      {% for page in site.wiki %}
         "{{ page.url | slugify }}": {
            "title": "{{ page.title | xml_escape }}",
            "content": {{ page.content | markdownify | strip_newlines | strip_html | jsonify }},
            "url": "{{ site.url | append: page.url | xml_escape }}",
            "path": "{{ page.url | xml_escape }}"
         }{% unless forloop.last %},{% endunless %}
      {% endfor %}
   };
</script>

<script src="/assets/js/lunr.js"></script>
<script src="/assets/js/search.js"></script>
