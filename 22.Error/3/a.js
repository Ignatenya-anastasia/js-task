let arr = [
  { id: 1, label: "JavaScript", category: "programmingLanguages", priority: 1 },
  { id: 2, label: "TypeScript", category: "programmingLanguages", priority: 1 },
  { id: 3, label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: 4, label: "Java", category: "programmingLanguages", priority: 3 },
  { id: 5, label: "GO", category: "programmingLanguages", priority: 3 },
];


function checkObj(){
    try{
        const fillterObj = arr.filter((el) =>{
            if(typeof el.id === 'string') throw new Error ('id - string');
            if(el.id < 0) throw new Error ('id - < 0');
            return el.id % 2 == 0;
        });
        console.log(fillterObj);
        
    } catch  (error){
        console.log(error);
        
    }
}

checkObj();