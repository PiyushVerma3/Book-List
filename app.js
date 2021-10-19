//book constructor

function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


 
//ui constructor

function UI(){
    // this.addBooktoList = function(book){
    //     console.log(book);
    // }

}

 UI.prototype.addBooktoList = function(book){
     const list = document.getElementById('book-list');
     // create a tablr row element

     const row = document.createElement('tr');
     //insert cols
     row.innerHTML = 
     `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "" class="delete" >X</a></td>
     `;
     list.appendChild(row);

    
    }

    //show alert
    UI.prototype.showAlert = function(message, className){
        //create div
        const div = document.createElement('div');
        //addd classes
        div.classList = `alert ${className}`;
        
        //addd text
        div.appendChild(document.createTextNode(message));
        
        // get parent
        const container = document.querySelector('.container');
        //get form
        const form = document.querySelector('#book-form');
        // insert alert
        container.insertBefore(div , form);


        //timeout after
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);  
    }


    UI.prototype.deleteBook = function(target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    // clear fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
//EVENT Listener

document.getElementById("book-form").addEventListener('submit',
function(e){

    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;    
    
    //isntantiating the book constructor
    const book = new Book(title,author,isbn);

    //instantiate UI
    const ui = new UI();

    //validate
    if(title === '' || author === '' || isbn === ''){
        //error alert
        ui.showAlert('Please fill in all fields','error');
    }
    else {
        ui.addBooktoList(book);

        ui.showAlert('book addded', 'success');

    ui.clearFields();

    }

    

    

    
    e.preventDefault();
})


//event listener for delete

document.getElementById('book-list').addEventListener('click' , 
function(e){

    const ui = new UI();
    ui.deleteBook(e.target);

    //show alert
    ui.showAlert('book removed', 'success'); 
    
    e.preventDefault();
});