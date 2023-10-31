// function Fun(str){
// 	let arr = [];
// 	let num = 0;
// 	if(str==str.toUpperCase()){
// 		console.log("You must have lowercase letters!");
// 	}
// 		else if(str == str.toLowerCase()){
// 			console.log("You must have capital letters!")
// 		}
// 			else if(str.match(/\d/)){
// 				var form = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
// 				for(let i = 0; str[i] + 1; i++){
// 					if(str[i].match(form)){
// 					num++;
// 					if(num > 8){
// 						console.log(str[i]);
// 						}
// 					}
// 				}
// 				if(num < 8){
// 					console.log("true");
// 				}
// 			}
// 			else{
// 				console.log("You must have numbers");
// 			}
// }
// Fun("asdSDF46156!@#$%^&*!@#$%");



// let arr = [1,20,3,8,25];
// let max=0;
// for(let i=0;i<arr.length;i++){
// 	if(arr[i]>max){
// 		max=arr[i];
// 	}
// }
// console.log(max);



// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,5,8,11,55,88,3];
// for(let i=0;i<arr1.length;i++){
// 	for(let j=0;j<arr2.length;j++){
// 		if(arr1[i]==arr2[j]){
// 			console.log(arr1[i] + "~" + arr2[j]);
// 		}
// 	}
// }

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// let i = 0;
// let j = 0;
// for(i = 0;i <=arr.length;i++){
// 	for(j = 2; j < arr.length; j++){
// 		if(arr[i]%j==0){
// 			break;
// 		}
// 	}	
// 	if(arr[i]==j){
// 		console.log(arr[i]);
// 	}
// }

// function Sum(){
// 	let inp1 = Number(document.getElementById("inp_1").value);
// 	let inp2 =  Number(document.getElementById("inp_2").value);
// 	document.getElementById("demo").innerHTML = inp1 + inp2;
// 	document.getElementById("demo").style.color = "blue";
// }

// function Mult(){
// 	let inp1 = Number(document.getElementById("inp_1").value);
// 	let inp2 = Number(document.getElementById("inp_2").value);
// 	document.getElementById("demo").innerHTML = inp1 * inp2;
// 	document.getElementById("demo").style.color = "red";
// // }
// let arr = [];

// function Fun(){
// 	let arr = [];
// 	let inp1 = Number(document.getElementById("inp_1").value);
// 	let inp2 = Number(document.getElementById("inp_2").value);
// 	let x ;
// 	let y ;
// 	if(inp1>inp2){
// 		x=inp2;
// 		y=inp1
// 	}
// 	else{
// 		x=inp1;
// 		y=inp2;
// 	}
// 	for(let i = x;i<=y;i++){
// 		arr.push(i);
// 	}
// 	let check = false;
// 	for (let i = 0; i < arr.length; i++) {
//     	for(let j = 2; j <= arr[i]/2; j++) {
//         	if (arr[i]%j==0) {
//             	check = true;
//             	break;
//         	}
//         	else
//         	{
//             	check = false;
//         	}
//     	}
//     if(!check && arr[i] >= 2)
//     console.log(arr[i]);
// }
// }
// let x = "5";
// parseInt();
// console.log()


// let check = false;
// for (let i = 0; i < arr.length; i++) {
//     for(let j = 2; j <= arr[i]/2; j++) {
//         if (arr[i]%j==0) {
//             check = true;
//             break;
//         }
//         else
//         {
//             check = false;
//         }
//     }
//     if(!check && arr[i] >= 2)
//     console.log(arr[i]);
// }

// -----------TOTAL LIST--------------------------

// function Fun(){	
// let tot = document.getElementById('tot');
// let inp1 = Number(document.getElementById('inp1').value);
// let inp2 = Number(document.getElementv('inp2').value);
// let per = parseInt(document.getElementById('per').value);
// console.log(per)
// let total_all = document.getElementById('all_tot');
// let sum = inp1 * inp2;
// let percent = (sum*per)/100;
// tot.value = (sum+percent) * fun1();
// total_all.value = Number(total_all.value) + Number(tot.value);
// }

