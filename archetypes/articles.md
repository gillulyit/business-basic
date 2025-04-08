---
# This is the frontmatter section between the ---'s
date: "{{ .Date }}" # Date and time in ISO format
title: "{{ replace .File.ContentBaseName '-' ' ' | title }}" # Title of post
---

