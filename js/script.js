$(document).ready(function () {




    var numbers = ["Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    var suites = ["Clubs", "Hearts", "Diamond", "Spade"];
    var list = [];


    $("#form").submit(function (event) {
        event.preventDefault();
        $("#form").hide();

        suites.forEach(function (suite) {
            var list = numbers.map(function (number) {
                return (number + " of " + suite + "</br>");




            })



            $("#result").append(list);

            console.log(list)


        })

    })
});
