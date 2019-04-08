
import { ValueNumber, Animator, Animators, Value2d, ValueRGBA, FastMap, Factory, Attribute, Factories, Movie, Sequence, MovieTimeline, MoviePlayer, anim8, anim8s, m8, m8s } from './types/anim8js';

declare module 'anim8js-easel'
{
  
  export type SubjectEasel = object;

  export class AttributesEasel
  {
    default: ValueNumber;
    alpha: ValueNumber;
    regX: ValueNumber;
    regY: ValueNumber;
    rotation: ValueNumber;
    scaleX: ValueNumber;
    scaleY: ValueNumber;
    skewX: ValueNumber;
    skewY: ValueNumber;
    x: ValueNumber;
    y: ValueNumber;
    lineHeight: ValueNumber;
    letterSpacing: ValueNumber;
    spaceWidth: ValueNumber;
    blurX: ValueNumber;
    blurY: ValueNumber;
    quality: ValueNumber;
    redMultiplier: ValueNumber;
    greenMultiplier: ValueNumber;
    blueMultiplier: ValueNumber;
    alphaMultiplier: ValueNumber;
    redOffset: ValueNumber;
    greenOffset: ValueNumber;
    blueOffset: ValueNumber;
    alphaOffset: ValueNumber;
    radius: ValueNumber;
    startAngle: ValueNumber;
    endAngle: ValueNumber;
    cp1x: ValueNumber;
    cp1y: ValueNumber;
    cp2x: ValueNumber;
    cp2y: ValueNumber;
    w: ValueNumber;
    h: ValueNumber;
    width: ValueNumber;
    height: ValueNumber;
    sides: ValueNumber;
    pointSize: ValueNumber;
    angle: ValueNumber;
    cpx: ValueNumber;
    cpy: ValueNumber;
    radiusTL: ValueNumber;
    radiusTR: ValueNumber;
    radiusBL: ValueNumber;
    radiusBR: ValueNumber;
    miterLimit: ValueNumber;
    offsetX: ValueNumber;
    offsetY: ValueNumber;
    blur: ValueNumber;
    framerate: ValueNumber;
    currentAnimationFrame: ValueNumber;
    style: ValueRGBA;
    color: ValueRGBA;

    cornerRadius: ValueNumber;
    brightness: ValueNumber;
    contrast: ValueNumber;
    saturation: ValueNumber;
    hue: ValueNumber;
    reg: Value2d;
    position: Value2d;
    offset: Value2d;
    cp: Value2d;
    cp1: Value2d;
    cp2: Value2d;
    filterBlur: Value2d;
    size: Value2d;
    scale: Value2d;
    skew: Value2d;
    filterMultiplier: ValueRGBA;
    filterOffset: ValueRGBA;
  }

  export type Dynamic = (value: any, subject: SubjectEasel) => void;

  export class AnimatorEasel<A = AttributesEasel, S = SubjectEasel> extends Animator<A, S>
  {
    public dynamics: { [P in keyof AttributesEasel]?: Dynamic };
  }

  export type AnimatorsEasel = Animators<AttributesEasel, SubjectEasel>;

  export type SequenceEasel = Sequence<AttributesEasel, SubjectEasel>;

  export type MovieEasel = Movie<AttributesEasel>;

  export type MovieTimelineEasel = MovieTimeline<AttributesEasel>;

  export type MoviePlayerEasel = MoviePlayer<AttributesEasel>;

  export class FactoryEasel<A = AttributesEasel, S = SubjectEasel> extends Factory<A, S>
  {

  }

  export const easel:
  {
    Attributes: { 
      [P in keyof AttributesEasel]: Partial<Attribute<AttributesEasel, P>> 
    };

    attribute<K extends keyof AttributesEasel> (attr: string | Partial<Attribute<AttributesEasel, K>> ): Partial<Attribute<AttributesEasel, K>>;

    Dynamics: {
      style: Dynamic;
      color: Dynamic;
      cornerRadius: Dynamic;
      brightness: Dynamic;
      contrast: Dynamic;
      saturation: Dynamic;
      hue: Dynamic;
      reg: Dynamic;
      position: Dynamic;
      offset: Dynamic;
      cp: Dynamic;
      cp1: Dynamic;
      cp2: Dynamic;
      filterBlur: Dynamic;
      size: Dynamic;
      scale: Dynamic;
      skew: Dynamic;
      filterMultiplier: Dynamic;
      filterOffset: Dynamic;
    };

    dynamic (nm: string): Dynamic | false;
  }

}
