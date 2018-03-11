# {{ title }}
{{ description }}

## Contents
{{#each collections.projects}}{{#if tag}}{{#if contents}}
### [{{ title }}](http://olafjanssen.github.io/projects/{{ tag }})
{{#if start-date}}(*{{ start-date }} &mdash;*){{/if}} *{{ date }}*

{{ description }}
{{/if}}{{/if}}{{/each}}

## The Dark Abyss of Unfinished Content

{{#each collections.projects}}{{#if tag}}{{#if contents}}{{else}}
### [{{ title }}](http://olafjanssen.github.io/projects/{{ tag }})
{{#if start-date}}(*{{ start-date }} &mdash;*){{/if}} *{{ date }}*

{{ description }}
{{/if}}{{/if}}{{/each}}
