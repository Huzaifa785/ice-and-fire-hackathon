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
                        `<h1 class="heading">📕 ${book.name}</h1>
                        <p>🔢 ISBN: ${book.isbn}</p>
                        <p>📃 Pages: ${book.numberOfPages}</p>
                        <p>📝Author/Authors: ${book.authors}</p>
                        <p>🤵 Publisher Name: ${book.publisher}</p>
                        <p>⏰ Released On: ${book.released}</p>
                        
                        `
        document.body.append(booksContainer)
        booksContainer.append(booksList)
    });
}
getBooks();
