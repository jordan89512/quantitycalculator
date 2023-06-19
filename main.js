// When user clicks submit
function calculateMaterial() {
    'use strict';
    //calculations go here
    var partsPerSheet = document.getElementById('partsPerSheet');
    var materialQuantityTotal = document.getElementById('materialQuantityTotal').value;
    var materialLength = document.getElementById('length').value;
    var materialWidth = document.getElementById('width').value;
    var partLength = document.getElementById('partLength').value;
    var partWidth = document.getElementById('partWidth').value;
    var mqLength = materialLength / partLength ;
    var mqWidth = materialWidth / partWidth;
    var mqLswapped = materialLength / partWidth;
    var mqWswapped = materialWidth / partLength;
    var mq1 = Math.floor(mqLength) * Math.floor(mqWidth);
    var mq2 = Math.floor(mqLswapped) * Math.floor(mqWswapped);
    var materialQuantity1 = 1 / mq1;
    var materialQuantity2 = 1 / mq2;
    
    console.log("First Parts per sheet calculation: " + mq1);
    console.log("First material quantity: " + materialQuantity1.toFixed(4))
    console.log("Second Parts Per sheet calculation: " + mq2);
    console.log("Second material quantity: " + materialQuantity2.toFixed(4))

    if (materialQuantity1 > materialQuantity2) {
        materialQuantityTotal = materialQuantity2.toFixed(4);
        partsPerSheet.value = mq2;
        document.getElementById('materialQuantityTotal').value = materialQuantityTotal;
    } else {
        materialQuantityTotal = materialQuantity1.toFixed(4);
        partsPerSheet.value = mq1;
        document.getElementById('materialQuantityTotal').value = materialQuantityTotal;
    }
    
    //total = total.toFixed(2); // only use this many places after decimal point
    //alert("The best material Quantity is: " + materialQuantityTotal);
    console.log("Best material quantity: " + materialQuantityTotal);
    return false; //stops from submitting/crashing
}

function calculateBox() {
    'use strict';

    var boxWidth = document.getElementById('boxWidth').value;
    var boxLength = document.getElementById('boxLength').value;
    var boxHeight = document.getElementById('boxHeight').value;
    var partWidthFG = document.getElementById('partWidthFG').value;
    var partLengthFG = document.getElementById('partLengthFG').value;
    var partHeightFG = document.getElementById('partHeightFG').value;
    var boxQuantityTotal = document.getElementById('boxQuantityTotal');

    // FIRST BOX CALCULATIONS        
    var divwidth = Math.floor(boxWidth / partWidthFG);
    var divlength = Math.floor(boxLength / partLengthFG);
    var layersPB = Math.floor(boxHeight / partHeightFG);

    var pplayer = Math.floor(divwidth * divlength);
    var ppbox = pplayer * layersPB;
    var boxqty = 1 / ppbox;
    boxqty = boxqty.toFixed(4)



    // SECOND BOX CALCULATIONS (SWAPPED ORIENTATION)
    var divwidth2 = Math.floor(boxWidth / partLengthFG);
    var divlength2 = Math.floor(boxLength / partWidthFG);
    var layersPB2 = Math.floor(boxHeight / partHeightFG);

    var pplayer2 = Math.floor(divwidth2 * divlength2);
    var ppbox2 = pplayer2 * layersPB2;
    var boxqty2 = 1 / ppbox2;
    boxqty2 = boxqty2.toFixed(4)

    console.log("Parts per box: " + ppbox); // First parts per box
    console.log("Box Quantity: " + boxqty); // First box qty
    console.log("2nd Parts per box: " + ppbox2); // second parts per box
    console.log("2nd Box Quantity: " + boxqty2); // second box qty

    if (boxqty > boxqty2) {
        var finalboxqty = boxqty2;
        var finalppb = ppbox2;
    }
    else {
        var finalboxqty = boxqty;
        var finalppb = ppbox;
    }

    boxQuantityTotal.value = finalboxqty + ' / ' + finalppb;
    console.log("The best Box Quantity between the two comparisons is " + finalboxqty);

    //alert("The best Box Quantity is: " + finalboxqty);

    return false;
}

