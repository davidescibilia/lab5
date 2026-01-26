window.addEventListener("DOMContentLoaded", e=>{
    let button = document.querySelector("#toServer");
    button.addEventListener("click", e=>{
        let target_button= e.target
        console.log('you clicked on ${target_button.id}');
        fetch("http://127.0.0.1:3000")
            .then(response=> response.json())
            .then(message =>{
                console.log (message);
                let display = document.querySelector("#display");
                display.innertext=message['message'];

            })
            .catch(error=> console.error(error.message))

    })
})
