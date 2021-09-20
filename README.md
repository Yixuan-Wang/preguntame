<p align='center'>
  <img src='public/favicon.svg' alt='Pregúntame' width='128'/>
</p>

<div align='center'>
<h1>Pregúntame</h1>
<p>[pɾeˈɣuntame], Spanish for 'you-ask-me'<br/>An integrated search application with minimalism designs.</p>
<img src="https://img.shields.io/github/v/release/yixuan-wang/preguntame?color=%231682ee&label=release" alt="Latest version">
</div>

<br/>

## Features

- Use configuration files(currently using Gitee Gists), easy to expand or sync across all devices.
- Minimalism design. Simply type directives to launch search. Also compatible with full-width characters when using Japanese IME.

## Configuration

Fill in your Gitee access token(authorized with gist permission) and Gitee Gist ID in the configuration panel(suitcase button). Your Gitee gist filename should be `engines.yaml`. Then use sync button to sync manually.

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

You may use multiple directives to search in multiple search engines, but this feature might not be available because of popup blockers.

For example(using the configuration above):

- `@b hello world` search 'hello world' in Bing.
- `@d hello world @bd` search 'hello world' in DuckDuckGo and Baidu at the same time. 
- `＠ｄ　ハロー・ワールド` search 'ハロー・ワールド' in DuckDuckGo. The full-width directives and whitespaces are recognized.
- `\@github.com` search '@github.com'.

