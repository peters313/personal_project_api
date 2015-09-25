$(document).ready(function(){
    //line of code that allows the ottoman slider to work
    $('#ottomanslider').ottomanslider();
    //submit search to database
$("body").on('click', '.submitButton', function(){
    var $inputs = $('#searchBaseball :input');
    var resultsObject = {};
    $inputs.each(function(){
        resultsObject[this.name] = $(this).val();
        });
    search($inputs);
});

});
//random baseball function for sportsFacts.html route
$('#container').on('click', '#randomBaseball', function(){
    $.ajax({
        url: "/random",
        success: function(data) {
            console.log(data);
            $('.container').append('<div class="resultsDiv"></div>');
            $('.resultsDiv').append('<p>Random Baseball Fact:' + data + '</p>');
        }
    });
});

function searchResults(results) {
    console.log(results);
    for(var i=0; i< results.length; i++){
        $('.container').append('<div class="resultsDiv"></div>');
        $('.resultsDiv').append('<p>Year:' + results[i].year + '</p>');
        $('.resultsDiv').append('<p>Sport: ' + results[i].sport + '</p>');
        $('.resultsDiv').append('<p>Winning Team:' + results[i].winner + '</p>');
        $('.resultsDiv').append('<p>Losing Team:' + results[i].loser + '</p>');
        $('.resultsDiv').append('<p>Series Final:' + results[i].series + '</p>');
    }
}

function search(query){

    $.ajax({
        type:'GET',
        dataType: 'json',
        url:'/api',
        complete: function(){
            console.log('ajax complete');
        },
        success: function(data){
            searchResults(data.results);
        }
    });
}

//information for ottoman slider on index.html
var data = [
    {
        "menu": {
            "id": "2",
            "title": "MLB Menu",
            "item": [
                {
                    "text": "Visit MLB Search Page",
                    "url": "/assets/views/mlb.html",
                    "title": "1"
                },
                {
                    "text": "MLB Official Home Page",
                    "url": "http://mlb.mlb.com/home",
                    "title": "2"
                },
                {
                    "text": "Today's Games",
                    "url": "http://m.mlb.com/scoreboard",
                    "title": "3"
                },
                {
                    "text": "Random Facts",
                    "url": "/assets/views/sportsFacts.html",
                    "title": "4"
                }
            ]
        }
    },
    {
        "menu": {
            "id": "3",
            "title": "Menu 3",
            "item": [
                {
                    "text": "Visit NHL Search Page",
                    "url": "/assets/views/nhl.html",
                    "title": "1"
                },
                {
                    "text": "NHL Official Home Page",
                    "url": "http://www.nhl.com/",
                    "title": "2"
                },
                {
                    "text": "Today's Games",
                    "url": "http://www.nhl.com/ice/schedulebyday.htm?navid=nav-sch-today",
                    "title": "3"
                },
                {
                    "text": "Random Facts",
                    "url": "/assets/views/sportsFacts.html",
                    "title": "4"
                }
            ]
        }
    },
    {
        "menu": {
            "id": "4",
            "title": "Menu 4",
            "item": [
                {
                    "text": "Visit NFL Search Page",
                    "url": "/assets/views/nfl.html",
                    "title": "1"
                },
                {
                    "text": "NFL Official Home Page",
                    "url": "http://www.nfl.com/",
                    "title": "2"
                },
                {
                    "text": "This Weeks Match-Ups",
                    "url": "http://www.nfl.com/scores",
                    "title": "3"
                },
                {
                    "text": "Random Facts",
                    "url": "/assets/views/sportsFacts.html",
                    "title": "4"
                }
            ]
        }
    },
    {
        "menu": {
            "id": "5",
            "title": "Menu 5",
            "item": [
                {
                    "text": "Visit NBA Search Page",
                    "url": "/assets/views/nba.html",
                    "title": "1"
                },
                {
                    "text": "NBA Official Home Page",
                    "url": "http://www.nba.com/",
                    "title": "2"
                },
                {
                    "text": "Today's Games",
                    "url": "http://www.nba.com/gameline/20151002/",
                    "title": "3"
                },
                {
                    "text": "Random Facts",
                    "url": "/assets/views/sportsFacts.html",
                    "title": "4"
                }
            ]
        }
    }
];


//allows pulling down json data and then posting it to the database **KEEP**
//    $.ajax({
//        url: '/data/baseballdata.json',
//        type: "GET",
//        dataType: "JSON",
//        success: function(data){
//            console.log(data);
//            buildObjects(data);
//    }
//});
//function buildObjects(data){
//    console.log(data);
//    $.each(data, function(index, object){
//        $.ajax({
//            url: '/admin',
//            type: "POST",
//            data: object,
//            dataType: "JSON",
//            success: function(data){
//                console.log(data);
//            }
//        });
//    });
//}