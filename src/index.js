let display = document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll(".button"));


buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "←":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                // Eval() --> verilen ifadeyi bir JS kodu olarak algılar:
                try {
                    if (display.innerText === "") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Lütfen Sayı Giriniz!',
                        })
                        break;
                    }
                    display.innerText = eval(display.innerText);
                } catch {
                    // display.innerText = "Error!"
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error!',
                    })
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})
