// APP OBJECT
const cameraApp = {};

// APPENDED IMAGE CONTENT OBJECT
cameraApp.cameras = {
    leica: [
        {
            film:'fuji',
            subject: 'landscape',
            image: './styles/assets/leica-fuji-landscape.jpg',
            alt:'A person on a beach overlooking the water.'
        },
        { 
            film: 'fuji',
            subject: 'people',
            image: './styles/assets/leica-fuji-people.jpg',
            alt: 'A girl standing in a field, posing with a bouquet of flowers and one in her mouth.'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            image: './styles/assets/leica-fuji-surprise.jpg',
            alt: 'The Iceland flag in a field with a light leak effect.'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            image: './styles/assets/leica-kodak-landscape.jpg',
            alt: 'A girl sitting on a cliff overlooking multiple icebergs floating in the ocean.'
        },
        {
            film: 'kodak',
            subject: 'people',
            image: './styles/assets/leica-kodak-people.jpg',
            alt: 'A girl wearing a white veil, posing.'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            image: './styles/assets/leica-kodak-surprise.JPG',
            alt: 'An English bulldog alseep in the doorway of a home.'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            image: './styles/assets/leica-ilford-landscape.JPG',
            alt:'A staircase in Italy adorned with a cactus and flowerbox in the window.'
        },
        {
            film: 'ilford',
            subject: 'people',
            image: './styles/assets/leica-ilford-people.jpg',
            alt:'An older man sitting on a patio drinking coffee and reading the newspaper.'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            image: './styles/assets/leica-ilford-surprise.jpg',
            alt:'A white fluffy alpaca chewing on some straw in a field.'
        },
    ],
    olympus: [
        {
            film: 'fuji',
            subject: 'landscape',
            image: './styles/assets/olympus-fuji-landscape.jpg',
            alt: 'Three cacti plants against a white wall backdrop.'
        },
        {
            film: 'fuji',
            subject: 'people',
            image: './styles/assets/olympus-fuji-people.jpg',
            alt: 'Two models in a skatepark, posing.'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            image: './styles/assets/olympus-fuji-surprise.jpg',
            alt: 'A dog alseep on a bed with its tongue out.'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            image: './styles/assets/olympus-kodak-landscape.JPG',
            alt: 'A popular beach cove in Italy where the locals hang out and go swimming.'
        },
        {
            film: 'kodak',
            subject: 'people',
            image: './styles/assets/olympus-kodak-people.jpg',
            alt: 'A girl sitting in a chair against a white backdrop, posing.'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            image: './styles/assets/olympus-kodak-surprise.jpg',
            alt: 'The view from an airplane window of fluffy white clouds.'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            image: './styles/assets/olympus-ilford-landscape.jpg',
            alt: 'A black church atop a hill in Iceland.'
        },
        {
            film: 'ilford',
            subject: 'people',
            image: './styles/assets/olympus-ilford-people.jpg',
            alt: 'A girl standing on a beach carrying beach chairs and a hat.'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            image: './styles/assets/olympus-ilford-surprise.jpg',
            alt: 'Large basalt cliffs in Iceland.'
        }
    ],
    canon: [
        {
            film: 'fuji',
            subject: 'landscape',
            image: './styles/assets/canon-fuji-landscape.jpg',
            alt:'A boat pulled up on the rocky beach along the coast of Newfoundland.'
        },
        {
            film: 'fuji',
            subject: 'people',
            image: './styles/assets/canon-fuji-people.jpg',
            alt:'A girl sitting on a dock staring into the camera.'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            image: './styles/assets/canon-fuji-surprise.jpg',
            alt:'A koala bear sitting up in a tree.'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            image: './styles/assets/canon-kodak-landscape.jpg',
            alt:'A man walking along a dock surrounded by boats at sunset.'
        },
        {
            film: 'kodak',
            subject: 'people',
            image: './styles/assets/canon-kodak-people.jpg',
            alt:'A girl karate kicking her leg in the air.'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            image: './styles/assets/canon-kodak-surprise.jpg',
            alt:'A hotel nook with two cozy blue chairs overlooking a window.'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            image: './styles/assets/canon-ilford-landscape.jpg',
            alt:'A large waterfall in Iceland with a black sand beach.'
        },
        {
            film: 'ilford',
            subject: 'people',
            image: './styles/assets/canon-ilford-people.jpg',
            alt: 'A group of friends laughing in a group.'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            image: './styles/assets/canon-ilford-surprise.jpg',
            alt: `An original photobooth from the 1970's, in Australia.`
        }
    ]
}

// APPENDED FILTERS OBJECT
cameraApp.photoFilters = {
    grain: {
        link: './styles/assets/grain.png',
        title: 'A grainy film texture filter.'
    },
    doubleExposure: {
        link: './styles/assets/double-exposure.png',
        title: 'A filter overlaying a secondary photo of rocks and water at the Blue Lagoon in Iceland.'
    },
    lightLeak: {
        link: './styles/assets/light-leak.png',
        title: 'A light leak filter displaying effects that happen to film when it is exposed to light.'
    }
}



