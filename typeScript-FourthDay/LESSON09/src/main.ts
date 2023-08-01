// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 75 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

console.log(assignGraded);

// Required and Readonly Types

const recordAssignment = (assign: Readonly<Assignment>): Assignment => {
  //send to database, etc..
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 77 //?? Cannot assign to 'grade' because it is a read-only property.
console.log(assignVerified);

recordAssignment(assignGraded);

// Record Type

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";

type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 1, assign2: 3 },
  Kelly: { assign1: 1, assign2: 5 },
};
console.log(gradeData);

// Pick And Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "studentId",
  grade: 78,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

type adjustGrade = Exclude<LetterGrades, "U">;

type highGrade = Extract<LetterGrades, "A" | "B">;

// NonNullable

type AllPossibleGrades = "Dave" | "Ali" | "Beyda" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);

console.log(tsAssign);

// Parameters

type AsignParams = Parameters<typeof createNewAssign>;

const assignArgs: AsignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//Awaited - Hepls us with ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users)=>console.log(users))