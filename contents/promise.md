```js
const place = ["Dublin" , "London" . "Switzerland"];

 //create a booking id
 //proceedToPayment is pass as  a callback fucntion
createBooking(place,function(){
    proceedToPayment(bookingId)
})
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
