---
layout: page
permalink: /publications/
title: publications
description: An up-to-date list is available on my <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank" title="Google Scholar">Google Scholar</a>.
years: [2023, 2022, 2021, 2018, 2017, 2016]
nav: true
---

<div class="publications">

{% for y in page.years %}

  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
