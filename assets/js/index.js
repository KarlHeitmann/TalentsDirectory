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

function templateCards() {
    console.log("templateCards");
}