const Employee = require('./Lib/employ');
const Engineer= require('./Lib/engin');
const Intern= require('./Lib/intern');
const Manager= require('./Lib/manage');
const inquirer= require('inquirer');
const fs =require('fs');

let finalTeam=[];

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
getTeamName()

function getManager(){
    inquirer
    .prompt([{
        type: 'input',
        message: 'What is your full name?',
        name: 'managerName',
    },
    {
        type: 'number',
        message: 'What is ID number?',
        name: 'idManager',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailManager',
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
            choices: ['Engineer','Intern','None'],
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
            console.log("none")
        }
        
            
    });

    
}

function getEngineer(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'egineerName',
        },
        {
            type: 'number',
            message: 'What is ID number?',
            name: 'idEngineer',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailEngineer',
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
            name: 'internName',
        },
        {
            type: 'number',
            message: 'What is ID number?',
            name: 'idIntern',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailIntern',
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

