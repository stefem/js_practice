var current;
var output;

function f_all_combinations(input) {
    var initial_length = input.length;
    
    for (var i = 0; i <= initial_length; i++){
        for (var j = 0; j <= initial_length; j++){
            
            current = input.slice(i, j);
            // if (current) {
            //     if (!output){
            //         output = current;
            //     } else {
            //         output = output + ", " + current;
            //     }
            // }

            (current) ? ((!output) ? output = current : output = output + ", " + current) : console.log();

        }
    }
    return output;
}

document.getElementById("cn").innerText = "All combinations: " + f_all_combinations("arsebiscuits");

// Alternative answer
//Write a JavaScript function that generates all combinations of a string.
// function substrings(str1)
// {
// var array1 = [];
//   for (var x = 0, y=1; x < str1.length; x++,y++) 
//   {
//    array1[x]=str1.substring(x, y);
//     }
// var combi = [];
// var temp= "";
// var slent = Math.pow(2, array1.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<array1.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array1[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   console.log(combi.join("\n"));
// }

// substrings("dog");