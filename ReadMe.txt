Simple ToDo App with django and react

## Please clone this App from gitlab and switch to dev repository:
git clone https://github.com/mohank524/DMS.git
cd DMS/
git checkout dev

## Folder Structure

After creation, your project should look like this:

```
.
├── dms_react
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   ├── __init__.py
│   │   └── __pycache__
│   │       └── __init__.cpython-37.pyc
│   ├── models.py
│   ├── __pycache__
│   │   ├── admin.cpython-37.pyc
│   │   ├── __init__.cpython-37.pyc
│   │   ├── models.cpython-37.pyc
│   │   ├── urls.cpython-37.pyc
│   │   └── views.cpython-37.pyc
│   ├── static
│   │   ├── bundles
│   │   │   ├── main-412621493558c77c726b.js
│   │   │   └── main-ffb8202229db1315df72.js
│   │   └── js
│   │       ├── index.js
│   │       ├── styles.css
│   │       ├── TodoForm.js
│   │       ├── TodoList.js
│   │       ├── useInputState.js
│   │       └── useTodoState.js
│   ├── templates
│   │   ├── index.html
│   │   └── static
│   │       └── js
│   │           └── index.js
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── dms_test
│   ├── asgi.py
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── __init__.cpython-37.pyc
│   │   ├── settings.cpython-37.pyc
│   │   ├── urls.cpython-37.pyc
│   │   └── wsgi.cpython-37.pyc
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── jest.config.json
├── manage.py
├── package.json
├── package-lock.json
├── ReadMe.txt
├── webpack.config.js
└── webpack-stats.json


```

### `npm start`
npm i --save
./node_modules/.bin/webpack --config webpack.config.js

python3 manage.py runserver


Runs the app in the development mode.<br>
Please click ( http://127.0.0.1:8000/api) to view it in the browser.

