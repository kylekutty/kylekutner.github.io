$(document).ready(function{
    var token = 'YOUR ACCSESS TOKEN', 
        userid = YOUR UserID,
        num_photos = 10; // how much photos do you want to get

    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data){
            console.log(data);
            for( n in data.data ){

                $('body').append('<div><img src="'+data.data[n].images.standard_resolution.url+'"></div>');

            }
        },
        error: function(data){
            console.log(data);
        }
    });
        })