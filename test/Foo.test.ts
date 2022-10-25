import {Foo, isCuteNumberGreaterThan10} from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })

  it('should return true given numbers: 1, 5, 6, 10, 11, 14',()=>{
    //given
    const numbers=[1, 5, 6, 10, 11, 14];
    //when
    const actual:boolean = isCuteNumberGreaterThan10(numbers);
    //then
    expect(actual).toBeTruthy();
  });
  
})


