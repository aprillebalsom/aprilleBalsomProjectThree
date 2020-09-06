// PROJECT 3
// add document ready function
// create event listener for when user submits form
// remove default behaviour from form
// upon submit, save user inputs from form and store them in variables
// take users first selection and match to the corresponding object
// take users second selection and match to the corresponding object
// take users third selection and match to the corresponding object
// when all selections match, add class of specific image to the page and append "camera name" and film type" that user selected below it


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
            subject: 'landscape',
            photo: '#leicaFujiLandscape'
        },
        {
            film: 'fuji',
            subject: 'people',
            photo: '#leciaFujiPeople'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            photo: '#leciaFujiSurprise'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            photo: '#leciaKodakLandscape'
        },
        {
            film: 'kodak',
            subject: 'people',
            photo: '#leicaKodakPeople'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            photo: '#leciaKodakSurprise'
            
        },
        {
            film: 'ilford',
            subject: 'landscape',
            photo: '#leciaIlfordLandscape'
        },
        {
            film: 'ilford',
            subject: 'people',
            photo: '#leciaIlfordPeople'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            photo: '#leciaIlfordSurprise'
        },
    ],
    olympus: [
        {
            film: 'fuji',
            subject: 'landscape',
            photo: '#olympusFujiLandscape'
        },
        {
            film: 'fuji',
            subject: 'people',
            photo: '#olympusFujiPeople'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            photo: '#olympusFujiSurprise'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            photo: '#olympusKodakLandscape'
        },
        {
            film: 'kodak',
            subject: 'people',
            photo: '#olympusKodakPeople'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            photo: '#olympusKodakSurprise'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            photo: '#olympusIlfordLandscape'
        },
        {
            film: 'ilford',
            subject: 'people',
            photo: '#olympusIlfordPeople'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            photo: '#olympusIlfordSurprise'
        }
    ],
    canon: [
        {
            film: 'fuji',
            subject: 'landscape',
            photo: '#canonFujiLandscape'
        },
        {
            film: 'fuji',
            subject: 'people',
            photo: '#canonFujiPeople'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            photo: '#canonFujiSurprise'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            photo: '#canonKodakLandscape'
        },
        {
            film: 'kodak',
            subject: 'people',
            photo: '#canonKodakPeople'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            photo: '#canonKodakSurprise'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            photo: '#canonIlfordLandscape'
        },
        {
            film: 'ilford',
            subject: 'people',
            photo: '#canonIlfordPeople'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            photo: '#canonIlfordSurprise'
        }
    ]
}




$(function(){


    
    // const cameraOptions = $('input[name = camera]').val();
    // const filmOptions = $('input[name = film]').val();
    // const subjectOptions = $('input[name = subject]').val();

   


    //FORM ERROR HANDLING
    // function validateForm(option, selection) {
    //     if (option !== selection) {
    //         console.log('check');
    //         alert(`oops! looks like your missing ${option}, please fill it out + try again!`)
    //     } 
    // }


    // FORM EVENT LISTENER
    $('form').on('submit', function(e) {
        e.preventDefault();
        // console.log('yay');

        const usersCameraPick = $('input[name = camera]:checked').val();
        const usersFilmPick = $('input[name = film]:checked').val();
        const usersSubjectPick = $('input[name = subject]:checked').val();


        // validateForm(cameraOptions);
        // validateForm(filmOptions);
        // validateForm(subjectOptions);

        let cameraTypes = filmPhoto[usersCameraPick];
        // console.log(cameraTypes);

        for (let i = 0; i < cameraTypes.length; i++) {
            // console.log(cameraTypes[i]);
            const userSelection = cameraTypes[i];
            if (usersFilmPick === userSelection.film && usersSubjectPick === userSelection.subject) {

                //  userSelections.push(cameraTypes[i]);
                // console.log(userSelection);

                $('.dynamicHeading').append(`<h2>Welcome to the club</h2>
                <p>This is your photo!</p>`);

                $(userSelection.photo).removeClass('hide');
            
                $('.dynamicText').append(`<p>Shot on a(n) ${usersCameraPick} camera using ${userSelection.film} film. </p>`);
            }
        }

        $('html, body').animate({
            scrollTop: $('section').offset().top
        }, 1000)
       
    });

});