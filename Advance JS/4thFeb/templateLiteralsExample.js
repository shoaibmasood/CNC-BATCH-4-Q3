//TEMPLATE LITERALS aka STRING LITERALS aka TEMPLATES STRING


/************************************************** */
// Try any part one at a time

// function myFunc(){
//     return '25'
// }

// let firstNumber = 10
// let secondNumber = 20

// const result = `the sum of two number ${firstNumber}`

// console.log(result)







/************************************************** */
//New Way


// let instructor = "Asad"
// let course = "Advance Javascript"

// let sentence = `My name is ${instructor} and I am teaching you ${course}`

// console.log(sentence)  //RESULT: My name is Asad and I am teaching you Advance Javascript





/************************************************** */
// Make sure you have <div id='root' style="white-space: pre-wrap"></div> in ur HTML File
// refer link for help https://www.w3schools.com/cssref/pr_text_white-space.asp

// Thing to notice that we have style in div
// style="white-space: pre-wrap"

let paragraph =
            `Paragraph:
        1. Sind:
                1.1 Karachi:
                1.2 Hyderabad:
        2. Punjab:
                2.1 Lahore:
                2.2 Islamabad:
        3. KPK:
                3.1 Peshawer:
                3.2 SAWAT:
        4. Balochistan:
                3.1 Quetta:
                3.2 Ziyarat:
        Conclusion: This is Template literal example`;
        
        

        console.log(paragraph);
        document.getElementById('root').innerHTML = paragraph;
        // document.write(paragraph)
