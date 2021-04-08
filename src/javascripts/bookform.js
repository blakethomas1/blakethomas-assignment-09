let books = []

export function addBook(b){
    b.preventDefault()
    let book = {
        btitle: document.getElementById('title').value,
        uposter: document.getElementById('url').value,
        aname: document.getElementById('author_name').value,
        bdescription: document.getElementById('description').value,
        byear: document.getElementById('year').value
    }

    if(book.btitle.trim() && book.aname.trim()){
        if(localStorage.books === undefined){
            books.push(book)
        }
        else{
            books = JSON.parse(localStorage.getItem('books'))
            books.push(book)
        }


        localStorage.setItem('books', JSON.stringify(books))

        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${book.btitle}</td>
            <td><img src="${book.uposter}" alt="Poster" width="100px" heigth="200px"></td>
            <td>${book.aname}</td>
            <td>${book.bdescription}</td>
            <td>${book.byear}</td>
        `

        document.querySelector('tbody').appendChild(tr)

        document.getElementById('title').value = ''
        document.getElementById('url').value = ''
        document.getElementById('author_name').value = ''
        document.getElementById('description').value = ''
        document.getElementById('year').value = ''
    }
}

export function loadBooks(){
    if(localStorage.books !== undefined){
        for(let b of JSON.parse(localStorage.books)){
            let tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${b.btitle}</td>
            <td><img src="${b.uposter}" alt="Poster" width="100px" heigth="200px"></td>
            <td>${b.aname}</td>
            <td>${b.bdescription}</td>
            <td>${b.byear}</td>
            `

            document.querySelector('tbody').appendChild(tr)
        }
    }
}