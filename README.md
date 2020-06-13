# Яндекс.Практикум

  

  

## Дипломная работа_v1.0.0

  

## NewsExplorer

  

  

### Краткая информация о проекте

  

Разработка сервиса по поиску новостей.

  
  

  

Актуальная версия проекта (v1.0.0) доступна по этой ссылке [https://lsnsky.github.io/news-explorer-frontend/](https://lsnsky.github.io/news-explorer-frontend/)

  

### ПО для выполнения работы:

<li>
Git

<li>
Webpack

<li>
NPM-пакеты:

  

-  #### сборка develop

"@babel/cli": "~7.10.1",
"@babel/core": "~7.10.2",
"@babel/preset-env": "~7.10.2",
"autoprefixer": "~9.8.0",
"babel-loader": "~8.1.0",
"cross-env": "~7.0.2",
"css-loader": "~3.5.3",
"cssnano": "~4.1.10",
"file-loader": "~6.0.0",
"gh-pages": "~2.0.1",
"html-loader": "~1.1.0",
"html-webpack-plugin": "~4.3.0",
"image-webpack-loader": "~6.0.0",
"lodash": "~4.17.15",
"mini-css-extract-plugin": "~0.9.0",
"postcss-loader": "~3.0.0",
"resolve-url": "~0.2.1",
"resolve-url-loader": "~3.1.1",
"style-loader": "~1.2.1",
"url-loader": "~4.1.0",
"webpack": "~4.43.0",
"webpack-cli": "~3.3.11",
"webpack-dev-server": "~3.11.0",
"webpack-md5-hash": "0.0.6"

  
-  #### сборка build:
"babel-polyfill": "~6.26.0",
"core-js": "~3.6.5",
"optimize-css-assets-webpack-plugin": "~5.0.3",
"path": "~0.12.7",
"resolve-cwd": "~3.0.0"
  
  

### Инструкция по сборке:


- **npm run dev** запускает сборку develop и открывает проект на локальном сервере по адресу localhost:8080

-	**npm run build** запускает сборку build и собирает проект в папке dist

-	**npm run deploy** развёртывает проект на сервере gh-pages

  
  

### Итоги этапа по разработке фронтенда:

  

<li>
Репозиторий Git состоит из веток master и level-2

<li>
Webpack и NPM использован для сборки кода

<li>
CSS-код минимизирован, JS-код переведен бабелем из ES6 в ES5, оптимизированы картинки и шрифты

<li>
Сайт проекта NewsExplorer опубликован на хостинге gh-pages
