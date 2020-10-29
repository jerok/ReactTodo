const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ];

describe('String tests', () => {
    test('Verify name is Eat', () => {
        expect(DATA[0].name).toContain('Eat')
    });

    test('Verify items have different id', () => {
        expect(DATA[0].id).not.toMatch(DATA[1].id)
    });
});

describe('Array tests', () => {
    test('Verify properties of id, name, and completed are included', () => {
        expect(DATA[0]).toHaveProperty('id', 'name', 'completed');
    });
});