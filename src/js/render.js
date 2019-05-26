import { Util } from './util';
let $ = new Util();
export class Render {
    
    constructor() {

    }

    renderBanner(dataBanner, insertInID, callback) {

        let banners = dataBanner.map( function( item ) {
            return `
                <div class="item_banner">
                    <div class="img_banner" style="background-image: url('${item.url}')"></div>
                    <div class="container">
                        <h1>${item.titulo}</h1>
                    </div> 
                </div>
            `;
        } ); 

        let container = $.select(insertInID);
        container.innerHTML = banners.join('');

        callback();
        
    }

    // feito para em wp-json do woocomerce
    renderProductFromUrl(url,container, callback) {
        const Http = new XMLHttpRequest();
        
        Http.open("GET", url,true);
        Http.send();

        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                let dataProdutos = JSON.parse(Http.responseText);
                
                let produtos = dataProdutos.map( function( item ) {
                    return `
                        <div class="produto_item">
                            <div class="box">
                                <div class="thumb_produto">
                                    <img src="${item.imagem}" title="${item.nome}" alt="${item.nome}"/>
                                    ${ item.oferta ? '<div class="off"><span>OFF</span></div>' : ''}
                                </div>
                                <div class="descricao">
                                    <h3 class="title">${item.nome}</h3>
                                    <div class="avaliacao">
                                        <ul>
                                            <li>
                                                <img src="dist/img/star.png" alt="" class="star">
                                            </li>
                                            <li>
                                                <img src="dist/img/star-o.png" alt="" class="star">
                                            </li>
                                            <li>
                                                <img src="dist/img/star-o.png" alt="" class="star">
                                            </li>
                                            <li>
                                                <img src="dist/img/star-o.png" alt="" class="star">
                                            </li>
                                            <li>
                                                <img src="dist/img/star-o.png" alt="" class="star">
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="preco">
                                        <small class="sem_desconto"> ${ item.oferta ? 'de '+item.valorCheio : ''}</small>
                                        <span class="com_desconto">por R$ ${item.valorOff}</span>
                                    </div>
                                    <div class="parcelado">
                                        ${item.parcela}
                                    </div>

                                    <button class="comprar">
                                        <img src="/dist/img/add-cart.png" alt="">
                                        <span>Comprar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                } ); 
                
                let $container = $.select(container);
                $container.innerHTML = produtos.join('');
                
                callback();
            }
        }
    }

}