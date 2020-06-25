# TINY URL

RESTApi which returns a shorten url and retrieves shortened urls mongodb database.

---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.3

    $ npm --version
    6.14.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/beauvilerobed/urlshortener.git
    $ cd urlsshortener
    $ npm install

## Running the project

    $ npm start

# Quick start to url shortener API
# 1.
### URL

  `/api/url/shorten`

### Method:
 
 `POST`

### Data:

     `{
        contentType: "application/json;charset=utf-8",
        data: longUrl
      }`
       
## Success Response:

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8

    {
      "_id": id,
      "longUrl": longUrl,
      "shortUrl": baseUrl/urlCode,
      "urlCode": urlCode,
      "date": date_o_fPOST,
      "__v": 0
    }
 
## Error Response:

  `401 UNAUTHORIZED 
   { error : "Invalid long url" }`
   
# 2.
### URL

  `/:code`

### Method:
 
 `GET`

## Required:

redirect to long or original URL

    code=[urlCode]
 
# 3.
### URL

  `/api/url/shorturls`

### Method:
 
 `GET`

retrieves database in json format

# 4.
### URL

  `/api/url/shorturls/:id`

### Method:
 
 `GET`

## Required:

retrieves specific data from database in json format

    id=[_id]
  
## Notes:

- By default port SET to 5000 in `/shorten/index.js`. If altered, must change port in `/shorten/Dockerfile.js`, `/shorten/docker-compose.js`, and `/shorten/config/default.json` to the same exact thing.



# Docker Node MongoDB

### Run in Docker
```bash
docker-compose up
# use -d flag to run in background
```

### Tear down
```bash
docker-compose down
```

### To be able to edit files, add volume to compose file
```bash
volumes: ['./:/usr/src/app']
```

### To re-build
```bash
docker-compose build
```
