import faker from 'faker';
import * as fs from 'faker';

const generateRandomCourse = () => {
  const course = {
    id: faker.datatype.number(),
    courseName: faker.lorem.words(3),
    instructor: faker.name.findName(),
    description: faker.lorem.sentence(),
    enrollmentStatus: faker.random.arrayElement(['Open', 'Closed' , 'In Progress']),
    thumbnail: faker.image.imageUrl(),
    duration: faker.datatype.number({ min: 4, max: 12 }) + ' weeks',
    schedule: faker.date.weekday() + 's and ' + faker.date.weekday() + 's, ' + faker.time.recent(),
    location: faker.random.arrayElement(['Online', 'In-Person']),
    prerequisites: [faker.lorem.words(3), faker.lorem.words(3)],
    syllabus: [
      { week: faker.datatype.number(), topic: faker.lorem.words(3), content: faker.lorem.sentence() },
      { week: faker.datatype.number(), topic: faker.lorem.words(3), content: faker.lorem.sentence() }
    ],
    students: [
      { id: faker.datatype.number(), name: faker.name.findName(), email: faker.internet.email() },
      { id: faker.datatype.number(), name: faker.name.findName(), email: faker.internet.email() }
    ]
  };
  
  const generateRandomCourses = (count:number) => {
    const courses = [];
    for (let i = 0; i < count; i++) {
      const course = generateRandomCourse();
      courses.push(course);
    }
    return courses;
  };
  
  const dummyCourses = generateRandomCourses(10);
  
  const jsonData = JSON.stringify(dummyCourses, null, 2);
  fs.writeFile('http://localhost:3000/courses' , jsonData, (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('Dummy courses saved to dummyCourses.json');
    }
  });

  return course;
};

export default generateRandomCourse
