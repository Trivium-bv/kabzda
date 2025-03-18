import {beforeEach, expect} from 'vitest';
import {ManType} from './02-destructuring.tsx';

let props: ManType
beforeEach(()=> {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        adress: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})
test("", () => {
    const man = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        adress: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }

// const age = man.age;
// const lessons = man.lessons;
const {age, lessons} = man;

const {title} = man.adress.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title.length).toBe("Nezavisimosti street");
})

test("", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    //const [ls1, ,ls3] = props.lessons
    const [ls1, ...restLessons] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('1')
    //expect(ls3.title).toBe('3')
    expect(restLessons[0].title).toBe('2')
})