// a function that takes the user's camera selection and filters through the "Options" object to find its match and return its value
cameraApp.usersPicks = function (camera, film, subject) {

    const cameraOptions = cameraApp.cameras[camera];
  
    cameraOptions.filter((cameraOption) => {

        // find the film choice and subject choice within the camera array that matches the user's selections 
        if (film === cameraOption.film && subject === cameraOption.subject) {

            const usersImage = cameraOption.image;
            const usersImageAlt = cameraOption.alt;

            // remove appended content if user makes new selections
            $('.dynamicHeading').empty();
            $('.filmPhoto').empty();
            $('.photoFilter').empty();
            $('.dynamicText').empty();
            $('.newPhotoButton').empty();
            $('.dynamicFilters').empty();

            cameraApp.displayPhoto(usersImage, usersImageAlt);
        }

    });  
}

// error handling for form submit
// notifies user if not all form fields have been completed
// if all fields have been complete it runs the rest of the functions
cameraApp.formErrorHandling = function(){

    const checkRadio = $('input:checked').length;
  
    if (checkRadio < 3) {

       alert(`oops! looks like you're missing a step. please fill out all sections + try again!`);

    } else {

        // store the user's selections in variables
        const usersCameraPick = $('input[name = camera]:checked').val();
        const usersFilmPick = $('input[name = film]:checked').val();
        const usersSubjectPick = $('input[name = subject]:checked').val();

        // run the rest of the functions
        cameraApp.usersPicks(usersCameraPick, usersFilmPick, usersSubjectPick);
        cameraApp.scrollDown();
        cameraApp.displayInfo(usersCameraPick, usersFilmPick);
        cameraApp.displayFilters();
        cameraApp.takeAnotherPhoto(); 
    }  
}

// a function that scrolls down the page to the appended content when the user submits the form
cameraApp.scrollDown = function () {

    $('html, body').animate({

        scrollTop: $('section').offset().top

    }, 1000);
}


// a function that appends the heading, image (based on user's selections), and styling to the page
cameraApp.displayPhoto = function(source, altText) {

    const heading = $('<h2>').text('Welcome to the club');
    const subHeading = $('<p>').text('This is your photo!');
    const image = $('<img>').attr('src', source).attr('alt', altText).css({ border: '1px solid black', padding: '25px'});
    const tape = $('<img>').attr('src', './styles/assets/tape.png').addClass('tape');

    $('.dynamicHeading').append(heading, subHeading);
    $('.filmPhoto').append(image, tape);
}

// a function that appends text to the page based on user's selections (displays type of camera and film selected)
// a conditional that adjusts text based on the camera selected for proper grammar
cameraApp.displayInfo = function(cameraSelected, filmSelected) {

    let a = 'a';

    if (cameraSelected === 'olympus') {
        a = 'an';
    }

    const cameraInfo = $('<p>').append(`Shot on ${a} <span class="special">${cameraSelected}</span> camera using <span class="special">${filmSelected}</span> film.`);

    $('.dynamicText').append(cameraInfo);
}

// a function that appends buttons to that page that apply image filters when clicked
cameraApp.displayFilters = function() {

    const filterHeading = $('<h3>').text('Add a filter');
    const grainFilter = $('<button>').text('Grain').addClass('filter').attr('id', 'grain');
    const dblExpFilter = $('<button>').text('Double Exposure').addClass('filter longName').attr('id', 'doubleExposure');
    const lightLeakFilter = $('<button>').text('Light Leak').addClass('filter').attr('id', 'lightLeak');
    const removeFilter = $('<button>').text('Original').addClass('filter').attr('id', 'reset');

    $('.dynamicFilters').append(filterHeading, grainFilter, dblExpFilter, lightLeakFilter, removeFilter);

    cameraApp.applyFilters();
}

// a function that scrolls back to the top of the page when the user clicks the button "take another photo"
cameraApp.scrollUp = function () {

    $('html, body').animate({

        scrollTop: $('form').offset().top

    }, 1000);
}

// a function that appends the "take another photo" button to the page, which allows to user to re-take the quiz
// an event listener for when the user clicks the button, removing the appended content and restarting the quiz
cameraApp.takeAnotherPhoto = function(){

    const tryAgain = $('<button>').text('Take another Photo');
    $('.newPhotoButton').append(tryAgain);

    $('.newPhotoButton').on('click', function () {

        $('.dynamicHeading').empty();
        $('.filmPhoto').empty();
        $('.photoFilter').empty();
        $('.dynamicText').empty();
        $('.newPhotoButton').empty();
        $('.dynamicFilters').empty();

        cameraApp.scrollUp();
    });
}


// an event listener for when the user clicks a filter button
// on click a filter, specific to the button the user chose will apply
cameraApp.applyFilters = function(){

    $('.filter').on('click', function () {

        $('.photoFilter').empty();

        const filterPick = $(this).attr('id');
      
        if (filterPick === 'reset') {

            $('.photoFilter').empty();

        } else {

            const selectedFilter = cameraApp.photoFilters[filterPick];
            const filteredImage = $('<img>').attr('src', selectedFilter.link).attr('alt', selectedFilter.title);

            $('.photoFilter').append(filteredImage);
        }
    });
}



// INIT FUNCTION: kicks off the app
cameraApp.init = function(){
    
    // an event listener for when the user submits the form 
    // calling the error handling function which calls the rest of the functions
    $('form').on('submit', function (e) {

        e.preventDefault();
       
        cameraApp.formErrorHandling();
    });
}


// DOCUMENT READY FUNCTION
$(function(){
    cameraApp.init();
});