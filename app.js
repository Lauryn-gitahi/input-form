// let uploadBtn= document.getElementById("btn");
// let book =document.getElementsByClassName('books')

// uploadBtn.addEventListener('click', openDialog);

// function openDialog(){
//     let file=document.getElementById("fileid").click();
// }

// openDialog();

let modal= document.getElementById('myModal');
let btn= document.getElementById('btn1');
var span = document.getElementsByClassName("close")[0]

btn.addEventListener('click', addBookToLibrary);
span.addEventListener('click', closeDialog)

let myLibrary=[];

 function Book(title, author,pages,bookStatus){
        this.title=title
        this.author=author
        this.pages=pages
        this.bookStatus=bookStatus
        this.bookInfo = ()=>{
            console.log(`The ${this.title} by  ${this.author}, has ${this.pages} pages and have  ${this.bookStatus}`);
        } 
    }

function addBookToLibrary(event){
    event.preventDefault

modal.style.display='block'

let inputText= document.getElementById("input").value;
console.log(inputText)
}


function closeDialog(){
    modal.style.display='none'
}

window.onclick= (event)=>{
    if(event.target == modal){
        modal.style.display='none'
    }
}

