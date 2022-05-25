const datos = [
    {
        picsum: "https://picsum.photos/id/119/900/600",
        title: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare tortor vitae lectus hendrerit, eget rhoncus metus semper. Vivamus dolor nisl, viverra et aliquet ut, aliquam eu diam. Pellentesque tristique.",
    },
    {
        picsum: "https://picsum.photos/id/20/900/600",
        title: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare tortor vitae lectus hendrerit, eget rhoncus metus semper. Vivamus dolor nisl, viverra et aliquet ut, aliquam eu diam. Pellentesque tristique.",
    },
    {
        picsum: "https://picsum.photos/id/1039/900/600",
        title: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare tortor vitae lectus hendrerit, eget rhoncus metus semper. Vivamus dolor nisl, viverra et aliquet ut, aliquam eu diam. Pellentesque tristique.",
    },

    {
        picsum: "https://picsum.photos/id/50/900/600",
        title: "Lorem ipsum dolor",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare tortor vitae lectus hendrerit, eget rhoncus metus semper. Vivamus dolor nisl, viverra et aliquet ut, aliquam eu diam. Pellentesque tristique.",
    },
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-lg-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ');"></div><div class="col-lg-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ');"></div><div class="col-md-6 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});

async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=4");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);

    resultados.forEach((p) => {
        document.getElementById("personas").innerHTML +=
            '<div class="col-lg-3"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="' +
            p.picture.large +
            '" alt="..." /><h5>' +
            p.name.first +
            " " +
            p.name.last +
            '</h5><p class="font-weight-light mb-0">' +
            p.location.city +
            ", " +
            p.location.country +
            " <br><i class='bi bi-envelope-heart fs-3'></i></div></div>";
    });
}
users().catch((error) => console.error(error));
