//Get Grade:
function getGrade(mark) {
  if (mark >= 80 && mark <= 100) {
    return "A+";
  } else if (mark >= 70) {
    return "A";
  } else if (mark >= 60) {
    return "A-";
  } else if (mark >= 50) {
    return "B";
  } else if (mark >= 40) {
    return "C";
  } else if (mark >= 33) {
    return "D";
  } else {
    return "F";
  }
}
//Get GPA:
function getGPA(grade) {
  switch (grade) {
    case "A+":
      return 5.0;
    case "A":
      return 4.0;
    case "A-":
      return 3.5;
    case "B":
      return 3.0;
    case "C":
      return 2.0;
    case "D":
      return 1.0;
    default:
      return 0.0;
  }
}

// Calculate Subject Grade and GPA:
function getSubjectResult(subjectMark) {
  subjectMark.forEach((item) => {
    item.Result.forEach((student) => {
      let totalGPA = student.reduce((total, subject) => {
        return total + calculateGPA(subject.Grade);
      }, 0);
      return totalGPA;
    });
  });
}

let markF = getSubjectResult(subject);

console.log(markF);
// let markSheet = getSubjectResult(subject);
// console.log(markSheet);

// let markSheet = getSubjectResult(subject);

// console.log(markSheet);

// Get Data by prompt:
let studentRoll = 1111;
let studentReg = 11111111;
let studentGender = true;

//Student Data:

let getStudentData = (data) => {
  data.forEach((item) => {
    let Gender = item.isMale ? "Male" : "Female";

    if (
      studentRoll == item.Roll &&
      studentReg == item.Reg &&
      studentGender == item.isMale
    ) {
      console.log(`
          Name: ${item.Name}
          Father's Name: ${item.FatherName}
          Mother's Name: ${item.MotherName}
          Date of Birth: ${item.DateofBirth}
          Gender: ${Gender}
          Institute Name: ${item.Institute}
          Board: ${item.Board}
          Group: ${item.Group}
          Type: ${item.Type}
          `);
      item.Result.map((item) => {
        console.table([
          {
            Subjet: item.SubjectName,
            Code: item.Code,
            Mark: item.Mark,
          },
        ]);
      });
    }
  });
};

/*
// Calculate speed for each subject
function calculateSpeed(student) {
  const subjects = Object.keys(student.Result);
  let totalMarks = 0;
  subjects.forEach((subject) => {
    totalMarks += student.Result[subject].Mark;
  });
  const averageMarks = totalMarks / subjects.length;
  return averageMarks;
}

// Add speed property to each student object
studentData.forEach((student) => {
  student.Speed = calculateSpeed(student);
});

console.log(studentData);
*/
/*
// Calculate speed for each student
function calculateSpeed(student) {
  const totalMarks = student.Result.reduce(
    (sum, subject) => sum + subject.Mark,
    0
  );
  const averageMark = totalMarks / student.Result.length;
  return averageMark;
}

// Add speed property to each student object
studentData.forEach((student) => {
  student.Speed = calculateSpeed(student);
});

console.log(studentData);
*/