// $("#plus").click(function(){
// 	let sum = $("#inp1").val() + $("#inp2").val();
// 	console.log(sum);
// 	let percent = (sum*$("#per").val())/100;
// 	console.log(percent);
// 	$("#tot").val(sum+percent);
// 	// $("#tot").val() = (sum+percent) * fun1();
// 	// $("#total_all").val(parseInt($("#total_all").val()+parseInt($("#tot").val()))); 
// })

// function fun1(){
// 	let select  = document.getElementsByClassName('select').value;
// 	let sel_per = $(".sel_per").val() = $(".select").val(); 
// 	return Number(sel_per);
// }
// function fun_rem(){
// 	document.getElementsByClassName('tot').value  = 0 ;
// 	document.getElementsByClassName('inp1').value = 0;
// 	document.getElementsByClassName('inp2').value = 0 
// }

// $(document).ready(function(){
	
// 	$("#add").click(function(){

// 		$("body").append("<div class='div'></div>");
// 		$(".div").append("<input class ='inp-1' type='number'  value='0'></input>");
// 		$(".div").append("<input class ='inp-2' type='number'  value='0'></input>");
// 		$(".div").append("<select class='per'><option>1%</option><option>10%</option><option>20%</option><option>30%</option><option>40%</option><option>50%</option><option>60%</option><option>70%</option</select>")
// 		$(".div").append("<input class ='total'></input><span class='sp'>ARM</span>");
// 		$(".div").append("<button class ='btn1'>Sum</button>");
// 		$(".div").append("<button class ='btn2'>Del</button>");
// 		$(".btn1").click(function(){
// 			let sum = parseFloat($(".inp-1").val()) + parseFloat($(".inp-2").val());
// 			let tot = $("#tot").val(sum);
// 			let x = $("#all_tot").val();
// 			$("#all_tot).val(parseFloat(x) + parseFloat(tot.val())); 
// 		})

// 		$(".btn2").click(function(){
// 			$(".div").remove();
// 		})
// 		$(".div").append("<div class='div'><div>");
// 	})
	
// })


// function fun1(){
//  let select  = document.getElementById('select').value;
//  let sel_per = document.getElementById('sel_per').value = document.getElementById('select').value;
//  return Number(sel_per);
// }
// // $("#select").click(function(){
// //     let select = $("#select").val();
// //     $("#sel_per").val($("#select").val());
// //     let val = parseInt($("#sel_per").val());
// //     var sel = val;
// // })

// $(document).ready(function(){

//    // Add new element
//    $(".add").click(function(){

//        // Finding total number of elements added
//        var total_element = $(".element").length;
 
//        // last <div> with element class id
//        var lastid = $(".element:last").attr("id");
//        var split_id = lastid.split("_");
//        var nextindex = Number(split_id[1]) + 1;

//        var max = 10;
//        // Check total number elements
//        if(total_element < max ){
//             // Adding new div container after last occurance of element class
//             $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
 
//             // Adding element to <div>
//              $("#div_" + nextindex).append("<input type='number'id ='inp1_"+ nextindex +"'>")
//              $("#div_" + nextindex).append("<input type='number'id ='inp2_"+ nextindex +"'>")
//              $("#div_" + nextindex).append("<select id='per_"+ nextindex + "'><option>1%</option><option>10%</option><option>20%</option><option>30%</option><option>40%</option><option>50%</option><option>60%</option><option>70%</option</select>")
//             $("#div_" + nextindex).append("<input type='number'  id='tot1_"+ nextindex +"'><button id = 'btn1_"+ nextindex +"' class = 'sum'>Sum</button>><span id='remove_" + nextindex + "' class='remove'>X</span>");
                
//        }
 
//    });

//    // Remove element
//    $('.container').on('click','.remove',function(){
 
//        let id = this.id;
//        let split_id = id.split("_");
//        let deleteindex = split_id[1];

//        // Remove <div> with id
//        $("#div_" + deleteindex).remove();

