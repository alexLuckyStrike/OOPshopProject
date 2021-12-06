
let btn = document.getElementById('pressBtn');
let root = document.getElementById('root');
let menu = document.getElementById('menu');

 async function createRequest(){
  
 return fetch('https://jsonplaceholder.typicode.com/users').then(response =>{

    return response.json()

  })

}

class PersonsList{

    constructor(){  }

    async fetchPosts(){
 
        const responseUsers = await createRequest() 
        
        for(let i = 0; i < responseUsers.length; i++){
        
            Object.keys(responseUsers[i]).forEach((item) => {
        
               if(item !== 'id' && item !== 'name' && item !=='username' && item !=='email'){
        
                  delete responseUsers[i][item]
        
               }
            })
          }   
       
    for(let i in responseUsers){

      const person = new PersonItem(responseUsers[i])

      person.render()

    }

     }

   async getData(){

    const data = await fetchPosts()
   
    console.log(data)

   }

     begin(){
       
        const btn = document.getElementById('pressBtn');

        btn.addEventListener('click',this.fetchPosts.bind(this))

     }
}


let getData = new PersonsList().begin()


class PersonItem{
    constructor(person){
      this.person = person
    }

    render(){
 const prodItem = document.createElement('li')
 prodItem.className = 'prod-item'
 console.log(this.person)

    }

}


// for(let i = 0; i < collection.length; i++){

// let target = new PersonsItem(collection[i]).person

// console.log(target)

// }

// var html = collection.map(function(item) {
//     return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
//   })
//   menu.insertAdjacentHTML('afterbegin', html.join(' '))

// class PersonItem{
// constructor(person){
// this.person = person
// }
// create(){
//     // const person = document.createElement('li');
//     // person.className = 'person';
//     // person.innerHTML = `<div>
//     // <h3>${this.person.id}</h3>
//     // <h3>${this.person.name}</h3>
//     // <h3>${this.person.email}</h3>
//     // </div>`;
//     console.log('!!!')
//  }
// }


// class PersonsItem{
// constructor(item,name,id,email){
// this.name = item.name
// this.id = item.id
// this.email = item.email
//     }
//     create(){
//         console.log('!!!')
//     }
// }

// let r = new PersonsItem();

// console.log(r)

// btn.addEventListener('click',fetchPosts)










