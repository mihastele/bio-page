const toOdd = $(".sectionContainer section:nth-child(odd)");
const toEven = $(".sectionContainer section:nth-child(even)");
/*const toOdd = $(".sectionContainer section:nth-child(odd) .contentContainer");
const toEven = $(".sectionContainer section:nth-child(even) .contentContainer");*/


toOdd.addClass("odd");
toEven.addClass("even");
$(".sectionContainer section:nth-child(1)").css("margin-top","30px");