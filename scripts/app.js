// 1. create a input function which takes pet's name and display

    $("#petnameButton").on('click', (event) => {

        event.preventDefault();

        const userInput = $("#petnameInput").val();

        $(".petname").text(`name: ${userInput}`)

        setInterval( updateHungerTimer, updateStatus() )
        setInterval( updateSleepinessTimer, updateStatus() )
        setInterval( updateBoredomTimer, updateStatus() )
        setInterval( updateAge, 1000)

        //a set time with a set time interval
    })


// 2. set pet as object with status (hunger, sleepiness, boredom, age)

    class Pet {
        constructor(name, age, hunger, sleepiness, boredom) {
            this.name = name;
            this.age = age;
            this.hunger = hunger;
            this.sleepiness = sleepiness;
            this.boredome = boredom;
        }
    }

// 3. set scale from 0 to 10 to each status and alert a pet dies if any one of them reaches 10

let age = 1;
let hunger = 0;
let sleepiness = 0;
let boredom = 0;

const updateStatus = () => {
    const randomNum = Math.floor(Math.random() * 5);
    if ( randomNum === 0 ) {
        return 700;
    } else if ( randomNum === 1 ) {
        return 800;
    } else if ( randomNum === 2 ) {
        return 900;
    } else if ( randomNum === 3 ) {
        return 1000;
    } else {
        return 1100;
    }
}

// 4. make the status of hunger, sleepiness, boredom and age increase on certain interval

const updateHungerTimer = () => {
    hunger++;
    $(".hunger").text(`hunger: ${hunger}`);
    if ( hunger === 10 ) {
        alert(`${Pet.name} died because you reglected!`)
    }
}

const updateSleepinessTimer = () => {
    sleepiness++;
    $(".sleepiness").text(`sleepiness: ${sleepiness}`);
    if ( sleepiness === 10 ) {
        alert(`${Pet.name} died because you reglected!`)
    }
}

const updateBoredomTimer = () => {
    boredom++;
    $(".boredom").text(`boredom: ${boredom}`);
    if ( boredom === 10 ) {
        alert(`${Pet.name} died because you reglected!`)
    }
}

// 5. make three buttons ( feed, sleep, play ) and make it reduce the status whenever clicked

$('.button_feed').on('click', (event) => {
    hunger --;
})

$('.button_sleep').on('click', (event) => {
    sleepiness --;
})

$('.button_play').on('click', (event) => {
    boredom --;
})

// 6. transform pet's apperance as age increases 

