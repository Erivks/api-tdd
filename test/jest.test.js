test('Devo conhecer Jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'John', mail: 'john@doe.com' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'John');
    expect(obj.name).toBe('John');

    const obj2 = { name: 'John', mail: 'john@doe.com' };
    expect(obj).toEqual(obj2);
    expect(obj).toBe(obj);
});