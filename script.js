/*var salary = 12;
var monthlySalary = salary % 12;
var isPurple = true;
console.log("isPurple", isPurple);
if (isPurple === false) {
	// True
	 console.log("Is purple");
} else {
	// False
	console.log("Is not purple");
}
// Hours in year
var hoursInDay = 24; 
console.log("hoursInDay", hoursInDay)
var hoursInWeek = hoursInDay * 7;
console.log("hoursInWeek", hoursInWeek)
var hoursInYear = hoursInWeek * 52;
console.log("hoursInYear", hoursInYear);

// Minutes in Decade
var minute = 60;
console.log("minute", minute);
var minutesInDay = minute * 24;
console.log("minutesInDay", minutesInDay);
var minutesInYear = minutesInDay * 365;
console.log("minutesInYear", minutesInYear);
var minutesInDecade = minutesInYear * 10;
console.log("minutesInDecade", minutesInDecade);

// Seconds old
var age = 35;
var secondsInHour = 60 * 60;
console.log("secondsInHour", secondsInHour);
var secondsInDay = hoursInDay * secondsInHour;
console.log("secondsInDay", secondsInDay);
var secondsInYear = secondsInDay * 365;
console.log("secondsInYear", secondsInYear);
var secondsInAge = secondsInYear * age;
console.log("secondsInAge", secondsInAge);

var breakPointAge = 75;
if (age < breakPointAge) {
	// True
	console.log("You're not old");
} else {
	// False
	console.log("You're old");
}


var colors =["red", "blue", "yellow", "purple"];
var luckyNumbers = [4, 8, 15, 16, 23, 42];
for (var index = 0; index < luckyNumbers.length; index = index +2){
	console.log(luckyNumbers[index]);
}
// var boolValues = [true];

var myColor = colors[0];
var yourColor = colors[1];

// colors [4] = "orange";

// colors.push("teal");
// console.log("colors", colors)

colors.unshift(); // Add item to beginnig
colors.shift();  // Remove from beginnig, opposite of pop()

var lastItem = colors.pop();
console.log(lastItem);

colors[0];
colors[1];
colors[2];
colors[3];
// Loop over colors
// for (var index = 0; index < colors.length; index++) {
	// console.log("current color is ", colors[index]);
// }

// Simple loop that increments a value and logs it
// for (var i =10; i <100; i++) {
	// console.log(i);
// }

// 


for (var counter = 0; counter < 100; counter = counter + 10){
	console.log("increment by 10", counter);
};

for (var counter = 20; counter >= 2; counter = counter / 2 ){
	console.log("dividing by 2", counter);
};

var itemArray = [];
for (var i = 2; i <= 20; i++) {
	itemArray.push(i);
}

console.log("itemArray", itemArray);

var asdf = [];
for (var i = 100; i > 0; i-=1){
	console.log("i", i);
	if (i % 2 === 0) {
		asdf.unshift(i);
	} else{
		asdf.push(i);
	}
}

console.log("asdf", asdf);


var firstName ="Micah";
var lastName = "Wells";
var fullName = firstName + lastName;
console.log("fullName",fullName);
console.log(fullName.length);
fullName.indexOf("M");
console.log(fullName.charAt(3));

// var phrase = "The lazy dog";
// var newPhrase = phrase.replace("lazy", "bounding");
// alert(newPhrase);


var number = "1000";
var integer = parseInt(number);

var el = document.getElementById("container");
console.log("el", el)

el.innerHTML = "I love NSS";
var containerText = el.innerHTML;
console.log("containerText", containerText); 
*/
/*
var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText);

var indexOfOrphans = sonnetText.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);

console.log("length of sonnet", sonnetText.length);

sonnetText = sonnetText.replace("winter", "yuletide");
sonnetElement.innerHTML = sonnetText;

sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");
*/

function add() {
	var songName = document.getElementById("song-name").value;
	console.log(songName);
	var artistName = document.getElementById("artist-name").value;
	console.log(artistName);
	var albumName = document.getElementById("album-name").value;
	console.log(albumName);
	newSongs[i] = "<p>" + songName + 
		" by " + artistName + 
		" on the album " + albumName + "</p>";
	document.getElementById("song-display").innerHTML += newSongs[i];
}	

function removeAddSong(event) {
	document.getElementById("add-song").classList.add("visible");
	document.getElementById("main-content").classList.add("hidden");

}

function addListMusic (event) {
	document.getElementById("main-content").classList.remove("hidden");
	document.getElementById("add-song").classList.remove("visible");
}


function addViewMusic (event) {
}

var songs = [];
var newSongs = [];

songs[songs.length] = "Palmetto Rose - by Jason Isbell on the album Something More Than Free";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Turtles All The Way Down - by Sturgill Simpson on the album Metamodern Sounds in Country";



for (var i =0; i < songs.length; i++) {
		song = songs[i];
		song = song.replace(">", "-");
		song = song.replace("*", "");
		song = song.replace("(", "");
		song = song.replace("@", "");
		song = song.replace("!","");		
			
		console.log(song);

	var songName = song.slice(0, song.indexOf("-")-1);
	console.log(songName);
	var artistName = song.slice(song.indexOf("by")+3, song.indexOf("on the album"));
	console.log(artistName);
	var albumName = song.slice(song.indexOf("album")+6);
	console.log(albumName);

	newSongs[i] = "<p>" + songName + 
		" by " + artistName + 
		" on the album " + albumName + "</p>";
}

for (var j = 0; j < newSongs.length; j++) {
	document.getElementById("song-display").innerHTML += newSongs[j];
}

var addButton = document.getElementById("add");
addButton.addEventListener("click", add);

var addMusic = document.getElementById("add-music");
addMusic.addEventListener("click", removeAddSong);

var addList = document.getElementById("list-music");
addList.addEventListener("click", addListMusic);

var viewMusic = document.getElementById("view-music");
viewMusic.addEventListener("click", addViewMusic)

// var newSong = songs.slice[1, 24];

// song-name = document.getElementById("song-name");
// mainContent.innerHTML = newSong


















