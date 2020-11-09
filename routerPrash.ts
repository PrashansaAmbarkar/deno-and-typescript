import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getBook, addBook, updateBook, deleteBook } from './controllerPrash.ts'

const routerPrash = new Router()
routerPrash.get('/books', getBooks)
.get('/books/:isbn', getBook)
.post('/books', addBook)
.put('/books/:isbn', updateBook)
.delete('/books/:isbn', deleteBook)

export default routerPrash