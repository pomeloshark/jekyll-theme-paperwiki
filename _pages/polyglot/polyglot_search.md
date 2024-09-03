---
   layout: search
   permalink: /polyglot:search
   title: Search results
---

<script>
   window.pages = {
      {% for page in site.grammars %}
         {% include search_results.html %}
      {% unless forloop.last %},{% endunless %}
      {% endfor %}
   };
</script>