function calculateFoam() {
    'use strict';

    // Declare and initialize
    var partLengthFin = parseFloat(document.getElementById('partLengthFin').value);
    var partWidthFin = parseFloat(document.getElementById('partWidthFin').value);
    var partHeightFin = parseFloat(document.getElementById('partHeightFin').value);
    var foamQuantityTotal = parseFloat(document.getElementById('foamQuantityTotal').value);

    // Normal orientation calculations
    var addBefore = partLengthFin + partHeightFin;
    var divideLength = 600 / addBefore;
    var divideWidth = 24 / partWidthFin;
    divideLength = Math.floor(divideLength);
    divideWidth = Math.floor(divideWidth);
    var partsPerRoll = divideLength * divideWidth;
    var getbefore1 = 1 / partsPerRoll;
    var doubleAll = getbefore1 * 2;
    doubleAll = doubleAll.toFixed(4);
    console.log("The first foam Quantity: " + doubleAll);

    // Reversed orientation
    var addBefore2 = partWidthFin + partHeightFin;
    var divideLengthSwapped = 600 / addBefore2;
    var divideWidthSwapped = 24 / partLengthFin;
    divideLengthSwapped = Math.floor(divideLengthSwapped);
    divideWidthSwapped = Math.floor(divideWidthSwapped);
    var partsPerRoll2 = divideLengthSwapped * divideWidthSwapped;
    var getbefore2 = 1 / partsPerRoll2;
    var doubleAll2 = getbefore2 * 2;
    doubleAll2 = doubleAll2.toFixed(4);
    console.log("The second foam Quantity (swapped orientation): " + doubleAll2);

    if (doubleAll > doubleAll2) {
        foamQuantityTotal = document.getElementById('foamQuantityTotal').value = doubleAll2;
    }
    else {
        foamQuantityTotal = document.getElementById('foamQuantityTotal').value = doubleAll;
    }
    console.log("Best Foam Quantity is: " + foamQuantityTotal);

    return false;
}

