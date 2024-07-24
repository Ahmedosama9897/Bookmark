var bookNameInput = document.getElementById("book")
var webNameInput = document.getElementById("web")

var bookList = [];
function addbook() {
    var book = {
        bookmark: bookInput.value
    }
    bookList.push(book)
    console.log(bookList);

    bookInput.value = null
    webInput.value = null
}

function validateInputs(element) {

    var regex = {
        book : /^\w{3,}$/ ,
        web  : /^\w{2,}[/.]\w{2,}$/
        }
    if (regex[element.id].test(element.value)) {
        // console.log("match")
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.replace("d-block","d- none")
    } else {
        // console.log("notmatch");
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        element.nextElementSibling.classList.replace("d-none","d-block")

    }

}










// var regex = /^[A-Z][a-z]{2,8}$/
// var str ="Mohamed"

// if (regex.test(str) == true) {
//     console.log("match");
// }
// else{
//     console.log("not match");
// }