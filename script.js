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


$(function(){

    

    $('form').on('submit', function(e) {
        e.preventDefault();
        // console.log('yay');

        const cameraPick = $('input[name = camera]:checked').val();
        // console.log('camera');
        const filmPick = $('input[name = film]:checked').val();
        // console.log('film');
        const subjectPick = $('input[name = subject]:checked').val();
        // console.log('subject');

        // if ($('input[type = radio]') !== $('input[type = radio]:checked')) {
        //     alert('oops! looks like your missing some required fields, please fill out all sections and try again!')
        // }


        // const userSelections = [];

        const cameraTypes = filmPhoto[cameraPick];
        // console.log(cameraTypes);

        for (let i = 0; i < cameraTypes.length; i++) {
            // console.log(cameraTypes[i]);
            const userSelection = cameraTypes[i];
            if (filmPick === userSelection.film && subjectPick === userSelection.subject) {
        
            //  userSelections.push(cameraTypes[i]);
            //  console.log(userSelections);

                
                $('.tester').addClass('test');


                $('section').append(`<p>Shot on a(n) ${cameraPick} camera using ${userSelection.film} film </p>`);


                
            }
        }

      


    });

});