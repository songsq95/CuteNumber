export class Foo {
  bar() {
    return 'bar'
  }
}

export function isCuteNumberGreaterThan10(numbers: number[]): boolean {
  const evenNumbers = findAllEvenNumbers(numbers); 
  //console.log(evenNumbers);
  const max = findTheMax(evenNumbers);
  //console.log(max);
  return max>10;
}

export function findAllEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(number=> number%2 ===0);
}

export function findTheMax(numbers: number[]): number {
  return Math.max(...numbers);
}