//    });

//    $('.container').on('click','.sum',function(){
//        let id = this.id;
//        let split_id = id.split("_");
//        let  deleteindex = split_id[1];
//        let per = parseInt($("#per_"+deleteindex).val());
//        let product = parseInt($("#inp1_"+ deleteindex).val()) * parseInt($("#inp2_"+deleteindex).val());
//        let percent = (product*per)/100;
//        parseInt($("#tot1_"+deleteindex).val((product+percent)*fun1()));
//        let ol = parseInt($("#tot1_"+deleteindex).val());
//        let all = parseInt($("#total_all").val());
//        let sum = ol+all;
//        $("#total_all").val(parseInt();
       
//    });
// $("#select").click(function(){
//     let select = $("#select").val();
//     $("#sel_per").val($("#select").val());
//     let val = parseInt($("#sel_per").val());
//     var sel = val;
// })

// });
// $('.container').on('click','#click',function(){
   //     let per = parseFloat($("#per").val());
   //     let product = parseFloat($(".inp1").val()) * parseFloat($(".inp2").val());
   //     let percent = (product*per)/100;
   //     parseFloat($("#tot").val((product+percent)*fun1()));
   //     let ol = parseFloat($("#tot").val());
   //     let all = parseFloat($("#total_all").val());
   //     $("#total_all").val(parseFloat(all+ol))
       
   // });

// -----------TOTAL LIST--------------------------





// $(document).ready(function(){
    
//         let total_element = $(".element").length;
//         let lastid = $(".element:last").attr("id");
//         let split_id = lastid.split("_");
//         let nextindex = Number(split_id[1]) + 1;
//         $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
//         $("#div_" + nextindex.append)("<input type='number' value='0' class='inp1' id = 'inp1_"+ nextindex +"'>")
//         $("#div_" + nextindex).append("<input type='number' value='0' class='inp2' id = 'inp2_"+ nextindex +"'>")
//         $("#div_" + nextindex).append("<select class='sel' id='per_"+ nextindex + "'><option>1%</option><option>10%</option><option>20%</option><option>30%</option><option>40%</option><option>50%</option><option>60%</option><option>70%</option</select>")
//         $("#div_" + nextindex).append("<input value='0' type='number' class='inp2' id='tot"+ nextindex +"'><button id='remove_" + nextindex + "' class='remove btn'>X</button>");
   
//    $("#add").click(function(){
//        let total_element = $(".element").length;
//        let lastid = $(".element:last").attr("id");
//        let split_id = lastid.split("_");
//        let nextindex = Number(split_id[1]) + 1;
//         $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
//         $("#div_" + nextindex).append("<input type='number' value='0' class='inp1' id = 'inp1_"+ nextindex +"'>")
//         $("#div_" + nextindex).append("<input type='number' value='0' class='inp2' id = 'inp2_"+ nextindex +"'>")
//         $("#div_" + nextindex).append("<select class='sel' id='per_"+ nextindex + "'><option>1%</option><option>10%</option><option>20%</option><option>30%</option><option>40%</option><option>50%</option><option>60%</option><option>70%</option</select>")
//         $("#div_" + nextindex).append("<input value='0' type='number' class='inp2' id='tot"+ nextindex +"'><button id='remove_" + nextindex + "' class='remove btn'>X</button>");
//     })

//    $('.container').on('click','.remove',function(){
//         let id = this.id;
//         let split_id = id.split("_");
//         let deleteindex = split_id[1];
//         $(".container .inp1").each(function () {})
//         let elm = $("#tot1_" + deleteindex).val();
//         let all_tot = $("#total_all").val();
//         $("#div_" + deleteindex).remove();
        
//    })
    // $(".container").on('input', 'input', function () {
    //     let id = this.id;
    //     let split_id = id.split("_");
    //     let deleteindex = split_id[1];
    //     let x = $("#inp_1"+deleteindex).val();
    //     let y = $("#inp_2"+deleteindex).val();
    //     $("#tot" + deleteindex).val(parseInt(x)+parseInt(y));
    // })

