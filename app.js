  //  let fruits=[]
    //fruits.push('apple','banana','orange')
 //   delete fruits[0]
 //   fruits.push('grape')
  //  fruits[1]='pear'
   // console.log(fruits)


//    let person={
//     name: "John",
//     age:30,
//     city:"New York"
//     }
//     delete person.age
//     person.job="engineer"
//     person.city="San Francisco"
//     console.log(person)


let cars=[
    {
        make:"Toyoto",
        model:"Camry",          // <<< 1st - car         
        year:2018
    },
    {
        make:"Hyundai",
        model:"certa",          //<<< 2nd - car         
        year:2010
    },
    {
        make:"Susuzki",
        model:"Baleno",         //<<< 3rd - car         
        year:2022
    }
]
delete cars[0]                                           // >>>> delete the 1st car
cars[3]={"make":"Honda","model":"Civic","year":2020}    // >>>> New Create Object{} into array[]
cars[1].model="Accord"                                  // >>>> Update the 2nd car>> "model"="Accord"
console.log(cars)                                               //final output</>