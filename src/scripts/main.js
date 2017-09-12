import "../styles/style.scss";
import content from "../content.json";
import Masonry from "masonry-layout";
import jQuery from "jquery";
import reel from "jquery.reel";
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
  columnWidth: fullItem,
  fitWidth: true
});

var txt = document.getElementById("txt");
txt.innerHTML = content.txt.lorem;

//360 images
var get360 = (name) => {
	var path = content.img.pottery[name].reel;
	var thumbnail = content.img.pottery[name].thumb;
	return "<img class='reel'"+
			"src='" + thumbnail + "'" +
			"data-images='" + path + "'>";
}
var fatcup = get360("fatcup");
console.log(fatcup)
document.getElementById("fatcup")
	.innerHTML = fatcup;
