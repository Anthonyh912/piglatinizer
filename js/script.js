$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function(){
        let vowels = ["a","e","i","o","u"];
        let words = $("input").val();
        $(".output").text(words);
        let letters = words.split("")
        vowels.includes(letters[0])

        if (vowels.includes(letters[0])) {
            $(".output").append(word + "ay")
        }





    });
});
