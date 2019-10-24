console.log("Alive!");
document.addEventListener("DOMContentLoaded", ()=>{


});

document.querySelector("#add_book_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");

    // получаем данные формы
        let book = document.querySelector('#add_book').value;
        let author = document.querySelector('#add_author').value;
        let edition = document.querySelector('#add_edition').value;

        let formBook=JSON.stringify({book,author,edition})

            fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: formBook,
            })
                .then((data) => {
                    if (data.status === 200) {
                        // console.log(response.body   );
                        return data.json()
                    }
                })
                .then((data) => {
                    localStorage.setItem('data', data);
                    // console.log(JSON.parse(data));
                    let booksList=JSON.parse(data);
                    let newDiv = document.createElement("div");
                    newDiv.innerHTML = `<h2>Book: ${booksList[0].title}, author: ${booksList[1].name}, edition: ${booksList[2].title}</h2>`;
                    document.querySelector("#books").appendChild(newDiv);

                })
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                })

        }

);