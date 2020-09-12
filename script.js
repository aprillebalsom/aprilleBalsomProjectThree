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



// const filmPhoto = {
//     leica: [
//         {
//             film: 'fuji',
//             subject: 'landscape',
//             photoId: '#leicaFujiLandscape'
//         },
//         {
//             film: 'fuji',
//             subject: 'people',
//             photoId: '#leciaFujiPeople'
//         },
//         {
//             film: 'fuji',
//             subject: 'surprise',
//             photoId: '#leciaFujiSurprise'
//         },
//         {
//             film: 'kodak',
//             subject: 'landscape',
//             photoId: '#leciaKodakLandscape'
//         },
//         {
//             film: 'kodak',
//             subject: 'people',
//             photoId: '#leicaKodakPeople'
//         },
//         {
//             film: 'kodak',
//             subject: 'surprise',
//             photoId: '#leciaKodakSurprise'
            
//         },
//         {
//             film: 'ilford',
//             subject: 'landscape',
//             photoId: '#leciaIlfordLandscape'
//         },
//         {
//             film: 'ilford',
//             subject: 'people',
//             photoId: '#leciaIlfordPeople'
//         },
//         {
//             film: 'ilford',
//             subject: 'surprise',
//             photoId: '#leciaIlfordSurprise'
//         },
//     ],
//     olympus: [
//         {
//             film: 'fuji',
//             subject: 'landscape',
//             photoId: '#olympusFujiLandscape'
//         },
//         {
//             film: 'fuji',
//             subject: 'people',
//             photoId: '#olympusFujiPeople'
//         },
//         {
//             film: 'fuji',
//             subject: 'surprise',
//             photoId: '#olympusFujiSurprise'
//         },
//         {
//             film: 'kodak',
//             subject: 'landscape',
//             photoId: '#olympusKodakLandscape'
//         },
//         {
//             film: 'kodak',
//             subject: 'people',
//             photoId: '#olympusKodakPeople'
//         },
//         {
//             film: 'kodak',
//             subject: 'surprise',
//             photoId: '#olympusKodakSurprise'
//         },
//         {
//             film: 'ilford',
//             subject: 'landscape',
//             photoId: '#olympusIlfordLandscape'
//         },
//         {
//             film: 'ilford',
//             subject: 'people',
//             photoId: '#olympusIlfordPeople'
//         },
//         {
//             film: 'ilford',
//             subject: 'surprise',
//             photoId: '#olympusIlfordSurprise'
//         }
//     ],
//     canon: [
//         {
//             film: 'fuji',
//             subject: 'landscape',
//             photoId: '#canonFujiLandscape'
//         },
//         {
//             film: 'fuji',
//             subject: 'people',
//             photoId: '#canonFujiPeople'
//         },
//         {
//             film: 'fuji',
//             subject: 'surprise',
//             photoId: '#canonFujiSurprise'
//         },
//         {
//             film: 'kodak',
//             subject: 'landscape',
//             photoId: '#canonKodakLandscape'
//         },
//         {
//             film: 'kodak',
//             subject: 'people',
//             photoId: '#canonKodakPeople'
//         },
//         {
//             film: 'kodak',
//             subject: 'surprise',
//             photoId: '#canonKodakSurprise'
//         },
//         {
//             film: 'ilford',
//             subject: 'landscape',
//             photoId: '#canonIlfordLandscape'
//         },
//         {
//             film: 'ilford',
//             subject: 'people',
//             photoId: '#canonIlfordPeople'
//         },
//         {
//             film: 'ilford',
//             subject: 'surprise',
//             photoId: '#canonIlfordSurprise'
//         }
//     ]
// }


// const photoFilters = {
//     grain: {
//         link: './styles/assets/grain.png',
//         title: 'A grainy film texture filter.'
//     },
//     doubleExposure: {
//         link: './styles/assets/double-exposure.png',
//         title: 'A filter overlaying a secondary photo of rocks and water at the Blue Lagoon.'
//     },
//     lightLeak: {
//         link: './styles/assets/light-leak.png',
//         title: 'A light leak filter displaying effects that happen to film when light is exposed.'
//     } 
// }


// $(function(){

//     const scrollDown = function () {
//         $('html, body').animate({
//             scrollTop: $('section').offset().top
//         }, 1000)
//     };

//     const scrollUp = function () {
//         $('html, body').animate({
//             scrollTop: $('form').offset().top
//         }, 1000)
//     }




    //FORM ERROR HANDLING
    // const formSubmit = function(){

    //     if (($('input[name = camera]:checked') !== $('[type = "radio"]:checked')) && ($('#olympus') != $('[type = "radio"]:checked')) && ($('#canon') != $('[type = "radio"]:checked'))) {
    //         console.log('check');
    //         alert(`oops! looks like your missing, please fill it out + try again!`)
    //     } 

    // }
   
    

    // FORM EVENT LISTENER