// $('.container').on('keyup','input',function(){
//         let id = this.id;
//         let split_id = id.split("_");
//         let deleteindex = split_id[1];
//         // let per = parseFloat($("#per_" + deleteindex).val());
//         let inp1 = parseFloat($("#inp1_" + deleteindex).val());
//         let inp2 = parseFloat($("#inp2_" + deleteindex).val());
//         let product = inp1 * inp2;
//         // let percent = (product * per) / 100;
//         parseFloat($("#tot1_" + deleteindex).val((product) * fun1()));
//    })
   // $('.container').on('keyup','.inp1',function(){
   //      let product = 1;
     
   //     $(".container .inp1").each(function () {
   //          let id = this.id;
   //          let split_id = id.split("_");
   //          let deleteindex = split_id[1];
   //          let value = $(this ).val();
   //          console.log(value)
   //          // if ($.isNumeric(get_textbox_value)) {
   //          // product *= parseFloat(get_textbox_value);
   //          // } 
   //              // let per = parseInt($("#per_"+deleteindex).val());
   //              // let perc = (product*per)/100;
   //              $(".inp_"+deleteindex).val();
   //              $("#total_all").val(parseInt(parseInt($("#tot"+deleteindex).val())))
   //          })
                
   // })
   // $(".container").on('input', '.inp1', function () {
   //          let id = this.id;
   //          let split_id = id.split("_");
   //          let deleteindex = split_id[1];
   //     $(".container .inp1").each(function () {
   //         var get_textbox_value = $(this).val();
   //         let product = 1;
   //          $("#tot"+deleteindex).val(product *=get_textbox_value)
   //         // if ($.isNumeric(get_textbox_value)) {
   //         //    }  

   //          })

   //     })

function fun1(){
    $("#sel_per").val($("#select").val());
    return Number( $("#sel_per").val());
}

$(document).ready(function(){
    function element(){
        let total_element = $(".element").length;
        let lastid = $(".element:last").attr("id");
        let split_id = lastid.split("_");
        let nextindex = Number(split_id[1]) + 1;
        $(".element:last").after("<div class='element' id='div_"+ nextindex +"'></div>");
        $("#div_" + nextindex).append("<input type='number' value='1' class='inp1' id = 'inp1_"+ nextindex +"'>");
        $("#div_" + nextindex).append("<input type='number' value='1' class='inp1' id = 'inp2_"+ nextindex +"'>");
        $("#div_" + nextindex).append("<select class='sel' id='per_"+ nextindex + "'><option>0%</option><option>10%</option><option>20%</option><option>30%</option><option>40%</option><option>50%</option><option>60%</option><option>70%</option</select>");
        $("#div_" + nextindex).append("<input disabled value='0' type='number' class='inp2' id='tot"+ nextindex +"'><button  id='remove_" + nextindex + "' class='remove btn'>X</button>");
    }
    element();
    $("#add").click(function(){element()})

    $(".container").on('click','.remove', function () {
        let index = this.id.split("_")[1];
        let all_tot = parseInt($("#total_all").val());
        let tot = $("#tot" + index).val();
        $("#div_" + index).remove();
        $("#total_all").val(all_tot - tot);
    })

    $('.container').on('input','input',function(){
        let index = this.id.split("_")[1];
        function count(){
            let per = parseFloat($("#per_" + index).val());
            let product = parseFloat($("#inp1_" + index).val()) * parseFloat($("#inp2_" + index).val());
            let percent = (product * per) / 100;
            let calcul = ((product + percent)*fun1()).toFixed(1);
            parseInt($("#tot" + index).val(calcul));
            var total_sum = 0;
            $(".container .inp2").each(function () {
                var textbox_value = $(this).val();
                if ($.isNumeric(textbox_value)) {
                    total_sum += parseFloat(textbox_value);
                }
            })
            parseInt($("#total_all").val(total_sum.toFixed(1)));
        }
        count();
        $("select").change('?',function(){
            count();
        })
    })
})
