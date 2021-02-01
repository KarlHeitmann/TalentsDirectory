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
    people.forEach(person => {
        document.write('<div class="col-lg-3 pb-4">');
        document.write('    <div class="card text-center font-weight-light border-white">');
        document.write(`        <img src="${person.image}" class="shadow-lg rounded" alt="Foto">`);
        document.write('        <div class="card-body bg-white shadow p-3 mb-5 rounded text-dark">');
        document.write('            <div class="info text-left">');
        document.write(`                <h4 class="name">${person.name}</h4>`);
        document.write(`                <p class="profesion">${person.profesion}</p>`);
        document.write('            </div>');
        document.write('            <ul class="icons list-style-none text-white text-decoration-none p-0">');
        document.write('                <li class="d-inline">');
        document.write('                    <a href="https://www.github.com"><i class="fab fa-github-square fa-2x pl-1"></i></a>');
        document.write('                </li>');
        document.write('                <li class="d-inline">');
        document.write('                    <a href="https://www.linkedin.com"><i class="fab fa-linkedin fa-2x pl-1"></i></a>');
        document.write('                </li>');
        document.write('                <li class="d-inline">');
        document.write('                    <a href="https://www.facebook.com"><i class="fab fa-facebook-square fa-2x pl-1"></i></a>');
        document.write('                </li>');
        document.write('            </ul>');
        document.write('            <a href="#" class="btn btn-info my-3">Ver perfil</a>');
        document.write('        </div>');
        document.write('    </div>');
        document.write('</div>');
    });
}