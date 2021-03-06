[![Build Status](https://travis-ci.org/andela-foladipo/news-flash-cp1.svg?branch=develop)](https://travis-ci.org/andela-foladipo/news-flash-cp1)
[![Coverage Status](https://coveralls.io/repos/github/andela-foladipo/news-flash-cp1/badge.svg?branch=develop)](https://coveralls.io/github/andela-foladipo/news-flash-cp1?branch=develop)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Code Climate](https://codeclimate.com/github/andela-foladipo/news-flash-cp1//badges/gpa.svg)](https://codeclimate.com/github/andela-foladipo/news-flash-cp1/)

# Welcome

Welcome to News Flash! This project gives you access to high quality, cutting edge news from 
sources worldwide. It is also designed to be intuitive and easy to use, all with a 
great, responsive UI. To see a live version of this project, please visit [this link](https://news-flash-cp1-staging.herokuapp.com/).

## Table of Contents

  1. [Tech stack](#tech-stack)
  1. [Installation and setup](#installation-and-setup).
  1. [FAQ](#faq)
  1. [License](#license)

## Tech stack

This project uses a host of modern technologies. The core ones are:
- ECMAScript 6: Also known as ES2015, this is the newest version of Javascript with 
next-generation features like arrow functions, generators, enhanced object literals, 
spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.

- [NodeJS](https://nodejs.org): NodeJS is a server-side JavaScript runtime engine built 
on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building 
web apps. Please visit [this link](https://nodejs.org) for more details.

- [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/react-dom.html): 
These were developed by Facebook and are used for building web pages that are structured as a collection of 
components. These components are kept as independent as possible. See [this link](https://facebook.github.io/react/).

- [The Flux architecture](https://facebook.github.io/flux/): This is a design architecture for building stable 
web apps with, among other things, a unidirectional flow of data. See [this link](https://facebook.github.io/flux/) 
for details.

- [Firebase](https://firebase.google.com/): This project makes use of various components of 
[the Firebase suite](https://firebase.google.com/), including Firebase Authentication.

## Installation and setup

Here are the steps you need to follow to run this project on your computer:
- **Install NodeJS**: You may visit [this link](https://nodejs.org/en/download/) for complete 
instructions on installing NodeJS on your computer.

- **Open a terminal/command prompt** on your computer and `cd` into your preferred path/location.

- **Clone this repo**: Enter this command in the terminal:

```bash
git clone https://github.com/andela-foladipo/news-flash-cp1.git
```

- **Install dependencies**: Do so by running the following command:

```bash
npm install
```
Note: `npm` is a component of NodeJS that serves as its package manager. So, it comes along with installing NodeJS.

- **Create a Firebase project**: This project uses [Firebase Authentication Admin SDK](https://firebase.google.com/docs/auth/admin/) on the server for user authentication, so you'll need to create a 
Firebase project. Please visit [this link](https://firebase.google.com/docs/web/setup) for instructions on creating 
a Firebase project and [this link](https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app) for 
how to add the Firebase Authentication Admin SDK to your project. The latter will make you download a file 
that contains the private key for your Admin SDK account. Take careful note of where you save it.

- **Configure the project with your Admin SDK**: In the root of this project, create a directory/folder 
and name it `privateFiles`. Then, move the file with your Admin SDK private key (from the step above) 
into that directory/folder and rename the file `firebaseAdminServiceAccount.json`.

- **Build the project**: This will compile all the project's source code into HTML, CSS and JS files. In 
the terminal/command prompt, enter the following command:

```bash
npm run build
```

- **Run the project**: This will run the project on your computer so that you can browse it yourself. In the 
terminal/command prompt, enter the following command:

```bash
npm start
```

- **Open a web browser of your choice and visit `http://localhost:5000`. Voila! It's alive!**

## FAQ

- **What if I want to use another port?**

That's easy. In the root of the project. create a file named `.env` and add the following line to it:

```bash
PORT=<your_desired_port>
```

where <your\_desired\_port> is the port you want to use. So, if you want to use port `8080`, you will write:

```bash
PORT=8080
```

## License

This project is authored by [Folusho Oladipo](https://google.com/search?q=Folusho+Oladipo) and is licensed 
for your use, modification and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License). 
Feel free to hack, extend and share it!
