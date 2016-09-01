function FactoryEasel()
{
  this.priority = 3;
  this.attributes = {};
}

Class.extend( FactoryEasel, Factory,
{
  is: function(subject)
  {
    return isObject( subject ) && !isArray( subject );
  },

  animatorFor: function(subject)
  {
    var animator = subject.$animator;

    if ( !animator )
    {
      animator = new AnimatorEasel( subject );
      animator.factory = this;

      subject.$animator = animator;
    }

    return animator;
  },

  destroy: function(animator)
  {
    delete animator.subject.$animator;
  },

  attribute: function(attr)
  {
    var attribute = this.attributes[ attr ];

    if ( !attribute )
    {
      attribute = this.attributes[ attr ] = $attribute( attr );

      var calculatorName = attribute.calculator;
      var calculator = $calculator( calculatorName );
      var defaultValue = calculator.parse( attribute.defaultValue, calculator.ZERO );
      var dynamicName = attribute.dynamic;
      var dynamic = $dynamic( dynamicName );

      attribute.calculatorName = calculatorName;
      attribute.calculator = calculator;
      attribute.defaultValue = defaultValue;
      attribute.name = attr;
      attribute.dynamicName = dynamicName;
      attribute.dynamic = dynamic;
      attribute.parse = function(value) {
        return this.calculator.parse( value, this.defaultValue );
      };
      attribute.cloneDefault = function() {
        return this.calculator.clone( this.defaultValue );
      };
    }

    return attribute;
  }
});
