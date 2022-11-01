# "Nice Gadget" Product Catalog 👨‍💻 

[DEMO LINK]( https://oao-a.github.io/product_cards/)

This project is an online electronics store made with React, TS, SCSS, Node.js, SQL etc.

## Installation

Clone this repo and use: 

```bash
npm i
```

## Custom features
While working on the project, we encountered the problem of the lack of a publicly available library for gred, which had the ability to change the number of columns depending on the breakpoints. But we decided to make it ourselves)

We created a Container component that had dysplay: grid in it, as well as global styles for grid-items.

```JavaScript
 <Container>
   <div className="S--1-4 T--3-5 D--5-8">
     Hello, world!🌐👋
   </div>
 </Container>

 --where

 <first letter of the device>--<grid-column-start>-<grid-column-end>

 S - smartphone
 T - tablet
 D - desktop

```
Also inside the container there are breakpoints that affect the horizontal paddings

## Useful Commands

```
npm run devTs - for useing nodemon with TS
npm fix-style - start prettier, eslint and stylelint
npm start / deploy - i think you know 😏
```
This project uses husky with pre-commit, so your code with errors...
![image](https://user-images.githubusercontent.com/108505176/199023283-dcb49dec-e1e2-4a1b-bbf4-008f6e9fb983.png)
