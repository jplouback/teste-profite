export class Render {
    
    constructor() {

    }

    renderBanner(dataBanner, insertInID, callback) {

        var banners = dataBanner.map( function( item ) {
            return `
                <div class="item_banner">
                    <div class="img_banner" style="background-image: url('${item.url}')"></div>
                    <div class="container">
                        <h1>${item.titulo}</h1>
                    </div> 
                </div>
            `;
        } ); 

        let container = document.querySelector(insertInID);
        container.innerHTML = banners.join('');

        callback();
        
    }

}