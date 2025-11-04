 alert('Welcome To MTN Website')
let userinput3=prompt('Input Your Name')
prompt('Welcome TO MTN Website  '+userinput3+'')
prompt('Input Your Mobile Number')
let userinput= prompt('Select Any Service You Want(1.Airtime Balance:*310#, 2.Data Balance*323#, 3.Borrow Credit/Data:*303# ,)')  
//  4.Buy Data:*312#
    if (userinput==='1'){
        let result =Number(550.44);
    alert(`Result: ${result}`);
    }  else if (userinput==='2'){
        let result ='2.5gb';
    alert(`Result: ${result}`)
    }    else if (userinput==='3'){
     let userinput1=prompt('Input the Amount(The Highest You Can Borrow Is 1000)');
    let userinput2=   prompt('Are you sure you want to borrow '+userinput1+' If so Type continue ')
        if(userinput2=== 'continue'){
             let result = ('You have successfully borrowed '+userinput1+'')
        }
    alert(`Result: ${result}`)
    }

     if (userinput==='4'){
       let userinput5 =prompt('select a data plan\n 1.Daily plans \n 2.Weekly Plans\n 3.Monthly plans\n 4.Social Bundles');
        if (userinput==='1'){
            
        }
    alert(`Result: ${result}`)
    }
    
    

