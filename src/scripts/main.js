import "../styles/style.scss";
import Masonry from "masonry-layout";

var a, item, gutter, fullItem;

//Initialize variables
(
	() => {
		var getWidth = s => {
			return document
					.querySelector(s)
					.offsetWidth;
		}
		a = getWidth(".a");
		item = getWidth(".item");
		gutter = getWidth(".gutter");
		fullItem = item + 2 * gutter;
	}
) ();

//Setup Masonry
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: fullItem
});

console.log(fullItem)