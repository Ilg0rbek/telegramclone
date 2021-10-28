const Contacts = document.getElementById("contacts");
const Chats = document.getElementById('chat');

let data = [
    {
        name: 'Abduvali',
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYwUsLMFhlMXPhwH-yVwjUP31L6ynpvw-LyjHab3wfFeXvfvVJjoIqYVeoVd2C8QL7Hk&usqp=CAU",
        chat: [
            {
                msg: 'Asalomu alekum',
                me: false,
            },
            {
                msg: 'Va alaykum assalam',
                me: true,
            },
            {
                msg: 'Ertaga voqting qanaqa ?',
                me: false,
            },
            {
                msg: ' Nima gap tinchlikmi ?',
                me: true,
            },
            {
                msg: 'Abetdan keyin bir soat bor',
                me: true,
            },
        ]
    },
    {
        name: 'Abduazimjon',
        photo: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoeSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        chat: [
            {
                msg: 'qalesiz oshna ?',
                me: false,
            },
            {
                msg: 'zor oziz qalesiz',
                me: true,
            },
            {
                msg: 'Ertaga voqting qanaqa ?',
                me: false,
            },
            {
                msg: ' Nima gap tinchlikmi ?',
                me: true,
            },
            {
                msg: 'Abetdan keyin bir futbol bor',
                me: false,
            },
        ]
    },
    {
        name: 'Dadam',
        photo: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg',
        chat: [
            {
                msg: 'Yaxshimisan ',
                me: false,
            },
            {
                msg: 'Asalomu alekum dada qalesiz',
                me: true,
            },
            {
                msg: 'Onam yaxshimi',
                me: true,
            },
            {
                msg: 'ha yaxshi hamma',
                me: false,
            },
            {
                msg: 'Qiyinchiliklar yomi',
                me: false,
            },
            {
                msg: 'Puling bormi',
                me: false,
            },
            {
                msg: 'ha dada hammasi yetarli',
                me: true,
            },
        ]
    },
    {
        name: 'X.Shaxzod',
        photo: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?s=612x612',
        chat: [
            {
                msg: 'Yaxshimisan ',
                me: false,
            },
            {
                msg: 'Nima gap sfinks',
                me: true,
            },
            {
                msg: 'O`zing o`shanaqa',
                me: false,
            },
        ]
    },
    {
        name: 'M.Shaxzod',
        photo: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
        chat: [
            {
                msg: 'Qande end zormi',
                me: false,
            },
            {
                msg: 'ha zo`r ',
                me: true,
            },
            {
                msg: 'Qaytasz',
                me: true,
            },
            {
                msg: 'shaxristonda',
                me: false,
            },
        ]
    },
    {
        name: 'Farxot aka TATU',
        photo: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoeSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        chat: [
            {
                msg: 'qalesiz akam ?',
                me: false,
            },
            {
                msg: 'zor oziz qalesiz',
                me: true,
            },
            {
                msg: 'Ertaga voqting qanaqa ?',
                me: false,
            },
            {
                msg: ' Nima gap tinchlikmi ?',
                me: true,
            },
            {
                msg: 'ha futbol bor aka',
                me: false,
            },
        ]
    },
    {
        name: 'O`zim',
        photo: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?s=612x612',
        chat: [
            {
                msg: 'nima gap ',
                me: false,
            },
            {
                msg: 'Tinchuxa',
                me: true,
            },
            {
                msg: 'Yoxshida',
                me: false,
            },
        ]
    },
    {
        name: 'Sherxon',
        photo: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
        chat: [
            {
                msg: 'Qalisan do`stim',
                me: false,
            },
            {
                msg: 'zo`r ',
                me: true,
            },
            {
                msg: 'Qaytasz',
                me: true,
            },
            {
                msg: 'Opshitada',
                me: false,
            },
        ]
    },
];

const setChat = (index) => {
    Chats.innerHTML = "";
    data[index].chat.map((value, item) => {
        const div = document.createElement("div");
        if (!value.me) {
            div.className = "d-flex mb-3";
            div.innerHTML = `
           <img src="${data[index].photo}"
                            alt="" class="rounded-circle user-img me-2">
                        <div class="msg rounded shadow">${value.msg}</div>
        `;
        } else {
            div.className = "d-flex mb-3 justify-content-end";
            div.innerHTML = `
            <div class="msg rounded shadow">${value.msg}</div>
            <img src="${data[index].photo}"
                alt="" class="rounded-circle user-img ms-2">
            `;
        }
        Chats.appendChild(div);
    })

}

const initPage = () => {
    Contacts.innerHTML = "";
    data.map((value, index) => {
        const a = document.createElement('a');
        a.href = "#";
        a.className = "list-group-item  d-flex";
        a.onclick = () => {
            setChat(index)
        }
        a.innerHTML = `
            <img src="${value.photo}"
            alt="${value.name}" class="rounded-circle user-img me-2">
        <div>
            <p class="mb-0">${value.name}</p>
            <p class="mb-0">${value.chat[value.chat.length - 1].msg}</p>
        </div>
        `;
        Contacts.appendChild(a);
    })
    setChat(0);
}
initPage();

