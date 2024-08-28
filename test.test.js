
test('test 1 of pr check before merge', async () => {
    expect(true).toBeTruthy()
})
test('test 2 of pr check before merge', async () => {
    expect(false).toBeFalsy()
})
test('test 3 of pr check before merge', async () => {
    expect("false").toBe("false")
})
test('test 4 of pr check before merge', async () => {
    expect("true").toBe("true")
})