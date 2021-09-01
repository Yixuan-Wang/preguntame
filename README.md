<style>svg { vertical-align: text-bottom; }</style>

<p align='center'>
  <img src='public/favicon.svg' alt='Pregúntame' width='256'/>
</p>

<div style="text-align: center">
<h1 style="margin-bottom: 0.1em">Pregúntame</h1>
<p>[pɾeˈɣuntame], Spanish for 'you-ask-me'</p>
<img src="https://img.shields.io/github/v/release/yixuan-wang/preguntame?color=%231682ee&label=release" alt="Latest version">
</div>

<br/>

A integrated search application with minimalism designs

## Features

- Use configuration files(currently using Gitee Gists), easy to expand or sync across all devices.
- Minimalism design. Simply type directives to launch search. Also compatible with full-width characters when using Japanese IME.
- Ability to search in multiple services at the same time.

## Configuration

Fill in your Gitee access token(authorized with gist permission) and Gitee Gist ID in the configuration panel 
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.2em" height="1.2em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2h4z" fill="currentColor"></path></svg>. Your Gitee gist filename should be `engines.yaml`. Then use <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 18a6 6 0 0 1-6-6c0-1 .25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12a8 8 0 0 0 8 8v3l4-4l-4-4m0-11V1L8 5l4 4V6a6 6 0 0 1 6 6c0 1-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12a8 8 0 0 0-8-8z" fill="currentColor"></path></svg> to sync manually.

An example of the `engines.yaml` file:
```yaml
bing: # key, not used in the app
  name: Bing # name displayed in the app
  pattern: 'https://www.bing.com/search?q={}' # use `{}` as placeholder of the search string
  shorthand: b # shorthand used in directives
baidu:
  name: Baidu
  pattern: 'https://www.baidu.com/s?word={}'
  shorthand: bd
duckduckgo:
  name: DuckDuckGo
  pattern: 'https://duckduckgo.com/?q={}'
  shorthand: d
```

It is recommended not to use accent marks, fullwidth counterparts of letters, or punctuations(might be reserved for later use) in shorthands.

## Directives

Currently we have one directive appointing the **search engine**: `@{your_shorthand}`. You can attach this directive anywhere you like in your string, but a whitespace character must be used to separate it with the content you want to search. Use `\` to escape the `@` character

Simply use multiple directives to search in multiple search engines.

For example(using the configuration above):

- `@b hello world` search 'hello world' in Bing.
- `@d hello world @bd` search 'hello world' in DuckDuckGo and Baidu at the same time. 
- `＠ｄ　ハロー・ワールド` search 'ハロー・ワールド' in DuckDuckGo. The full-width directives and whitespaces are recognized.
- `\@github.com` search '@github.com'.

