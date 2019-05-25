import '../scss/main.scss';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
import { Render } from './render';
import { Util } from './util';

let render = new Render();
let $ = new Util();

let data_banner = [
    { "titulo" : "Nossa especialidade: experiência de compra", "url" : "dist/img/banner1.jpg" },
    { "titulo" : "Experiência de Compra é nossa especialidade!", "url" : "dist/img/banner2.jpg" },
    { "titulo" : "Nossa especialidade: experiência de compra", "url" : "dist/img/banner3.jpg" },
    { "titulo" : "Somos especializados na espetiência de compra.", "url" : "dist/img/banner4.jpg" }
];

render.renderBanner(data_banner,'.home_slider', () => {
    var home_slider = tns({
        container: '.home_slider',
        items: 1,
        slideBy: 'page',
        arrowKeys: false,
        controls: false,
        mouseDrag: true,
        controlsContainer: document.querySelector('#custom_controls'),
        responsive: {
            '992': {
                "arrowKeys": true,
                "controls": true
            }
          }
    });
} );

let toggleMenu = $.selectAll('.js_toggle_menu');

toggleMenu.forEach( (item) => {
    item.addEventListener('click', () => {
        $.toggleClass('#content_menu','opened');
    });
});
