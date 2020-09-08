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

const ccApp = {};

const filmPhoto = {
    leica: [
        {
            film: 'fuji',
            subject: 'landscape',
            photoId: '#leicaFujiLandscape'
        },
        {
            film: 'fuji',
            subject: 'people',
            photoId: '#leciaFujiPeople'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            photoId: '#leciaFujiSurprise'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            photoId: '#leciaKodakLandscape'
        },
        {
            film: 'kodak',
            subject: 'people',
            photoId: '#leicaKodakPeople'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            photoId: '#leciaKodakSurprise'
            
        },
        {
            film: 'ilford',
            subject: 'landscape',
            photoId: '#leciaIlfordLandscape'
        },
        {
            film: 'ilford',
            subject: 'people',
            photoId: '#leciaIlfordPeople'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            photoId: '#leciaIlfordSurprise'
        },
    ],
    olympus: [
        {
            film: 'fuji',
            subject: 'landscape',
            photoId: '#olympusFujiLandscape'
        },
        {
            film: 'fuji',
            subject: 'people',
            photoId: '#olympusFujiPeople'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            photoId: '#olympusFujiSurprise'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            photoId: '#olympusKodakLandscape'
        },
        {
            film: 'kodak',
            subject: 'people',
            photoId: '#olympusKodakPeople'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            photoId: '#olympusKodakSurprise'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            photoId: '#olympusIlfordLandscape'
        },
        {
            film: 'ilford',
            subject: 'people',
            photoId: '#olympusIlfordPeople'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            photoId: '#olympusIlfordSurprise'
        }
    ],
    canon: [
        {
            film: 'fuji',
            subject: 'landscape',
            photoId: '#canonFujiLandscape'
        },
        {
            film: 'fuji',
            subject: 'people',
            photoId: '#canonFujiPeople'
        },
        {
            film: 'fuji',
            subject: 'surprise',
            photoId: '#canonFujiSurprise'
        },
        {
            film: 'kodak',
            subject: 'landscape',
            photoId: '#canonKodakLandscape'
        },
        {
            film: 'kodak',
            subject: 'people',
            photoId: '#canonKodakPeople'
        },
        {
            film: 'kodak',
            subject: 'surprise',
            photoId: '#canonKodakSurprise'
        },
        {
            film: 'ilford',
            subject: 'landscape',
            photoId: '#canonIlfordLandscape'
        },
        {
            film: 'ilford',
            subject: 'people',
            photoId: '#canonIlfordPeople'
        },
        {
            film: 'ilford',
            subject: 'surprise',
            photoId: '#canonIlfordSurprise'
        }
    ]
}

const usersCameraPick = $('input[name = camera]:checked').val();
const usersFilmPick = $('input[name = film]:checked').val();
const usersSubjectPick = $('input[name = subject]:checked').val();

const buttonHighlight = function () {
    $('label').on('click', function () {
        $(this).toggleClass('selected');
    });

};

const scrollDown = function(){
    $('html, body').animate({
        scrollTop: $('section').offset().top
    }, 1000)
};



$(function(){


    //FORM ERROR HANDLING
    // function validateForm(option, selection) {
    //     if (option !== selection) {
    //         console.log('check');
    //         alert(`oops! looks like your missing ${option}, please fill it out + try again!`)
    //     } 
    // }




  

    // button highlight
    buttonHighlight();

    //if another label with the same input name is clicked, remove class of selected from other labels



    // FORM EVENT LISTENER
    $('form').on('submit', function(e) {
        e.preventDefault();

        let cameraTypes = filmPhoto[usersCameraPick];
        for (let i = 0; i < cameraTypes.length; i++) {
           
            const userSelection = cameraTypes[i];

            if (usersFilmPick === userSelection.film && usersSubjectPick === userSelection.subject) {

                $('.dynamicHeading').append(`<h2>Welcome to the club</h2>
                <p>This is your photo!</p>`);

                $(userSelection.photoId).removeClass('hide').css({border: '1px solid black', padding: '25px'});

                $('.dynamicFilters').removeClass('hide');
            
                $('.dynamicText').append(`<p>Shot on a(n) ${usersCameraPick} camera using ${userSelection.film} film. </p>`);
            }
        }

      scrollDown();

    });

    // $('#filterOne').on('click', function () {
    //     $('.grain').toggle();
    // });

    $('#filterTwo').on('click', function () {
        $('.doubleExposure').toggle();
    });

    // $('#filterThree').on('click', function () {
    //     $('.lightLeak').toggle();
    // });

    

});



//need to empty section at some point
//$('section').empty();






