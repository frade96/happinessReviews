
<h1>Happiness Reviewer</h1>
<p>Review your colleague.</p>

<h2>Getting Started</h2>
<p>To start the app, go to the "Backend" folder and run the following command: </p>
    <code>php artisan serve</code>

<code>App path: http://127.0.0.1:8000</code>

<h2>Author</h2>
<p>Francesco D'Elia</p>

<h2>Project Info</h2>

<h4>FRONTEND</h4>
<p>Angular Version: 7.3.10</p>

<h4>BACKEND</h4>
<p>Laravel Version: 7.11.0</p>

<h5>SEEDER: ADD USER</h5>
    <code>php artisan db:seed --class=UserSeeder </code>

<h5>SEEDER: ADD VIEWER</h5>
    <code>php artisan db:seed --class=ReviewerSeeder</code>

<h5>EndPoints</h5>
    <p>web:</p>
        <p><code>/login POST </code></p>
        <p><code> Input: email </code>
        <code> Output: token </code></p>
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

