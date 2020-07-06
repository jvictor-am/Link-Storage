<h2 align="center">
  Link Storage API
</h2>

## About

Application developed over training by Senior Software Engineering [Emerson Broga](https://emersonbroga.com/) using NodeJS as main technology and much more.
The goal is to be able to create an account where you can store as many Social and Professional Links as you want; Create, List, Edit and Delete links. We can say that
the main focus is to learn and practice the framework, language, libs, etc. <br /> You can find the FrontEnd of this application [here](https://github.com/jvictor-am/Link-Storage-FrontEnd).
<br /> Thanks for the opportunity and teaching, Broga.

## Built with:

- Node (v12.16.1)
- NPM (6.13.4)
- Express (^4.17.1)
- MySQL ("mysql2": "^2.1.0")
- JWT (^8.5.1)
- Bcrypt (^5.0.0)
- Hapi/Joi (^17.1.1)
- Sequelize (^6.2.3)
- REST Client VSCode Extension

## How to install and run on your computer:

<strong>0. Before begin you must have MySQL on your machine/environment and create a Schema 'links'. </strong>

<strong>1. Clone this project and install dependencies</strong>

```
$ git clone https://github.com/jvictor-am/Link-Storage-API.git
$ cd Link-Storage-API
$ npm install
```

<strong>2. Create a .env file and fill the variables below (you may change JWT KEYS if you want):</strong>

```
DB_USER=MySQL user (e.g. root)
DB_PASS=MySQL password
DB_NAME=links
DB_HOST=127.0.0.1

JWT_TOKEN_PRIVATE_KEY=uyfg23iur74-f09jvowrv5regjbve/sdvwkpvroj
JWT_REFRESH_TOKEN_PRIVATE_KEY=uowheioencoiHIONojbiwer1v3r5b91IYBJKHHobh 
```

<strong>3. Run on localhost:3001</strong>

```
$ npm start
```

</br>

---

# Author

[**João Victor**](https://www.linkedin.com/in/jo%C3%A3o-victor-de-andrade-mesquita-848a09122/)

<h2 align="center">
  Thank You!
</h2>
