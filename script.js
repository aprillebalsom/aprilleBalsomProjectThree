// PROJECT 3
// add document ready function
// create event listener for when user submits form
// remove default behaviour from form
// upon submit, save user inputs from form and store them in variables
// take users first selection and match to the corresponding object
// take users second selection and match to the corresponding object
// take users third selection and match to the corresponding object
// when all selections match, add class of specific image to the page and append "camera name" and f ilm type" that user selected below it


//STRETCH GOALS

//ONE
// have an array on the nested third level
//add a randomizer function to select a photo at random from a group dependant upon user selections
// append that image to the page 

//TWO
// allow user to apply a filter to the image by toggling one of the filter buttons

//THREE
// allow user to "take another photo" by removing all selections and scrolling back to the top 



//insert document ready

const filmPhoto = {
    leica: [
        {
            film: 'fuji',
            subject: 'landscape'
        },
        {
            film: 'fuji',
            subject: 'people'
        },
        {
            film: 'fuji',
            subject: 'surprise',
        },
        {
            film: 'kodak',
            subject: 'landscape'
        },
        {
            film: 'kodak',
            subject: 'people'
        },
        {
            film: 'kodak',
            subject: 'surprise'
        },
        {
            film: 'ilford',
            subject: 'landscape'
        },
        {
            film: 'ilford',
            subject: 'people'
        },
        {
            film: 'ilford',
            subject: 'surprise'
        },
    ],
    olympus: [
        {
            film: 'fuji',
            subject: 'landscape'
        },
        {
            film: 'fuji',
            subject: 'people'
        },
        {
            film: 'fuji',
            subject: 'surprise',
        },
        {
            film: 'kodak',
            subject: 'landscape'
        },
        {
            film: 'kodak',
            subject: 'people'
        },
        {
            film: 'kodak',
            subject: 'surprise'
        },
        {
            film: 'ilford',
            subject: 'landscape'
        },
        {
            film: 'ilford',
            subject: 'people'
        },
        {
            film: 'ilford',
            subject: 'surprise'
        }
    ],
    canon: [
        {
            film: 'fuji',
            subject: 'landscape'
        },
        {
            film: 'fuji',
            subject: 'people'
        },
        {
            film: 'fuji',
            subject: 'surprise',
        },
        {
            film: 'kodak',
            subject: 'landscape'
        },
        {
            film: 'kodak',
            subject: 'people'
        },
        {
            film: 'kodak',
            subject: 'surprise'
        },
        {
            film: 'ilford',
            subject: 'landscape'
        },
        {
            film: 'ilford',
            subject: 'people'
        },
        {
            film: 'ilford',
            subject: 'surprise'
        }
    ]
}


const form = $('form');

//on submit, prevent default
//
form.on('submit', (e) => {
    e.preventDefault();
    console.log('yay');
});