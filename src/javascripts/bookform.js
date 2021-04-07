let books = []

export function addBook(b){
    b.preventDefault()
    let book = {
        btitle: document.getElementById('title').value,
        aname: document.getElementById('author_name').value
    }

    if(book.btitle.trim() && book.aname.trim()){
        books.push(book)
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${book.btitle}</td>
            <td>${book.aname}</td>
        `

        document.querySelector('tbody').appendChild(tr)

        document.getElementById('title').value = ''
        document.getElementById('author_name').value = ''
    }
}