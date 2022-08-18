// const URL = "https://random.dog/doggos";

const URL = 'https://dog.ceo/api/breeds/image/random'

const $message = $(doggieImg);



function render(dogData){
    $('.left').html(`
    <img src='${dogData}'/>
    `)
}



 const promise = $.ajax({
	url: `${URL}`,
	type: 'GET',
	dataType: 'json',
	success: function (response) {
		let path = response;
		console.log(path);
		
	},
});

 promise.then(
    function(data) {
        console.log ('data:', data);
render(data.message)
    },
function(error){
    console.log("error:", error)
    }
);

