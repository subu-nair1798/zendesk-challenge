# Zendesk Coding Challenge

A web-based ticket viewer for Zendesk's Intern Coding Challenge. 

Tech Stack :

- ```Node.js```
- ```React```
- ```Jest``` + ```Enzyme``` 

![Home Page](homePage.png)
*Home Page*

![Home Page](ticketDetailsPage.png)
*Ticket Details Page*

## Prerequisites

- Install ```node.js``` from their [website](https://nodejs.org/en/).
- ```npm``` was the node package manager of choice for this assignment.

## Installation

Clone the project

```bash
git clone https://github.com/subu-nair1798/zendesk-challenge.git
```

Move into the directory

```bash
cd zendesk-challenge
```

Install server-side dependencies

```bash
npm install
```

Move into the client directory

```bash
cd client
```

Install client-side dependencies

```bash
npm install
```

## Deployment 

Go to the root directory i.e. *zendesk-challenge* and run :

```bash
npm run dev
```

```concurrently``` simultaneously runs a server-side and clients-side script.

## Tests

Go to the root directory i.e. *zendesk-challenge* and run :

```bash
npm run test
```
# Task-wise Breakdown

### Task 1

The application in its entirety is the response to Task 1.

### Task 2

As a response to Task 2, I have created an intuitive UI using ```React```. The naming of class components, functional components and all the other elements of the application conform to the commonly accepted naming convention. Additionally, I have attached a ```README.md``` file that guides you through the entire project. Further, there are screenshots attached in the main ```README.md``` file.

### Task 3

As a response to this task, the tech stack used and structure of all components in this submission ensures extensibility and Separation of Concerns (SoC). By keeping the client-side and server-side separate, the application facilitates extensibility and adaptibility. We can easily modify either or both components and use different frameworks / technologies if required. Moreover, using an in-use and regularly updated tehc stack, the application also ensure longetivity. Further, the structure of the client side displays Separation of Concerns. The entry-point of the application i.e. ```App.js``` contains routing for various pages and error handling for bad paths. The **_pages_** sub-directory contains the pages corresponding to the url paths. The **_components_** sub-directory contains the ```React JSX``` components which are used by the respective pages. A structured application design like this will easily incorporate any additions / deletions to the application.

### Task 4

As a response to Task 4, the code for ```Pagination``` displays simplicity, readability and extensibility which also makes it easy to test. 

### Task 5

As a response to Task 5, I have implemented a current and in-use React testing framework ```Jest``` in conjunction with ```Enzyme```. Further, the directory structure ensures ease of navigation for adding / removing tests.

### Task 6



### Task 7

Using Promise-based HTTP clients like ```axios``` for the server-side and ```fetch API``` for the client-side, streamlined the process of error handling in case of request / response errors. Further, the use of ```react-router-dom``` elegantly handled bad paths by displaying friendly error messages and also guiding the user back to safe paths.