//     $('form').on('submit', function(e) {
//         e.preventDefault();

//         const usersCameraPick = $('input[name = camera]:checked').val();
//         const usersFilmPick = $('input[name = film]:checked').val();
//         const usersSubjectPick = $('input[name = subject]:checked').val();

        
//         const cameraChoice = filmPhoto[usersCameraPick];

//         for (let i = 0; i < cameraChoice.length; i++) {
           
//             const userSelection = cameraChoice[i];



//             if (usersFilmPick === userSelection.film && usersSubjectPick === userSelection.subject) {
    
//                 $('.dynamicHeading').append(`

//                     <h2>Welcome to the club</h2>
//                     <p>This is your photo!</p>`
//                 );


//                 $(userSelection.photoId).removeClass('hide').css({border: '1px solid black', padding: '25px'})
//                 $('.tape').removeClass('hide');

//                 $('.dynamicFilters').removeClass('hide');
//                 $('.newPhotoButton').removeClass('hide');

//                 const displayText = function () {
//                     let a = 'a'
//                     if (usersCameraPick === 'olympus') {
//                         a = 'an';
//                     }

//                     $('.dynamicText').append(`

//                     <p>Shot on ${a} <span class="special">${usersCameraPick}</span> camera using <span class="special">${userSelection.film}</span> film.</p>
//                 `);
//                 }

//                 displayText();
               
//             }
//         }
//       scrollDown();
//     });

   
//     $('.filter').on('click', function () {
       
//         $('.filterContainer').empty();

//         const filterPick = $(this).attr('id');

//         if (filterPick === 'reset') {
//             $('.filterContainer').empty();
//         } else {
        
//             const selectedFilter = photoFilters[filterPick];
//             const image = $('<img>').attr('src', selectedFilter.link).attr('alt', selectedFilter.title);
            
//             $('.filterContainer').append(image); 

//         }
//     })

//     $('.newPhotoButton').on('click', function(){
//         $('section').empty();
//         scrollUp();


//          //TODO add hide classes back to things
//         $(userSelection.photoId).addClass('hide')
//         $('.tape').addClass('hide');

//         $('.dynamicFilters').addClass('hide');
//         $('.newPhotoButton').addClass('hide');

//     })
    

// });


//NEW TEST

const cameraApp = {};

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
            alt: 'A girl posing with a bouquet of flowers and one in her mouth in a field.'
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
            //TODO check if img is working
            film: 'kodak',
            subject: 'surprise',
            image: './styles/assets/leica-kodak-surprise.JPG',
            alt: 'A dog alseep in the doorway of a home'

        },
        {
            film: 'ilford',
            subject: 'landscape',
            image: './styles/assets/leica-ilford-landscape.JPG',
            alt:'A staircase in Italy adorned with a cactus.'
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
            alt: 'A popular beach cove in Italy where the locals hang out.'
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
            alt: 'Large basalt cliffs.'
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
            alt:'A girl kicking her leg in the air.'
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
            alt:'A large waterfall in Iceland.'
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

// create a function that takes the user's camera selection and filters through the options object to find its match and return it
cameraApp.usersPicks = function (camera, film, subject) {

    const cameraOptions = cameraApp.cameras[camera]
    console.log(cameraOptions);
  
    cameraOptions.filter((cameraOption) => {
     
        // find the film choice and subject choice within the camera array that matches the users selections 
        if (film === cameraOption.film && subject === cameraOption.subject) {
            const usersImage = cameraOption.image 
            const usersImageAlt = cameraOption.alt

            cameraApp.displayPhoto(usersImage, usersImageAlt);
        }
      
       
    });  
}


//create a function that displays the photo and accompanied text on the page
cameraApp.displayPhoto = function(source, altText){

    const heading = $('<h2>').text('Welcome to the club');
    const subHeading = $('<p>').text('This is your photo!');
    const image = $('<img>').attr('src', source).attr('alt', altText)

    $('.dynamicHeading').append(heading, subHeading);
    $('.dynamicImages').append(image);
}



//init function that is called once the document is ready
cameraApp.init = function(){

console.log('hi');

//create an event listener for when the user submits the form 
    $('form').on('submit', function (e) {
        e.preventDefault();

        // create an error handeling function for if not all options are selected


        //store the user's selections in variables
        const usersCameraPick = $('input[name = camera]:checked').val();
        const usersFilmPick = $('input[name = film]:checked').val();
        const usersSubjectPick = $('input[name = subject]:checked').val();

        cameraApp.usersPicks(usersCameraPick, usersFilmPick, usersSubjectPick);
    });
}


//document ready, calling the init function 
$(function(){
cameraApp.init();
})







 //empty out the contents of the section