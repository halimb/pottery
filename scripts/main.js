var a, item, gutter, fullItem, content;
const rotationSpeed = "'.3'";
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
		$.getJSON(
			"content.json",
			(data) => { content = data; loadContent() }
			);
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

//360 images
var get360 = (name) => {
	var path = content.img[name].reel;
	var thumbnail = content.img[name].thumb;
	return "<img class='reel'"+
			"src='" + thumbnail + "'" +
			" data-images='" + path + "'" +
			" data-speed = "+ rotationSpeed + 
			"/>";
	return img;
}

function loadContent() {
	var txt = document.getElementById("txt");
	txt.innerHTML = content.txt.lorem;
	var pot = get360("round-pot");
	console.log(pot)
	document.getElementById("round-pot").innerHTML = pot;
	$.reel.scan();
}
