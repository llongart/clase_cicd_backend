var HTMLChanger = (function() {
    var contents = 'contents'

    var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
    }

    return {
    callChangeHTML: function() {
        changeHTML();
        console.log(contents);
    }
    };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
