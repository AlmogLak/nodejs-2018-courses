# Modules

## Modules 1
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-1)
- Create basic nodejs project

## Module 2
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-2)
- In-memory endpoints
- Static files API 

## Module 3 
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-3)
- Implement authentication middleware
- Implement persistance interface
- Move in-memory api to file system
- Wrap fs callback with async api

## Module 4 
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-4)
- Move persistant api to MongoDB

## Module 5 
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-5)
- WS: Broadcast all users when item is added/removed to the list
- WS: Broadcast when someone click +1/-1 on item
- Pipes: Get item image, pipe to fs, update db imageUrl for local version so that the client will get the local version

## Module 6 
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-6)
- Write unit tests to project

## Module 7
[Presentation](http://dimkinv.github.io/nodejs-course-2018/module-7)
- Publish app with pm2


# Client
## Requirements 
- Chrome
- Node.js
- Yarn

## Installation
1. Go to chrome-extension lib
2. Install dependencies - `yarn`
3. Build - `yarn build`
4. Open Chrome and navigate to [chrome://extensions](chrome://extensions)
5. Click `Load unpacked extension...` and select `build` folder

Group shopping icon should be added to the top bar

To enable web-sockets in module 5, go to [chrome://extensions](chrome://extensions), open Group shopping options and check *My server supports web-sockets*.

# Server
Server should run on localhost:3000
## Endpoints:
### Get all items 
`GET /items`

Response
```
200 OK
{
  items: [
    {
      ...item details
    }
  ]
}
```

### Create new offer
`POST /items`

headers:
```
{
  X-AUTH: attuid
}
```

body:
```
{

}
```

Response:
```
201 Created
{
  ...itemdetails + id
}
```

### Delete offer
`DELETE /items/:id`
headers:
```
{
  X-AUTH: attuid
}
```

Response:
```
204 No content
```

### Join purchase 
`PUT /items/:id`
headers:
```
{
  X-AUTH: attuid
}
```
Response:
```
200 OK
```

### Cancel Joining
`DELETE /items/:id`
headers:
```
{
  X-AUTH: attuid
}
```

Response:
```
204 No content
```


TODO:
Danny: add slide for static files API in module 2
Nabil: add slide for pipes in module 5