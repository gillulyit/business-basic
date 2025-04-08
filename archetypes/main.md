---
# This is the frontmatter section between the ---'s
date: "{{ .Date }}" # Date and time in ISO format
title: "{{ replace .File.ContentBaseName '-' ' ' | title }}" # Title of page
menu:
  main: # This and the line above specify to put it on the main menu
    weight: 2 # The weight specifies sorting order. The greater the number the more to the right or down it will fall. Two pages with the same weight will be ordered alphabetically
---

