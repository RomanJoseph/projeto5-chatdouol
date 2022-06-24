const msg = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
msg.then(loadMsg)

let msgList = []

function loadMsg(info) {
    const chatBox = document.querySelector("main")

    for (let i = 0; i < (info.data).length; i++) {

        if ((info.data[i].type) === "status") {
            chatBox.innerHTML += `
            <div class= 'status'>
                <span class = 'time'>(${info.data[i].time})</span>
                <span class = 'user'>${info.data[i].from}</span>
                <span class = 'text'>${info.data[i].text}</span>
            </div>`
        }

        if ((info.data[i].type === "message")) {
            chatBox.innerHTML += `
            <div class="msg">
                <div class="normal">
                    <span class = "time">(${info.data[i].time})</span>
                    <span class = "user">${info.data[i].from}</span>
                    <span class = "to">para <strong>Todos</strong></span>
                    <span class = "text">${info.data[i].text}</span>
                </div>
            </div>`
        }

        if ((info.data[i].type === "private_message")) {
            chatBox.innerHTML +=
                `<div class="msg">
                    <div class="reserved">
                        <span class = "time">(${info.data[i].time})</span>
                        <span class = "user">${info.data[i].user}</span>
                        <span class = "to">Reservadamente para <strong>EM CONSTRUÇÃO</strong></span>
                        <span class = "text">${info.data[i].text}</span>
                    </div>
                </div>`
        }
    }
}