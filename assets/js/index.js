$(document).ready(function() {
    //Smooth Scroll
    $('a').click(function(event) {
            console.log(this, this.hash)
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function() {
                    window.location.hash = hash
                })
            }
        })
        //Toggle
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
})

const digital_talents = [
    {'name': 'Alejandra Serrano', 'profesion': 'Full stack / Relacionista Pública', 'image': 'assets/img/alejandra.png'},
    {'name': 'Alonso Viales', 'profesion': 'Full stack', 'image': 'assets/img/alonso.jpg'},
]

function templateCards(people) {
    console.log("templateCards");
    let string_html = ''
    people.forEach(person => {
        string_html = string_html + '<div class="col-lg-3 pb-4">';
        string_html = string_html + '    <div class="card text-center font-weight-light border-white">';
        string_html = string_html + `        <img src="${person.image}" class="shadow-lg rounded" alt="Foto">`;
        string_html = string_html + '        <div class="card-body bg-white shadow p-3 mb-5 rounded text-dark">';
        string_html = string_html + '            <div class="info text-left">';
        string_html = string_html + `                <h4 class="name">${person.name}</h4>`;
        string_html = string_html + `                <p class="profesion">${person.profesion}</p>`;
        string_html = string_html + '            </div>';
        string_html = string_html + '            <ul class="icons list-style-none text-white text-decoration-none p-0">';
        string_html = string_html + '                <li class="d-inline">';
        string_html = string_html + '                    <a href="https://www.github.com"><i class="fab fa-github-square fa-2x pl-1"></i></a>';
        string_html = string_html + '                </li>';
        string_html = string_html + '                <li class="d-inline">';
        string_html = string_html + '                    <a href="https://www.linkedin.com"><i class="fab fa-linkedin fa-2x pl-1"></i></a>';
        string_html = string_html + '                </li>';
        string_html = string_html + '                <li class="d-inline">';
        string_html = string_html + '                    <a href="https://www.facebook.com"><i class="fab fa-facebook-square fa-2x pl-1"></i></a>';
        string_html = string_html + '                </li>';
        string_html = string_html + '            </ul>';
        string_html = string_html + '            <a href="#" class="btn btn-info my-3">Ver perfil</a>';
        string_html = string_html + '        </div>';
        string_html = string_html + '    </div>';
        string_html = string_html + '</div>';
    });
    console.log(string_html);
    const card_deck_digital_talents = document.getElementById('digital-talents')
    console.log(card_deck_digital_talents);
    card_deck_digital_talents.innerHTML = string_html;
}