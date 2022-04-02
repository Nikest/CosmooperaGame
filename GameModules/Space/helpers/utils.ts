import { percent } from '../../../utils';
import { Solar } from './consts';

export function propsCalculate(a: number, b: number, p: number): number {
  return (b - a) * (p / 100) + a;
}

export function calculateHabitableZone(luminosity: number): number[] {
  const lum = ((luminosity / 100) * Solar.luminosity);
  return [
    Math.sqrt(lum / percent(Solar.luminosity, 140)),
    Math.sqrt(lum / percent(Solar.luminosity, 32)),
    Math.sqrt(lum / percent(Solar.luminosity, 2.5)),
    Math.sqrt(lum / percent(Solar.luminosity, 0.35)),
  ]
}
