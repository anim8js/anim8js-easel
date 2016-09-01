
var Attributes = {};

/**
 * =============================================================================
 * Attributes defined in EaselJS:
 * =============================================================================
 * DisplayObject:
 *    alpha, regX, regY, rotation, scaleX, scaleY, skewX,
 *    skewY, x, y,
 * BitmapText (DisplayObject):
 *    lineHeight, letterSpacing, spaceWidth
 * BlurFilter:
 *    blurX, blurY, quality
 * ColorFilter:
 *    redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier,
 *    redOffset, greenOffset, blueOffset, alphaOffset
 * Graphics.Arc:
 *    x, y, radius, startAngle, endAngle
 * Graphics.BezierCurveTo:
 *    cp1x, cp1y, cp2x, cp2y, x, y
 * Graphics.Circle:
 *    x, y, radius
 * Graphics.Ellipse:
 *    x, y, w, h
 * Graphics.Fill:
 *    style (color)
 * Graphics.LineTo:
 *    x, y
 * Graphics.MoveTo:
 *    x, y
 * Graphics.PolyStar:
 *    x, y, radius, sides, pointSize, angle
 * Graphics.QuadraticCurveTo:
 *    cpx, cpy, x, y
 * Graphics.Rect:
 *    x, y, w, h
 * Graphics.RoundRect:
 *    x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL
 * Graphics.Stroke:
 *    style (color)
 * Graphics.StrokeStyle:
 *    width, miterLimit
 * Point:
 *    x, y
 * Rectangle:
 *    x, y, width, height
 * Shadow:
 *    color, offsetX, offsetY, blur
 * Sprite:
 *    currentAnimationFrame, framerate
 * SpriteSheet:
 *    framerate
 * Text:
 *    color
 */

// Defined
Attributes['default']      = {defaultValue: 0};
Attributes.alpha           = {defaultValue: 1};
Attributes.regX            = {defaultValue: 0};
Attributes.regY            = {defaultValue: 0};
Attributes.rotation        = {defaultValue: 0};
Attributes.scaleX          = {defaultValue: 1};
Attributes.scaleY          = {defaultValue: 1};
Attributes.skewX           = {defaultValue: 0};
Attributes.skewY           = {defaultValue: 0};
Attributes.x               = {defaultValue: 0};
Attributes.y               = {defaultValue: 0};
Attributes.lineHeight      = {defaultValue: 0};
Attributes.letterSpacing   = {defaultValue: 0};
Attributes.spaceWidth      = {defaultValue: 0};
Attributes.blurX           = {defaultValue: 0};
Attributes.blurY           = {defaultValue: 0};
Attributes.quality         = {defaultValue: 1};
Attributes.redMultiplier   = {defaultValue: 1};
Attributes.greenMultiplier = {defaultValue: 1};
Attributes.blueMultiplier  = {defaultValue: 1};
Attributes.alphaMultiplier = {defaultValue: 1};
Attributes.redOffset       = {defaultValue: 0};
Attributes.greenOffset     = {defaultValue: 0};
Attributes.blueOffset      = {defaultValue: 0};
Attributes.alphaOffset     = {defaultValue: 0};
Attributes.radius          = {defaultValue: 0};
Attributes.startAngle      = {defaultValue: 0};
Attributes.endAngle        = {defaultValue: 0};
Attributes.cp1x            = {defaultValue: 0};
Attributes.cp1y            = {defaultValue: 0};
Attributes.cp2x            = {defaultValue: 0};
Attributes.cp2y            = {defaultValue: 0};
Attributes.w               = {defaultValue: 0};
Attributes.h               = {defaultValue: 0};
Attributes.width           = {defaultValue: 0};
Attributes.height          = {defaultValue: 0};
Attributes.sides           = {defaultValue: 0};
Attributes.pointSize       = {defaultValue: 0};
Attributes.angle           = {defaultValue: 0};
Attributes.cpx             = {defaultValue: 0};
Attributes.cpy             = {defaultValue: 0};
Attributes.radiusTL        = {defaultValue: 0};
Attributes.radiusTR        = {defaultValue: 0};
Attributes.radiusBL        = {defaultValue: 0};
Attributes.radiusBR        = {defaultValue: 0};
Attributes.miterLimit      = {defaultValue: 0};
Attributes.offsetX         = {defaultValue: 0};
Attributes.offsetY         = {defaultValue: 0};
Attributes.blur            = {defaultValue: 0};
Attributes.framerate       = {defaultValue: 0};
Attributes.currentAnimationFrame = {defaultValue: 0};
Attributes.style           = {defaultValue: Color(), calculator:'rgba'};
Attributes.color           = {defaultValue: Color(), calculator:'rgba'};

// Dynamic
Attributes.cornerRadius    = {defaultValue: 0, dynamic: 'cornerRadius'};
Attributes.brightness      = {defaultValue: 0, dynamic: 'brightness'};
Attributes.contrast        = {defaultValue: 0, dynamic: 'contrast'};
Attributes.saturation      = {defaultValue: 0, dynamic: 'saturation'};
Attributes.hue             = {defaultValue: 0, dynamic: 'hue'};
Attributes.reg             = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'reg'};
Attributes.position        = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'position'};
Attributes.offset          = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'offset'};
Attributes.cp              = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'cp'};
Attributes.cp1             = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'cp1'};
Attributes.cp2             = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'cp2'};
Attributes.filterBlur      = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'filterBlur'};
Attributes.size            = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'size'};
Attributes.scale           = {defaultValue: {x:1, y:1}, calculator: '2d', dynamic:'scale'};
Attributes.skew            = {defaultValue: {x:0, y:0}, calculator: '2d', dynamic:'skew'};
Attributes.filterMultiplier= {defaultValue: Color(), calculator: 'rgba', dynamic:'filterMultiplier'};
Attributes.filterOffset    = {defaultValue: Color(), calculator: 'rgba', dynamic:'filterOffset'};
