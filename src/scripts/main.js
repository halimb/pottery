import "../styles/style.scss";
import Masonry from "masonry-layout";



var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 220
});