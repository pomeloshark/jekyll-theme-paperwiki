---
   permalink: /blog
---

<h1>Latest posts</h1>

<ul class="blog-list">
  {% for post in site.posts %}
    <li class="blog-entry">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
