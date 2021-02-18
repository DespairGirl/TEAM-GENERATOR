const Employee = require('./Lib/employ');
const Engineer= require('./Lib/engin');
const Intern= require('./Lib/intern');
const Manager= require('./Lib/manage');
const inquirer= require('inquirer');
const fs =require('fs');
const generateHtml= require('./Templates/generatehtml');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
let fileName='MyTeam1.html';


 function getTeamName(){
    inquirer
    .prompt([{
        type:'input',
        message: "Enter your team's name!",
        name: 'teamName'},
        

    ])
    .then((data) =>{
        const teamname=data.teamName
        console.log(teamname)
        getManager();

    });
    
    
    
}


function getManager(){
    inquirer
    .prompt([{
        type: 'input',
        message: 'What is your full name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is ID number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
       type: 'input',
       message: "What is your office number?",
       name: 'office'
    }

    ])
    .then(function(data){

    
        getMemeberTypes();
        
    })
}

function getMemeberTypes(){
    inquirer
    .prompt([
        {
            type:'list',
            message: 'Choose which type of team memeber you want added!',
            choices: ['Engineer','Intern','None', 'Manager'],
            name:'memeberchoice'
        }
    ])
    .then(function(data){
        if(data.memeberchoice==='Engineer'){
            return getEngineer();
        }
        if(data.memeberchoice==='Intern'){
            return getIntern();
        }
        if(data.memeberchoice==='None'){
            console.log("Okay, Lets Get to creating your team page!")

            writeFileAsync(fileName,generateHtml(data), (err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log("File Successful!")
                }
            });

            
        }
        if(data.memeberchoice==='Manager'){
            return getManager();
        }
        
            
    })
    
    

    
}

function getEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
           type: 'input',
           message: "What is your github?",
           name: 'git'
        },
    ])
    .then(function(data){
        console.log(data)
        getMemeberTypes();
    });
}

function getIntern(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
           type: 'input',
           message: "What school are you currently attending?",
           name: 'school'
        },
    ])
    .then(function(data){
        console.log(data)
        getMemeberTypes();
    });
}

 getTeamName();