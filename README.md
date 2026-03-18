# Seat-reservation

RUN Backend :-
cd backend
npm install
node server.js  (for starting server)
node seeds.js (Running this file will add 20 dummy data in database)



Race Condition :-
 I have used MongoDB's atomic finfOneAndUpdate() with a condition 
  {seatNumber, status: constant.AVAILABLE},
 only one request succeeds and other fails as this ensures that the seat is on;y updated if it is avaialble.
 For proper verification I have added Real-time Toast notification and tested by parallely 
 by booking at the same time it will give success to one and already reserved to another.


Frontend Deployment link :-
https://seat-reservation-system-sneha.netlify.app/
