# Seat-reservation

### RUN Backend:
* `cd backend`
* `npm install`
* `node server.js` *(for starting server)*
* `node seeds.js` *(Running this file will add 20 dummy data entries in the database)*

### Race Condition Prevention:
I have used MongoDB's atomic `findOneAndUpdate()` with a condition `{seatNumber, status: constant.AVAILABLE}`. 

Only one request succeeds and the other fails, as this ensures that the seat is only updated if it is currently available. 
For proper verification, I have added Real-time Toast notifications. I tested this by booking parallelly at the exact same time;
it gives a success message to one user and an "already reserved" message to the other.

### Frontend Deployment Link:
[https://seat-reservation-system-sneha.netlify.app/](https://seat-reservation-system-sneha.netlify.app/)
