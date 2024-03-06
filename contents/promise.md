
`Promise` is an object that represent eventual completion of async operation.

In `Promise` we are attaching callback function to a  promise object.

State of promise : tells in which state promise is

1)pending state     
2)fullfill state      
3)rejected state

Promise Result : hold the data
```js
const place = ["Dublin" , "London" . "Switzerland"];

 //create a booking id
 //proceedToPayment is pass as  a callback fucntion

//createBooking api creates a promise object and return it
const promise = createBooking(place);

promise.then(function(){
    proceedToPayment(bookingId)
});

//Producer function to create a booking
const createBooking(place){
    const pr = new Promise(function(resolve,reject){
        
        //Validate the Booking
        if(!validateBooking(place))
        {
            const err = new Error("Not Valid");
            reject(err);
        }
        // Generating a booking id
        const bookingId  = generateBookingId();
        if(bookingId)
        {
            resolve(bookingId);
        }
    }
    return pr;
)}

```
