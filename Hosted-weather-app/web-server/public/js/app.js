const weatherForm = document.querySelector('form')
 //giving us access to search input
const search = document.querySelector('input')
//variable that stores access to html dom <p> element #1
 const messageOne = document.querySelector('#message-1')
//variable that stores access to html dom <p> element #2
const messageTwo = document.querySelector('#message-2')
messageTwo.textContent = ''


//adding event listner so that api begins request and response  process after clicking search button
 weatherForm.addEventListener('submit',(e)=>{
    //prevent default to stop <form> tag from completeing auto send/refresh action
    e.preventDefault() 
    //storing user input as variable
    const location = search.value
    //allows us to display 'loading' msg after clicking search button while waiting on api date
    messageOne.textContent = 'Loading....'
    //clears extra info on the 2nd <p> tag while we wait for new data/ refresh from old data
    messageTwo.textContent = ''
    //calling fetch function  to kickoff http request to weather api
    //.then to specify callback function once promise (http request) is completed
    //response.json to extra data as json
    //.then(data) contains parsed jsoon from response body
fetch('/weather?address='+ location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){ //error handling
         messageOne.textContent = data.error //printing error (msg) property from data object(response) to dom <p> tag 
        }else{ //if no error, print location and forecast properties from data object to the UI (dom <p> tag)
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast

        }
    })
})
 })

