
<h2>Happiness Reviewer</h2>
<p>Review your colleague.</p>

<h2>Getting Started</h2>
<p>To start the app, go to the "Backend" folder and run the following command: </p>
    <code>php artisan serve</code>

<p>App path: http://127.0.0.1:8000</p>

<h2>Authors</h2>
<p>Francesco D'Elia</p>

<h2>Project Info</h2>

<h4>FRONTEND</h4>
<p>Angular Version: 7.3.10</p>

============== BACKEND ==============
Laravel Version: 7.11.0

Add User with UserSeeder
    Command: php artisan db:seed --class=UserSeeder
    Input: Enter User name: (*Input*)

Add Review
    php artisan db:seed --class=ReviewerSeeder
    Enter User id: (*Input with user id FK*)
    Enter Date format: Y-m-d (*Input Review Date*)

EndPoints:
    web:
        [/login] POST
            (*Input: email*)
            (*Output: token*)
        [/getReviews] GET
            (*Input: none*)
            (*Output: Reviewes List*)
    api:
        [/getUsers] GET
            (*Input: none*)
            (*Output: Users List to Review*)
        [/searchReviews/{userId}] GET
            (*Input: userId*)
            (*Output: Reviews Associated with the User*) 
        [/rankedList] GET
            (*Input: none*)
            (*Output: Ranked List*) 
        [/getDataToChart] GET
            (*Input: none*)
            (*Output: Average of Ratings for the Chart*)         
        [/addReview] POST
            (*Input: (idUser: number, review: string, rating: number)*)
            (*Output: none*) 

============== DATABASE ==============
The DB dump is located in the DB folder.

There is some initial data.

