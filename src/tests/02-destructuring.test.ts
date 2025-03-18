

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

