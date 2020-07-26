const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//Розбиваєм масив на дівчат і хлопців
const createPairs = () => {
       const studentsPairs = []; 
       const boys = [];
       const girls = [];
          for(let i = 0; i < students.length; i++){
             if(students[i] === 'Олена' || students[i] === 'Іра' || students[i] === 'Світлана'){
               girls.push(students[i]);
             }else{
               boys.push(students[i]);
             }
          }
          for (let i = 0; i < boys.length; i++) {
             studentsPairs.push( [girls[i] + " i " + boys[i]]);
           }
             return studentsPairs;
     }
const totalPairs = createPairs(students);
     
     
    //Зіставляєм  пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
 const studentsWithTheme = (pair,subject) => {
    const studentsWithSubject = [];
        for (let i = 0; i < pair.length; i++) {
            studentsWithSubject.push([ pair[i] + ". " + subject[i] ]);
        }
        return studentsWithSubject;
 }
const totalStudentsWithSubject = studentsWithTheme(totalPairs, themes);
      

//зіставляєм оцінки зі студентами
const studentsPlusMarks=(array,mark)=>{
        const studentsMarks = [];
        for(let i = 0; i < array.length; i++) {
            studentsMarks.push([ students[i] + ', ' + marks[i]]);
        } 
        return  studentsMarks
    }
const totalStudentsWithMarks = studentsPlusMarks(students, marks);

//роставляєм рандомні оцінки
const randomMark = (array)=>{
    const studentRandomMarks = [];
    for(let i = 0; i < array.length; i++) {
        studentRandomMarks.push([ totalStudentsWithSubject[i] + ': ' +  Math.ceil(Math.random()*5) ]);
    } 
    return  studentRandomMarks;
}

const totalStudentsWithRandomMarks = randomMark(totalStudentsWithSubject);




console.log(totalPairs); 
console.log(totalStudentsWithSubject);
console.log(totalStudentsWithMarks);
console.log(totalStudentsWithRandomMarks);


const pair = document.querySelector(".pair");
pair.textContent = totalPairs;

const pairPlusSubject = document.querySelector(".pairPlusSubject");
pairPlusSubject.textContent = totalStudentsWithSubject;

const studentWithMark = document.querySelector(".studentWithMark");
studentWithMark.textContent = totalStudentsWithMarks;

const randomMarks = document.querySelector(".randomMarks");
randomMarks.textContent=totalStudentsWithRandomMarks;


/*


*/
     
