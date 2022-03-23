---
title: into duration
layout: command
version: 0.60.0
usage: |
  Convert value to duration
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> into duration ...rest```

## Parameters

 -  `...rest`: column paths to convert to duration (for table input)

## Examples

Convert string to duration in table
```shell
> echo [[value]; ['1sec'] ['2min'] ['3hr'] ['4day'] ['5wk']] | into duration value
```

Convert string to duration
```shell
> '7min' | into duration
```