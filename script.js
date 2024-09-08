let obj = [
    {
        "img": "./image/kendrick.jpg",
        "name": "Kendrick Lamar",
        "songs": ["Not like us", "Money Trees", "Humble", "N95", "Euphoria"],
        "playlist": "https://www.youtube.com/watch?v=T6eK-2OQtew"
        
    },
    {
        "img": "./image/travis scott.jfif",
        "name": "Travis Scott",
        "songs": ["Fein", "Highest in the Room", "Goosebumps", "I Know", "My Eyes", "SICKO MODE"],
        "playlist": "https://www.youtube.com/watch?v=U-l4ya3ejko"
    },
    {
        "img": "./image/theweeknd.jfif",
        "name": "The Weeknd",
        "songs": ["Creeping", "Die for You", "Call Out My Name", "Save Your Tears", "Starboy", "Blinding Lights", "The Hills"],
        "playlist": "https://www.youtube.com/watch?v=61ymOWwOwuk"
        
    },
    {
        "img": "./image/21 savage.jfif",
        "name": "21 Savage",
        "songs": ["Redrum", "Creeping", "Trance", "It's Up", "Prove it"],
        "playlist": "https://www.youtube.com/watch?v=ukbiRcyzrpc"

        
    },
    {
        "img": "./image/eminem.jpg",
        "name": "Eminem",
        "songs": ["The Real Slim Shady", "With out", "Love Yourself", "Fuel", "Mocking Bird"],
        "playlist": "https://www.youtube.com/watch?v=eJO5HU_7_1w"
        
    },
    {
        "img": "./image/future.png",
        "name": "Future",
        "songs": ["Type Shit", "Like That", "Trance", "Cinderella", "Mask Off"],
        "playlist": "https://www.youtube.com/watch?v=XcK8JdVlcXY"
        
    },
    {
        "img": "./image/playboi cardi.png",
        "name": "Playboi Carti",
        "songs": ["Slay3r", "Stop Breathing", "Rockstar Made", "No Sl33p", "Vamp Anthem"],
        "playlist": "https://www.youtube.com/watch?v=a0DJDF0uSek"
        
    }
];

function Kendrick() {
    document.getElementById("img").src = obj[0].img;
    document.getElementById("name").innerHTML = obj[0].name;
    document.getElementById("song").innerHTML = obj[0].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[0].playlist, "_blank");
    };
}

function Travis() {
    document.getElementById("img").src = obj[1].img;
    document.getElementById("name").innerHTML = obj[1].name;
    document.getElementById("song").innerHTML = obj[1].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[1].playlist, "_blank");
    };
}

function TheWeeknd() {
    document.getElementById("img").src = obj[2].img;
    document.getElementById("name").innerHTML = obj[2].name;
    document.getElementById("song").innerHTML = obj[2].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[2].playlist, "_blank");
    };
}

function Savage() {
    document.getElementById("img").src = obj[3].img;
    document.getElementById("name").innerHTML = obj[3].name;
    document.getElementById("song").innerHTML = obj[3].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[3].playlist, "_blank");
    };
}
function Eminem() {
    document.getElementById("img").src = obj[4].img;
    document.getElementById("name").innerHTML = obj[4].name;
    document.getElementById("song").innerHTML = obj[4].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[4].playlist, "_blank");
    };
}

function Future() {
    document.getElementById("img").src = obj[5].img;
    document.getElementById("name").innerHTML = obj[5].name;
    document.getElementById("song").innerHTML = obj[5].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[5].playlist, "_blank");
    };
}

function Playboi() {
    document.getElementById("img").src = obj[6].img;
    document.getElementById("name").innerHTML = obj[6].name;
    document.getElementById("song").innerHTML = obj[6].songs.join(", ");
    document.getElementById("playButton").onclick = function () {
        window.open(obj[6].playlist, "_blank");
    };
}
