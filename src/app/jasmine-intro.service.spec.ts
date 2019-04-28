import { JasmineIntroService } from './jasmine-intro.service';

describe('JasmineIntroService', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  it('should add two numbers', () => {
    const service: JasmineIntroService = new JasmineIntroService();

    const result = service.addNumber(1, 2);

    expect(result).toEqual(3);
  });

  it('should subtract two numbers', () => {
    const service: JasmineIntroService = new JasmineIntroService();

    const result = service.subtractNumber(1, 2);

    expect(result).toEqual(-1);
  });


  it('should and two numbers', () => {
    const service: JasmineIntroService = new JasmineIntroService();

    const result = service.andNumber(5, 8);

    expect(result).toEqual(40);
  });

  it('should expect two numbers', () => {
    const service: JasmineIntroService = new JasmineIntroService();

    const result = service.excertNumber(100, 10);

    expect(result).toEqual(10);
  });

  afterEach(() => {
    console.log('afterEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });
});
