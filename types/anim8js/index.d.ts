
export * from 'anim8js';
import { FactoryEasel, SubjectEasel, SubjectsEasel, AnimatorEasel, AttributesEasel, AnimatorsEasel } from 'anim8js-easel';

declare module 'anim8js'
{

  export interface Factories
  {
    'easel': FactoryEasel;
  }

  export function anim8 (subject: SubjectEasel): AnimatorEasel;
  export function anim8s (subject: SubjectsEasel): AnimatorsEasel;
  export function m8 (subject: SubjectEasel): AnimatorEasel;
  export function m8s (subject: SubjectsEasel): AnimatorsEasel;

  export default function (subject: SubjectEasel): AnimatorEasel;
  export default function (subject: SubjectEasel[]): AnimatorsEasel;

}