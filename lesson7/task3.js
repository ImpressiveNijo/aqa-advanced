function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        console.error('Аргументи повинні бути числами');
    }

    if (denominator == 0) {
        console.error('Ділення на нуль неможливе.');
    }
    return numerator / denominator;
}
try {
    const result = divide(12, 4);
    console.log(result);
} catch (error) {
    console.error('Виникла помилка');
} finally {
    console.log('Робота завершена', '\n');
}
try {
    const result = divide(12, 0);
    console.log(result);
} catch (error) {
    console.error('Виникла помилка');
} finally {
    console.log('Робота завершена','\n');
} 
try {
    const result = divide(8, 'A');
    console.log(result);
} catch (error) {
    console.error('Виникла помилк');
} finally {
    console.log('Робота завершена', '\n');
}
try {
    const result = divide('B', 4);
    console.log(result);
} catch (error) {
    console.error('Виникла помилка');
} finally {
    console.log('Робота завершена');
}