function calculateLaser() {
    'use strict';

    // Get the value of each field, and the dropdown options
 
    var partWidth1 = parseFloat(document.getElementById('partWidth1').value);
    console.log("the type of partwidth is " + typeof partWidth1);
    //console.log("the value of partwidth is: " + partWidth1);
 
    var partLength1 = parseFloat(document.getElementById('partLength1').value);
    console.log("The type of partlength is " + typeof partLength1);
    //console.log("The value of partlength is " + partLength1);

    var diameterTotal = parseFloat(document.getElementById('diameterTotal').value);
    console.log("The type of diameterTotal is " + typeof diameterTotal);
    //console.log("The value of diameterTotal is " + diameterTotal);

    var holes = parseInt(document.getElementById('holes').value);
    console.log("The type of holes is " + typeof holes);
    //console.log("The value of holes is " + holes);

    var mtlthickness = parseFloat(document.getElementById('mtlthickness').value);
    console.log("The type of mtlthickness is " + typeof mtlthickness);
    //console.log("The value of mtlthickness is " + mtlthickness);

    var selectedMaterial = document.getElementById('material').value;
    console.log("The type of selectedMaterial is " + typeof selectedMaterial);
    console.log("The value of selectedMaterial is " + selectedMaterial);
    
    var perInches = parseFloat(document.getElementById('perimeterInches').value);  //<<<problem - determine per inches total beforehand
    perInches = perInches.toFixed(4);
    console.log("The type of perInches is " + typeof perInches);
    //console.log("The value of perInches is " + perInches);

    // **** IMPROVEMENTS TO BE MADE: 
    //  1. FOR EACH MATERIAL --> REMOVE INITIAL THICKNESS FILTER.
    //  2. ADD EXCEPTION FOR ABOVE/BELOW RANGE TO CALCULATE AT MIN/MAX
    
    // IF CRS <--
    if (selectedMaterial == 'crs') {
        console.log('Cold Rolled Steel');
        if (mtlthickness >= 0.03 && mtlthickness <= 0.120) { //0.03 - 0.120

            if (mtlthickness >= 0.03 && mtlthickness < 0.05) {
                var newVar = (60 / (((holes * 1.6) + (perInches * 0.74)) / 60) * 0.95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.05 && mtlthickness < 0.06) {
                var newVar = (60 / (((holes * 1.7) + (perInches * 0.74)) / 60) * 0.93);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.06 && mtlthickness < 0.07) {
                var newVar = (60 / (((holes * 1.8) + (perInches * 0.75)) / 60) * 0.9);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.07 && mtlthickness < 0.08) {
                var newVar = (60 / (((holes * 2.05) + (perInches * 0.75)) / 60) * 0.9);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.08 && mtlthickness <= 0.09) {
                var newVar = (60 / (((holes * 2.1) + (perInches * 1)) / 60) * 1);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness > 0.09 && mtlthickness <= 0.1) {
                var newVar = (60 / (((holes * 2.2) + (perInches * 1)) / 60) * 0.95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness > 0.1 && mtlthickness <= 0.12) {
                var newVar = (60 / (((holes * 2.2) + (perInches * 1.05)) / 60) * 0.8);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            
        }
        else {alert('out of range (0.03 - 0.12');}

    } // END OF CRS -->

    // IF GRH / GLX -->
    else if (selectedMaterial == 'grhglx') {
        
        console.log('Galvanized Rolled Hot');

        if (mtlthickness >= 0.03 && mtlthickness <= 0.120) { //0.03 - 0.120 RANGE

            if (mtlthickness >= 0.03 && mtlthickness < 0.05) { // .03
                var newVar = (60 / (((holes * 2.5) + (perInches * 0.9)) / 60) * 1.05);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.05 && mtlthickness < 0.06) { // .05
                var newVar = (60 / (((holes * 2.5) + (perInches * 0.9)) / 60) * 1.02);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.06 && mtlthickness < 0.07) { // .06
                var newVar = (60 / (((holes * 2.5) + (perInches * 0.9)) / 60) * 1);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness == 0.07 || mtlthickness == 0.08) { // .07
                var newVar = (60 / (((holes * 2.5) + (perInches * 0.9)) / 60) * 0.98);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.07) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness > 0.08 && mtlthickness < 0.1) { // .09  
                var newVar = (60 / (((holes * 2.6) + (perInches * 0.9)) / 60) * .97); // .97
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.09) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.1 && mtlthickness < 0.12) { // .1
                var newVar = (60 / (((holes * 3) + (perInches * 1)) / 60) * 0.75);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.12 && mtlthickness < 0.13) { // .12
                var newVar = (60 / (((holes * 3) + (perInches * 1)) / 60) * 0.85);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            
        }
        else {alert('Out of Range (0.03 - 0.12');}
    } // END OF GRH / GLX -->

    // IF HRPO -->
    else if (selectedMaterial == 'hrpo') {
        console.log('Hot-Rolled Pickle Oil');
        if (mtlthickness >= 0.19 && mtlthickness <= 0.25) { //0.19 - 0.25

            if (mtlthickness >= 0.19 && mtlthickness < 0.23) {
                var newVar = (60 / (((holes * 5) + (perInches * 1.25)) / 60) * 0.65);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.23 && mtlthickness <= 0.25) {
                var newVar = (60 / (((holes * 5) + (perInches * 1.5)) / 60) * 0.64);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            
        }
        else {alert('out of range (0.19 - 0.25)');}
    } // END OF HRPO -->

    // IF ALUMINUM SHEET -->
    else if (selectedMaterial == 'alumsht') {
        console.log('Aluminum-Sheet');

        if (mtlthickness >= 0.03 && mtlthickness <= 0.125) { //0.03 - 0.125 RANGE

            if (mtlthickness >= 0.03 && mtlthickness < 0.05) { // .03
                var newVar = (60 / (((holes * 3) + (perInches * 1)) / 60) * 1.2);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.05 && mtlthickness < 0.06) { // .05
                var newVar = (60 / (((holes * 3) + (perInches * 1)) / 60) * 1.2);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.06 && mtlthickness <= 0.07) { // .06 - .07
                var newVar = (60 / (((holes * 3) + (perInches * 1)) / 60) * 1.2);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness == 0.08) { // .08
                var newVar = (60 / (((holes * 3.5) + (perInches * 1.5)) / 60) * 1.15);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.07) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness == 0.09) { // .09  
                var newVar = (60 / (((holes * 3.5) + (perInches * 1.5)) / 60) * 1.05); 
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.09) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.1 && mtlthickness < 0.12) { // .1
                var newVar = (60 / (((holes * 3.7) + (perInches * 1.75)) / 60) * 0.95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.12 && mtlthickness <= 0.125) { // .125
                var newVar = (60 / (((holes * 4) + (perInches * 2)) / 60) * 0.9);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            
        }
        else {alert('Out of Range (0.03 - 0.125');}

    } // END OF ALUMINUM SHEET -->

    // IF ALUMINUM PLATE -->
    else if (selectedMaterial == 'alumplt') {

        console.log('Aluminum-Plate');

        if (mtlthickness >= 0.18 && mtlthickness <= 0.25) { //0.18 - 0.25 RANGE

            if (mtlthickness >= 0.18 && mtlthickness <= 0.22) { // .18-.22
                var newVar = (60 / (((holes * 7) + (perInches * 2)) / 60) * 0.6);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.23 && mtlthickness <= 0.25) { // .23-.25
                var newVar = (60 / (((holes * 8) + (perInches * 2)) / 60) * 0.5);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
 
            
        }
        else {alert('Out of Range (0.18 - 0.25');}

    } // END OF ALUMINUM PLATE -->

    // IF STAINLESS STEEL SHEET -->
    else if (selectedMaterial == 'sssht') {

        console.log('Stainless Steel Sheet');

        if (mtlthickness >= 0.03 && mtlthickness <= 0.120) { //0.03 - 0.120

            if (mtlthickness >= 0.03 && mtlthickness < 0.05) { // .03 OR .04
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 1);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.03/.04)" + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.05 && mtlthickness < 0.06) { // .05
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 0.99);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.05) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.06 && mtlthickness < 0.07) { // .06
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 0.98);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.06) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.07 && mtlthickness <= 0.08) { // .07 OR .08
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 0.95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.07/.08) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.09 && mtlthickness < 0.1) { // .09
                var newVar = (60 / (((holes * 2.7) + (perInches * 1)) / 60) * .95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.09) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.1 && mtlthickness <= 0.11) { // .1 OR .11
                var newVar = (60 / (((holes * 2.8) + (perInches * 1)) / 60) * 0.9);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.1/.11) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness == 0.12) { // .12
                var newVar = (60 / (((holes * 3) + (perInches * 1.2)) / 60) * 0.7);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.12) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            
        }
        else {alert('out of range (0.03 - 0.12');}

    } // END OF STAINLESS STEEL SHEET -->
    
    // IF STAINLESS MIRROR -->
    else if (selectedMaterial == 'sssht') {

        console.log('Stainless Steel Mirror');

        if (mtlthickness >= 0.03 && mtlthickness <= 0.12) { //0.03 - 0.120

            if (mtlthickness >= 0.03 && mtlthickness < 0.05) { // .03 OR .04
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 1);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.03/.04)" + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.05 && mtlthickness < 0.06) { // .05
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 0.99);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.05) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.06 && mtlthickness < 0.07) { // .06
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 0.98);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.06) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.07 && mtlthickness <= 0.08) { // .07 OR .08
                var newVar = (60 / (((holes * 2.5) + (perInches * 1)) / 60) * 0.95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.07/.08) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.09 && mtlthickness < 0.1) { // .09
                var newVar = (60 / (((holes * 2.7) + (perInches * 1)) / 60) * .95);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.09) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness >= 0.1 && mtlthickness <= 0.11) { // .1 OR .11
                var newVar = (60 / (((holes * 2.8) + (perInches * 1)) / 60) * 0.9);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.1/.11) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            else if (mtlthickness == 0.12) { // .12
                var newVar = (60 / (((holes * 3) + (perInches * 1.2)) / 60) * 0.7);
                console.log("newVar calc is type " + typeof newVar);
                console.log("The value of newVar is (.12) " + newVar.toFixed(4));
                newVar = Math.round(newVar);
                document.getElementById('laserpph').value = newVar;
            }
            
        }
        else {alert('out of range (0.03 - 0.12');}

    } // END OF STAINLESS MIRROR <--

    else {alert('error - dropdown menu problem');}

    return false;
}

function calcInches() {
    'use strict';
    var partWidth1 = parseFloat(document.getElementById('partWidth1').value);
    var partLength1 = parseFloat(document.getElementById('partLength1').value);
    var diameterTotal = parseFloat(document.getElementById('diameterTotal').value);
    
    var partWidthMult = partWidth1 * 2;
    var partLengthMult = partLength1 * 2;

    var totalInches = partWidthMult + partLengthMult + diameterTotal;
    console.log("Perimeter inches: " + totalInches.toPrecision(4));
    document.getElementById('perimeterInches').value = Math.round(totalInches);

    return false;
}

function init() {
    'use strict';
    // Element.Event = Function
    var theForm = document.getElementById('theForm'); 
    theForm.onsubmit = calculateMaterial;
    var theForm2 = document.getElementById('theForm2'); 
    theForm2.onsubmit = calculateBox;
    var theForm3 = document.getElementById('theForm3'); 
    theForm3.onsubmit = calculateFoam;
    var theForm4 = document.getElementById('theForm4'); 
    theForm4.onsubmit = calculateLaser;
}

window.onload = init; //initialize all code once the window loads