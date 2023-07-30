import '../../css/base.css';
export function GenericCarousel() {

    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {createCardFromObj({
                    bsClass: "carousel-item active card",
                    imgSrc: "../../../features/reactCDN/img/wincomlogo.png",
                    imgAlt: "alternative text",
                    cardTitle: "Card Title",
                    cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    cardButtonHref: "#",
                    cardButtonText: "Go somewhere"
                })}

                {createTemplateCard()}
                {createTemplateCard()}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>)
}

function createTemplateCard() {
    return (
        <div class="carousel-item card" data-bs-interval="100">
            <img src="../../../features/reactCDN/img/wincomlogo.png" height="350" width="100" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );

}
function createCardFromObj(obj) {
    return (
        <div class={obj.bsClass} data-bs-interval="500">
            <img src={obj.imgSrc} class="card-img-top" alt={obj.imgAlt} />
            <div class="card-body">
                <h5 class="card-title">{obj.cardTitle}</h5>
                <p class="card-text">{obj.cardText}</p>
                <a href={obj.cardButtonHref} class="btn btn-success">{obj.cardButtonText}</a>
            </div>
        </div>
    );
}
export function CarouselFromProps(props) {
    let carouselItems = [];
    var bsClass = "";
    for (var i = 0; i < props.cards.length; i++) {
        bsClass = i == 0 ? "carousel-item active card" : "carousel-item card";
        var carouselItem = (createCardFromObj({
            bsClass: bsClass,
            imgSrc: props.cards[i].imgSrc,
            imgAlt: props.cards[i].imgAlt,
            cardTitle: props.cards[i].cardTitle,
            cardText: props.cards[i].cardText,
            cardButtonHref: props.cards[i].cardButtonHref,
            cardButtonText: props.cards[i].cardButtonText
        }))
        carouselItems.push(carouselItem);
    }

    return (
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{width:'550px', alignSelf:'center'}}>
            <label>Available Wexes</label>
            <div class="carousel-inner">
                { carouselItems }

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>);
}