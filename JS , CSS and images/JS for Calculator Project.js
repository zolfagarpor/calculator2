let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {

  if(
    calculation === '0' && 
    value != '.' && 
    value != '*' && 
    value != '+' && 
    value != '-' && 
    value != '/'
    ){
    calculation = value;  

  } else if (
    (calculation === '' && value === '*') || 
    (calculation === '' && value === '/') || 
    (calculation === '' && value === ')') || 
    (calculation === '' && value === '.') || 
    (calculation === '' && value === '+')
    ) {
    calculation;  

  } else if (
    (value === '+' && calculation.slice(-1) === '+') || 
    (value === '-' && calculation.slice(-1) === '-') || 
    (value === '/' && calculation.slice(-1) === '/') || 
    (value === '(' && calculation.slice(-1) === '(') || 
    (value === ')' && calculation.slice(-1) === ')') || 
    (value === '*' && calculation.slice(-1) === '*')
    ) {
    calculation;  

  } else if ( 
    (value === ')' && calculation.slice(-1) === '+') ||  
    (value === '/' && calculation.slice(-1) === '-') || 
    (value === ')' && calculation.slice(-1) === '-') || 
    (value === ')' && calculation.slice(-1) === '*') || 
    (value === ')' && calculation.slice(-1) === '(') || 
    (value === '(' && calculation.slice(-1) === ')')
    ) {
    calculation; 

  } else if (
    (value === '.' && calculation.slice(-1) === ')') || 
    (value === '0' && calculation.slice(-1) === ')') || 
    (value === '1' && calculation.slice(-1) === ')') || 
    (value === '2' && calculation.slice(-1) === ')') || 
    (value === '3' && calculation.slice(-1) === ')') || 
    (value === '4' && calculation.slice(-1) === ')') || 
    (value === '5' && calculation.slice(-1) === ')') || 
    (value === '6' && calculation.slice(-1) === ')') || 
    (value === '7' && calculation.slice(-1) === ')') || 
    (value === '8' && calculation.slice(-1) === ')') || 
    (value === '9' && calculation.slice(-1) === ')')
    ) {
    calculation; 

  } else if (
    (value === '(' && calculation.slice(-1) === '.') 
    ) {
    calculation; 
    
  } else if (
    (value === '.' && calculation.slice(-1) === '(') || 
    (value === '.' && calculation.slice(-1) === '+') || 
    (value === '.' && calculation.slice(-1) === '-') || 
    (value === '.' && calculation.slice(-1) === '*') || 
    (value === '.' && calculation.slice(-1) === '/') || 
    (value === '.' && calculation.slice(-1) === '.')
    ) {
    calculation;

  } else if (
    (value === '.' && calculation.includes('.') && (!calculation.includes('+') && !calculation.includes('-') && !calculation.includes('*') && !calculation.includes('/'))) || 

    (calculation.includes('+') && (calculation.match(/\.\d{1,}$/)) && value === '.') ||

    (calculation.includes('-') && (calculation.match(/\.\d{1,}$/)) && value === '.') ||

    (calculation.includes('*') && (calculation.match(/\.\d{1,}$/)) && value === '.') ||

    (calculation.includes('/') && (calculation.match(/\.\d{1,}$/)) && value === '.')
    ) {
    calculation;

  } else if (
    (calculation.slice(-1) === '.' && value === '+') || 
    (calculation.slice(-1) === '.' && value === '-') || 
    (calculation.slice(-1) === '.' && value === '*') || 
    (calculation.slice(-1) === '.' && value === '/') || 
    (calculation.slice(-1) === '.' && value === ')')
  ) {
    calculation;

  } else if (
    calculation.slice(-1) === '/' && (value === ')')
  ) {
    calculation;

  } else if (
    value === ')' && !calculation.includes('(')
  ) {                                              
    calculation;

  } else if (
    value === ')' && !calculation.startsWith('(') && !calculation.includes('(')
  ) {
    calculation;

  } else if (
    calculation.slice(-1) === '(' && (value === '*' || value === '/' || value === '+')
  ) {
    calculation;
    
  } else if (
    value === ')' && calculation.lastIndexOf(')') > calculation.lastIndexOf('(')
  ) {
    calculation
  } else if (
    value === '(' && calculation.lastIndexOf('(') > calculation.lastIndexOf(')')
  ) {
    calculation
  } else if (calculation === 'Cannot divide by zero') {
    calculation = '';
    calculation += value;
    
  } else if (calculation === 'Infinity') {
    calculation = '';
    calculation += value;

  } else if (
    ((calculation.slice(-1) === '-' && value === '+') && 
    !(calculation.slice(-2) === '(-' && value === '+') && 
    !(calculation === '-' && value === '+') && 
    !(calculation.slice(-2) === '*-' && value === '+') && 
    !(calculation.slice(-2) === '/-' && value === '+')) ||

    (calculation.slice(-1) === '+' && value === '-') ||
    (calculation.slice(-1) === '+' && value === '*') ||

    ((calculation.slice(-1) === '-' && value === '*') && 
    !(calculation.slice(-2) === '(-' && value === '*') && 
    !(calculation === '-' && value === '*') && 
    !(calculation.slice(-2) === '*-' && value === '*') && 
    !(calculation.slice(-2) === '/-' && value === '*')) ||  

    (calculation.slice(-1) === '*' && value === '+') ||
    (calculation.slice(-1) === '+' && value === '/') ||
    (calculation.slice(-1) === '*' && value === '/') ||
    (calculation.slice(-1) === '/' && value === '+') ||
    (calculation.slice(-1) === '/' && value === '*') 
  ) {
    calculation = calculation.slice(0, -1) + value;

  } else if (
    (calculation.slice(-1) === '(' && value === '+') || 
    (calculation.slice(-1) === '-' && value === '*') 
  ) { 
    calculation;

  } else if ((calculation.slice(-2) === '/-' || calculation.slice(-2) === '*-') && value === '+') {
    calculation = calculation.slice(0, -1);
    calculation;

  } else if (calculation.slice(0) === '-' && value === '+' ) {
    calculation; // new and this maybe have some issues

  } else if (calculation.length < 15) {  
    calculation += value;

  } 

  localStorage.setItem('calculation', calculation);
  displayer();
}

