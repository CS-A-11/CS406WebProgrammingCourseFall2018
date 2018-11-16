# CS406 Web Programming Course Fall 2018

# Welcome ! :blush: 

This repo contains all the lectures and relevant content for the course 
## Course Outline
1. Intro to course, Web Essentials
2. Web Technologies and Architecture Overview
3. HTML+ Git
4. CSS + Flexbox + Bootstrap
5. CSS 
6. JavaScript Core
7. Javascript with DOM, JSON
8. jQuery
9. Introducing MEAN full stack development
10. Basic Node and Express setup
11. Building a static site with Node and Express
12. Building a data model with MongoDB and Mongoose Part 1
13. Building a data model with MongoDB and Mongoose Part 2
14. Writing a REST API Part 1
15. Writing a REST API Part 2
16. Consuming a REST API
17. Introducing AngularJS
18. Project Vivas
19. Authenticating users, managing sessions
20. XML
21. AJAX
22. AJAX
23. Search Technologies
24. Trends and Future Directions
25. SPA 1
26. SPA 2
27. Session Management
28. Project Presentations
29. n/a
30. n/a


## FAQs :gem:

### 1. How to prepare for the quiz?

Read the slides and references thoroughly. Quiz will be MCQ based.

2. What will come in the exam?

The contents of slides and provided references and code files are sufficient to prepare for the exam. If you are clever, you will search google for "HTML exam questions" etc. to get an idea. 

3. app_api or app_server?

This is an architectural question. Even without app_api we were following MVC and the views, models and controllers all resided in the app_server folder.

What changed when the app_api folder was introduced and what is the advantage of doing that?
The answer is... when app_api was introduced, new routes and associated controllers were defined and the models folder was moved to the app_api folder.

This is a HUGE change. Now the app_server has to send REQUEST to app_api routes for data. Because now it doesnt have the model.

The advantage of doing this is .... SEPARATING THE PRESENTATION LAYER FROM THE DATA LAYER....REUSABILITY.....the app_api routes can be used by any other application to serve information. 

For example, I ask you to build an API for movies, you will just write the middleware that interacts with the movies database and test the routes with Postman and deploy your application. Now I will ask you to make two different applications for movies searching with different visual interfaces. So you see, you will be REUSING the same routes for different movie applications deployed on different servers perhaps.

In the exam, it is recommended to follow simple MVC without the app_api folder.

4. I am geting an error and I don't know what's wrong?

Some of you told me about getting errors for which you were not able to figure out the cause. As in every programming language, the compiler throws errors when things are wrong, and thankfully God gave developers the good sense to make and use a debugger :) 

As in every IDE, VS Code also has a debugger. Please watch this 8 minute video https://www.youtube.com/watch?v=2oFKNL7vYV8 and learn how to debug your apps. 

When an error occurs, VSCode reports the name of the file and the exact line number. I would suggest adding a breakpoint around that line to figure out whats wrong. Sometimes the reason is that some variables are not initialized and undefined. You can easily watch the data in your variables in debug mode. Desi way is it console log everything but we should use tools right? :)

5. What will be the paper pattern for sessional 2?

The paper will be simply a case study. You will be given a scenario and for that you have to write the code to implement the back-end logic that addresses the user requests for that scenario.

You current case study Loc8r supports user requests like listing all locations and being able to view a location detail etc. What if a user wanted to search for locations by providing the location name and/or rating in a search form. How would you handle that request? Currently your home page displays only a list of locations. What if I wanted to display a list of reviewers on the home page too?


