
for (let i = 0; i < 10; i++) {
    (fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => response.json())
        .then(data => {
            console.log(data.response);

            const mailGen = document.querySelectorAll(".email")
            mailGen[i].innerHTML = data.response

        })
        .catch(error => {
            console.error(error);

        }))
};


