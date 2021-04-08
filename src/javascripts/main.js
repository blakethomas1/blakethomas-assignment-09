// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

//TODO

import { addBook, loadBooks } from './bookform'

if(document.querySelector('#landing')){
    document.getElementById("bookForm").onsubmit = addBook
    window.onload = loadBooks
}
