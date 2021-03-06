let getBooks = async () => {
    let booksRresponse = await fetch("https://www.anapioficeandfire.com/api/books/?pageSize=50")
    let booksData = await booksRresponse.json()
    // console.log(booksData)
    let booksContainer = document.createElement("div")
    booksContainer.className = "container"
    booksData.forEach(book => {
        let booksList = document.createElement("div")
        booksList.className = "card"
        booksList.innerHTML = 
                        `<h1 class="heading">π ${book.name}</h1>
                        <p>π’ ISBN: ${book.isbn}</p>
                        <p>π Pages: ${book.numberOfPages}</p>
                        <p>πAuthor/Authors: ${book.authors}</p>
                        <p>π€΅ Publisher Name: ${book.publisher}</p>
                        <p>β° Released On: ${book.released}</p>
                        
                        `
        document.body.append(booksContainer)
        booksContainer.append(booksList)
    });
}
getBooks();
