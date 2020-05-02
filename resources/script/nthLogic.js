const toOdd = $(".sectionContainer section:nth-child(odd)");
const toEven = $(".sectionContainer section:nth-child(even)");
/*const toOdd = $(".sectionContainer section:nth-child(odd) .contentContainer");
const toEven = $(".sectionContainer section:nth-child(even) .contentContainer");*/


toOdd.addClass("odd");
toEven.addClass("even");
$(".sectionContainer section:first-child() .contentContainer").css("margin-top","30px");
$(".sectionContainer section:last-child() .contentContainer").css("margin-bottom","0");