function toPercent () {
  let toPercentCalculation = `${calculation / 100}`;
  if (calculation === '') {
    calculation = '';
  } else if (toPercentCalculation === 'NaN') {
    calculation;
  } else {
    calculation = toPercentCalculation;
  }
  displayer();
  localStorage.setItem('calculation', calculation);
}

function toSqrt () {
  let sqrtCalculation = `${Math.sqrt(calculation)}`;

  if (calculation === '') {
    calculation = '';
  } else if (sqrtCalculation === 'NaN') {
    calculation;
  } else {
    calculation = sqrtCalculation;
  }
  displayer();
  localStorage.setItem('calculation', calculation);
}

function toSin () {
  let sinCalculation = `${Math.sin(calculation)}`;
  if(calculation === ''){
    sinCalculation = '';
  } else if (sinCalculation === 'NaN') {
    sinCalculation = calculation;
  }
  calculation = sinCalculation;
  displayer ();
}

function toTan () {
  let tanCalculation = `${Math.tan(calculation)}`;
  if(calculation === ''){
    tanCalculation = '';
  } else if (tanCalculation === 'NaN') {
    tanCalculation = calculation;
  }          
  calculation = tanCalculation;
  displayer ();
}

function toCos () {
  let cosCalculation = `${Math.cos(calculation)}`;
  if(calculation === ''){
    cosCalculation = '';
  } else if (cosCalculation === 'NaN') {
    cosCalculation = calculation;
  }
  calculation = cosCalculation;
  displayer ();
}

function displayer () {
  calculation = calculation.substring(0, 15);
  document.querySelector('.js-displayer').innerHTML = calculation;
}

if(localStorage.getItem('calculation') === ''){
  document.querySelector('.js-displayer').innerHTML = '';
} else {
  displayer();
}

function delete1 () {
  if (calculation.length > 0) {
    calculation = calculation.slice(0, -1);   
  }
  localStorage.setItem('calculation', calculation);
  displayer();
}

function calculated () {
  if (calculation.match(/\d+.\d+\((.*?)\)/g))  {                         
    const matchedExpressions = calculation.match(/\d+.\d+\((.*?)\)/g);
    for (const matchedExpression of matchedExpressions) {                         
      const evaluatedExpression = eval(matchedExpression.replace(/\(/g, '*('));
      calculation = calculation.replace(matchedExpression, evaluatedExpression);
    }
  } else if (calculation.match(/\d+\((.*?)\)/g)) {
    const matchedExpressions = calculation.match(/\d+\((.*?)\)/g);
    for (const matchedExpression of matchedExpressions) {                         
      const evaluatedExpression = eval(matchedExpression.replace(/\(/g, '*('));
      calculation = calculation.replace(matchedExpression, evaluatedExpression);
    }
  }
  calculation = `${eval(calculation)}`;

  if(calculation === 'undefined') {
    calculation = '';
  } else if (calculation === 'Infinity'){
    calculation = 'Cannot divide by zero';
  } else if (calculation === 'NaN'){
    calculation = 'Cannot divide by zero';
  } else if (calculation === '0'){
    calculation = '0';
  }
  localStorage.setItem('calculation', calculation);
  displayer();
}

document.addEventListener('keydown', function(event) {
  if (event.key >= '0' && event.key <= '9')  {
    updateCalculation(event.key);
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '(' || event.key === ')' || event.key === '.') {
    updateCalculation(event.key);
  } else if ( event.key === '%') {
    toPercent ();
  } else if (event.key === 'Backspace') {
    delete1 ();
    if (calculation.length < 1){
      document.querySelector('.js-displayer').innerHTML = '';
    } 
  } else if (event.key === 'Enter') {
    calculated ();
  } else if (event.key === 'Delete') {
    calculation = '';
    localStorage.setItem('calculation', calculation);
    document.querySelector('.js-displayer').innerHTML = '';
  }
});
