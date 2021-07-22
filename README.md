# Blog firebase

![preview](https://github.com/Pavel-Sol/blog-firebase/blob/master/preview/preview.jpg)

## О проекте

Данный проект представляет собой блог. Фронтенд реализован с использованием React JS, бэкенд с использованием Firebase.
Для проверки можно использовать: логин test123@mail.ru, пароль test123

### Функционал

- Регистрация / авторизация (Firebase auth)
- Сохранение дополнительной информации о юзере, возможность изменять инфо в профиле (Firebase firestore),
  загрузить фото профиля (Firebase storage)
- Добавление поста. Текст, заголовок поста, время создания, инфо об авторе и ссылка на прикреплённое фото
  хранятся в Firebase firestore, прикреплённое фото(если есть) хранится в Firebase storage
- Возможность оставлять комментарии к посту, сохранение в Firebase database.
- Прелоадер во время загрузки
- Всплывающие уведомления об успешной/не успешной регистрации, добавлении поста, комментария и тд.

### Файловая структура

```
src
├── assets
│   └── images
├── components
│   ├── pages
│       ├── CreatepPost
│       ├── Home
│       ├── Post
│       ├── Profile
│       ├── SingIn
│       └── SingUp
│   ├── AppRouter
│   ├── MainPreloader
│   ├── NavBar
│   ├── PostCard
│   └── PostComments
├── firebase
│   ├── fbConfig.js
│   └── fbUtils.js
├── store
│   ├── actions
│       ├── authActions.js
│       ├── genericActions.js
│       └── postActions.js
│   ├── reducers
│       ├── authReducer.js
│       ├── genericReducer.js
│       ├── postReducer.js
│       └── rootReducer.js
│   ├── actionTypes.js
│   └── index.js
├── utils
│   ├── alert.js
│   └── utils.js
├── app.js
├── index.js
└── inndex.css
```

### Стек

- firebase
- react JS
- materialize-css
- react-router-dom
- redux
- redux-thunk

### Деплой

[ссылка](https://blog-firebase.vercel.app)
