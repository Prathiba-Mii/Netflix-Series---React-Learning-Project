export const Practices = () => {
   const students = [];
   console.log(Boolean(students.length));
   console.log(students.length);
   
   
   return (
    <>
      {/* <p>{students.length && "No students found" }</p> */}
      {/* <p>{students.length === 0 && "No students found"}</p> */}
      {/* <p>{!students.length && "No students found"}</p> */}
      <p>{!Boolean(students.length) && "No students found"}</p>
      <p>Number of students: {students.length}</p>
    </>
   )
};