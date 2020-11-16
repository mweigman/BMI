$(document).ready(function () {

    //validation

    var myValidation = {
        height: {
            required: true,
            min: 59,
            max: 79,
            digits: true
        },

        weight: {
            required: true,
            min: 88,
            max: 353,
            digits: true
        }

    }

    var myMessages = {
        height: {
            required: "Fill this in",
            min: "must be taller than 59 inches",
            max: "must be shorter than 79 inches",
            digits: "yikes! try again!"
        },

        weight: {
            required: "Fill this in",
            min: "must weigh more than 88 pounds",
            max: "must weigh less than 353 pounds",
            digits: "yikes! try again!"
        },

    }


    //events
    $("form").validate({
        submitHandler: calculateBmi,
        rules: myValidation,
        messages: myMessages
    });


    //functions

    function calculateBmi() {
        var heightInput = $("#height").val();
        var weightInput = $("#weight").val();

        var bmiFormula = (weightInput / (heightInput ** 2)) * 703;

        $("#bmiOutput").text(bmiFormula.toFixed(2));


            }

});