
var Dynamics = {};

Dynamics.style = function(attr, subject)
{
  subject.style = Color.format( attr );
};

Dynamics.color = function(attr, subject)
{
  subject.color = Color.format( attr );
};

Dynamics.cornerRadius = function(attr, subject)
{
  subject.radiusTL = attr;
  subject.radiusTR = attr;
  subject.radiusBL = attr;
  subject.radiusBR = attr;
};

Dynamics.brightness = function(attr, subject)
{
  subject.adjustBrightness( attr );
};

Dynamics.contrast = function(attr, subject)
{
  subject.adjustContrast( attr );
};

Dynamics.saturation = function(attr, subject)
{
  subject.adjustSaturation( attr );
};

Dynamics.hue = function(attr, subject)
{
  subject.adjustHue( attr );
};

Dynamics.reg = function(attr, subject)
{
  subject.regX = attr.x;
  subject.regY = attr.y;
};

Dynamics.position = function(attr, subject)
{
  subject.x = attr.x;
  subject.y = attr.y;
};

Dynamics.offset = function(attr, subject)
{
  subject.offsetX = attr.x;
  subject.offsetY = attr.y;
};

Dynamics.cp = function(attr, subject)
{
  subject.cpx = attr.x;
  subject.cpy = attr.y;
};

Dynamics.cp1 = function(attr, subject)
{
  subject.cp1x = attr.x;
  subject.cp1y = attr.y;
};

Dynamics.cp2 = function(attr, subject)
{
  subject.cp2x = attr.x;
  subject.cp2y = attr.y;
};

Dynamics.filterBlur = function(attr, subject)
{
  subject.blurX = attr.x;
  subject.blurY = attr.y;
};

Dynamics.size = function(attr, subject)
{
  subject.w = subject.width  = attr.x;
  subject.h = subject.height = attr.y;
};

Dynamics.scale = function(attr, subject)
{
  subject.scaleX = attr.x;
  subject.scaleY = attr.y;
};

Dynamics.skew = function(attr, subject)
{
  subject.skewX = attr.x;
  subject.skewY = attr.y;
};

Dynamics.filterMultiplier = function(attr, subject)
{
  subject.redMultiplier   = attr.r;
  subject.greenMultiplier = attr.g;
  subject.blueMultiplier  = attr.b;
  subject.alphaMultiplier = attr.a;
};

Dynamics.filterOffset = function(attr, subject)
{
  subject.redOffset   = attr.r;
  subject.greenOffset = attr.g;
  subject.blueOffset  = attr.b;
  subject.alphaOffset = attr.a;
};
