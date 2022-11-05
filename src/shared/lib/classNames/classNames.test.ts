import {classNames} from './classNames';

describe('test className', () => {
   test('test with only first param', () => {
      expect(classNames('someClass')).toBe('someClass');
   });

   test('test with adittional class', () => {
      const expected = 'someClass class1 class2';
      expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
   });

   test('test with mods', () => {
      const expected = 'someClass class1 class2 hovered active';
      expect(classNames('someClass', {hovered: true, active: true}, ['class1', 'class2'])).toBe(expected);
   });

   test('test with false item mods', () => {
      const expected = 'someClass class1 class2 hovered';
      expect(classNames('someClass', {hovered: true, active: false}, ['class1', 'class2'])).toBe(expected);
   });

   test('test with undefined item mods', () => {
      const expected = 'someClass class1 class2 hovered';
      expect(classNames('someClass', {hovered: true, active: undefined}, ['class1', 'class2'])).toBe(expected);
   });
});
