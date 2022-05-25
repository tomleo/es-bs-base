---
layout: docs
title: Download
description: Download es-bs-base to get the compiled CSS and JavaScript, source code, or include it with npm.
group: getting-started
toc: true
---

NOTE: For if possible projects should opt for installation via `npm` in addition to a bundler like Webpack vs. a CDN

## jsDelivr

CDN version of styles available on [jsDelivr](https://www.jsdelivr.com/)

```html
<link
  rel="stylesheet"
  href="{{< param "cdn.css" >}}"
  integrity="{{< param "cdn.css_hash" >}}"
  crossorigin="anonymous">
<script
  src="{{< param "cdn.js_bundle" >}}"
  integrity="{{< param "cdn.js_bundle_hash" >}}"
  crossorigin="anonymous"></script>
```

You can also get popper & jquery decoupled from the bootstrap code using the following includes

```html
<script
  src="{{< param "cdn.jquery" >}}"
  integrity="{{< param "cdn.jquery_hash" >}}"
  crossorigin="anonymous"></script>
<script
  src="{{< param "cdn.popper" >}}"
  integrity="{{< param "cdn.popper_hash" >}}"
  crossorigin="anonymous"></script>
<script
  src="{{< param "cdn.js" >}}"
  integrity="{{< param "cdn.js_hash" >}}"
  crossorigin="anonymous"></script>
```
