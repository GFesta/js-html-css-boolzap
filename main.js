//click sul circle-notch e cambia colore alle scritte
function myFunction() {
    var element = document.body;
    element.classList.toggle("change-color-mode");
}

var app = new Vue ({
    el: '#root',
    data: {
        profile: {
            name: 'Paola (tu)',
            avatar: 'img/avatar_io.jpg'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            
        ],
        contactsIndex: 0,
        chatActive: 0,
        newMex: '',
        search: '',
        //time: '',
        
    },
    methods: {

        //per selezionare la chat/contatto
        selectChat(index) {
            this.chatActive = index;
            //console.log(index);
            //app.autoScroll();
        },

        //creo funzione per aggiungere un messaggio nuovo
        addNewMex: function() {
            var newMessage = {
                date: '10/01/2020 15:30:55',
                text: this.newMex,
                status: 'sent'
            };
            this.contacts[this.chatActive].messages.push(newMessage);
             //azzero l'input
            this.newMex = '';

            
            //arrow function per creare la risposta(reply) dopo 1 secondo
            setTimeout (() => {
                let reply = {
                    date: '24/01/2021 17:42:55',
                    text: 'Ok',
                    status: 'receveid'
                }
                this.contacts[this.chatActive].messages.push(reply);

            }, 1000)
        },


        //creo funzione per la ricerca degli utenti
        filteredList() {
            var userSearch = this.search.toLowerCase();  //variabile che salva i dati input trasformati

            //condizioni if + else per cercare i dati trasformati
            this.contacts.forEach((user, i) => {
                if(user.name.toLowerCase().includes(userSearch)) {
                    user.visible = true;
                } else {
                    user.visible = false;
                }
            });
        },

        //creo funzione x cancellare messaggio
        remove(index) {
            this.contacts[this.chatActive].messages.splice(index, 1);
        },
        //funzione calcola ora
        time(mex) {
            return moment(mex, date, 'DD/MM/YY hh:mm:ss').format("LT");
        },
        timeLastMex(user) {
            var time = user.messages[user.messages.length - 1].date;
            return moment(time, "LT").format("LT");
        },

        autoScroll() {
            vue.nextTick(function (){
                let chatPage = document.getElementById('chat-page');
                chatPage.scrollTop = chatPage.scrollHeight;
            });
        },

        mounted:
            function() {
            this.autoScroll();
        },
    }, 
});