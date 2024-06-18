let students = [
    {id: 1, name: 'Obasi Ikeckukwu', grades: [78, 86, 91, 93]},
    {id: 2, name: 'Thompson Ikeckukwu', grades: [92, 71, 98, 67]},
    {id: 3, name: 'Hope Ikeckukwu', grades: [99, 89, 93, 97]},
    {id: 4, name: 'Samson Udoh', grades: [72, 69, 83, 71]},
    {id: 5, name: 'Ikechukwu Thompson', grades: [75, 81, 95, 85]},
]
console.log(students)

const calculateAverageGrades = (arr) => {
    return arr.map(arrItem => {
        //Extracting how ever number of courses a student takes
        let totalCourses = arrItem.grades.length;
        //Calculating the total grade of each student
        let totalGrade = arrItem.grades.reduce((total, grade) => total + grade, 0);
        //Calculating the average grade of each student
        let result = totalGrade / totalCourses;
        let studentAverageGrade = parseFloat(result.toFixed(2));
        // Defining the structure of the returned object
        let updatedGrade = {
            id: arrItem.id,
            name: arrItem.name,
            averageGrade: studentAverageGrade
        }
        return updatedGrade;
    })
}
console.log(calculateAverageGrades(students))


const findTopStudent = (students) => {
    //Retrieving the updated student list from the calculateAverageGrades function
    let studentAverageList = calculateAverageGrades(students)
    //Finding and returning the student with the highest average grade as an object, starting with assigning average grade to 0
    return studentAverageList.reduce((topStudent, aStudent) => {
        return (topStudent.averageGrade > aStudent.averageGrade) ? topStudent : aStudent
    }, averageGrade = 0)
}
console.log(findTopStudent(students))

const sortStudentsByGrade = (students) => {
    let studentAverageList = calculateAverageGrades(students);
    //Returning a copy of the studentAverageList array and sorting it in descending order
    return studentAverageList.slice().sort((high, low) => 
        low.averageGrade - high.averageGrade
    )
    //I realized the sort function wouldn't work because i wrapped a single statement in curly brackets. Lol...
}
console.log(sortStudentsByGrade(students))