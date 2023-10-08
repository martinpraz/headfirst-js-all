
// let chevy = {make: "Chevrolet", model: "Bel Air", year: 1957, mileage: 1071, isConvertible: false, color: "red", passengers: 2};
// let cadi = {make: "Cadillac", model: "DeVille", year: 1955, mileage: 12892, isConvertible: false, color: "tan", passengers: 5, rearBuckets: true};

// // this function takes an object as argument and lists all its properties
// // easier done with "for in" loop, but leave like this for learning
// function objectLister(object) {
//     let iterable = Object.values(object);

//     for (let i = 0; i < Object.values(object).length; i++) {
//         console.log(iterable[i]);
//     }
// }

// chevy.needsWashing = true;

// objectLister(chevy);
// objectLister(cadi);

// CAR PURCHASE PRE-QUALIFIER
// function preQual(car) {
//     if (car.mileage <= 10000 && car.year <= 1960) {
//         return true;
//     }

//     return false;
// }

// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// };

// // main loop
// let isBuy = preQual(taxi);

// if (isBuy) {
//     console.log(`You've got to check out this ${taxi.make} ${taxi.model}`);
// } else {
//     console.log(`Do not touch this lemon`);
// }


// SUPER SECRET FILE
// function getSecret(file, secretPassword) {
//     if (secretPassword == file.password) {
//         file.opened += 1;
//         return file.contents;
//     } else {
//         return "You are not authorized to access this document.";
//     }
// }

// function setSecret(file, secretPassword, secret) {
//     if (secretPassword == file.password) {
//         file.opened = 0;
//         file.contents = secret;
//     }
// }

// var superSecretFile = {level: "classified", opened: 0, password: 2, contents: "Dr Evel's next meeting is in Detroit"};

// var secret = getSecret(superSecretFile, 2);
// console.log(secret);

// setSecret(superSecretFile, 2, "Dr Evel's next meeting is in Philadelphia");

// secret = getSecret(superSecretFile, 2);
// console.log(secret);

//Create a random car object from scratch using "Auto-O-Matic"
// function makeCar () {
//     var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//     var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//     var years = [1955, 1957, 1948, 1954, 1961];
//     var colors = ["red", "blue", "tan", "yellow", "white"];
//     var convertible = [true, false];

//     var rand1 = Math.floor(Math.random() * makes.length);
//     var rand2 = Math.floor(Math.random() * models.length);
//     var rand3 = Math.floor(Math.random() * years.length);
//     var rand4 = Math.floor(Math.random() * colors.length);
//     var rand5 = Math.floor(Math.random() * 5) + 1;
//     var rand6 = Math.floor(Math.random() * 2);

//     let car = {
//         make: makes[rand1],
//         model: models[rand2],
//         year: years[rand3],
//         color: colors[rand4],
//         passengers: rand5,
//         convertible: convertible[rand6],
//         mileage: 0
//     };

//     return car;
// }

// function displayCar (car) {
//     console.log(`Your new car is a ${car.year} ${car.make} ${car.model}.`);
// }

// var carToSell = makeCar();
// displayCar(carToSell);

// var fiat = {
//     make: "Fiat",
//     model: "500",
//     year: 1957,
//     color: "medium blue",
//     passengers: 2,
//     convertible: false,
//     mileage: 88000,
//     isStarted: false,
//     start: function () {
//         this.isStarted = true;
//         console.log(`Starting the engine...`);
//     },
//     stop: function () {
//         this.isStarted = false;
//         console.log(`Stopping the engine...`);
//     },
//     drive: function () {
//         if (this.isStarted) {
//             console.log(`Zoom zoom!`)
//         } else {
//             console.log(`You need to start the engine first!`);
//         }

//     }
// }

// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();

var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log(`Starting playback...`);
            console.log(`Playing ${this.name} by ${this.artist}`);
        }
    },

    pause: function () {
        if (this.playing) {
            this.playing = false;
            console.log(`Stopping playback...`);
        }
    }
};

song.play();
song.pause();