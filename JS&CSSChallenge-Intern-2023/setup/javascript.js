
window.alert(' Hello there, made by Filip Velkovski.')


//CHANGE THEME 
function changeTheme(theme) {
    var cards = document.getElementsByClassName("cardDiv");
    for (var i = 0; i < cards.length; i++) {
    if (theme === "dark") {
        cards[i].style.backgroundColor = "black";
        cards[i].style.color = "white";
    } else if (theme === "light") {
        cards[i].style.backgroundColor = "white";
        cards[i].style.color = "black";
    }
}
}
// -----------------------------------------------------------------
function changeGap() {
var gapInput = document.getElementById("gapInput");
var container = document.querySelector(".preview");

container.style.gap = gapInput.value + "px";
}
// -----------------------------------------------------------------
function changecolorInput(){
var colorInput1 = document.getElementById('cardBackgroundColor');
var card1 = document.querySelector('.cardDiv');

colorInput1.addEventListener('input', function () {
card1.style.backgroundColor = colorInput1.value;
			});
}
// ------------------------------------------------------------------
var container11 = document.getElementById('preview');
var select11 = document.getElementById('numberOfColumns');

                select11.addEventListener('change', (event) => {
                    var columns11 = parseInt(event.target.value);

                    switch (columns11) {
                        case 1:
                            container11.style.display = 'block';
                            container11.style.width = '100%';
                            container11.style.columnCount = '1';
                            break;
                        case 2:
                            container11.style.display = 'block';
                            container11.style.width = '100%';
                            container11.style.columnCount = '2';
                            break;
                        case 3:
                            container11.style.display = 'block';
                            container11.style.width = '100%';
                            container11.style.columnCount = '3';
                            break;
                        case 4:
                            container11.style.display = 'block';
                            container11.style.width = '100%';
                            container11.style.columnCount = '4';
                            break;
                        case 5:
                            container11.style.display = 'block';
                            container11.style.width = '100%';
                            container11.style.columnCount = '5';
                            break;
                        default:
                            container11.style.display = 'block';
                            container11.style.width = '100%';
                            container11.style.columnCount = '2';
                    }return;
                });
// ------------------------------------------------------------------------


























