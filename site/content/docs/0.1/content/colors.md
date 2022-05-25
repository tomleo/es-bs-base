---
layout: docs
title: Colors
description: es-bs-base colors
group: content
toc: true
---

# Colors

## Pallet

<div class="row">
  {{< theme-colors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
      <div class="p-3 mb-3 text-monospace bg-{{ .name }} {{ if (or (eq .name "light") (eq .name "warning")) }}text-dark{{ else }}text-white{{ end }}">
        <strong class="d-block">${{ .name }}</strong>
        <small>{{ .hex }}</small>
      </div>
    </div>
  {{ end -}}
  {{< /theme-colors.inline >}}
</div>

## Grays

<div class="row mb-3">
  <div class="col-md-4">
    {{< theme-colors.inline >}}
    {{- range $.Site.Data.grays }}
      <div class="p-3 text-monospace swatch-{{ .name }}">
        <strong class="d-block">$gray-{{ .name }}</strong>
        <small>{{ .hex }}</small>
      </div>
    {{ end -}}
  {{< /theme-colors.inline >}}
  </div>
</div>
