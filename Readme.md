### Following Are The Request Related To Users

## Request for Register A User

> POST /user/signup

- if User Provides Name, Email, Password, Phone_NO then server will Store the data in json file after Bcrypt the password.

- user will get the following response
   - 200 as Response, if user got register successfully.
   - 400 as Response, if user not fills all the fields for registration.
   - 409 as Response, if user already registered.
   - 500 as Response, if server not response.


## Request for Login A User

> POST /user/login

- if User Provides  Email, Password then server will Check the data and Provides a Token.

- User will get the following response
   - 200 as Response, if user got Login successfully.
   - 400 as Response, if user not fills all the fields for Login or user not provide the correct password.
   - 404 as Response, if user not signup before login.
   - 500 as Response, if server not response.


### Following Are The Request Related To Booking

## Request for creating a Booking

> POST /book

- if User provides a Type, Date, StartTime and EndTime then serve will store the data in json file.

- User will get the following response
   - 200 as Response, if user post Booking successfully.
   - 400 as Response, if user not fills all the fields for creation of booking.
   - 409 as Response, if slot not exist for particular time.
   - 500 as Response, if server not response.


## Request for getting a list of booking of a particular user.

> GET /book

 - User can Access the List of a Booking of them only.

 - User will get the following response
    - 200 as Response, get a list of Booking.
    - 500 as Response, if server not response.



## Request for Deleting a Booking By ID.

> DELETE /book

- if user provides a ID of a booking in params, then server will get that booking by ID and Delete.

- User will get the following response
   - 200 as Response, if Booking Delete successfully.
   - 401 as Response, if user is not a authorised user.
   - 409 as Response, if Booking with that ID not exist.
   - 500 as Response, if server not response.



Presentation Vedio :- https://drive.google.com/file/d/1mZGEKwHmbJ6_klpw1KCxJWgVOCjY5a0M/view?usp=sharing
