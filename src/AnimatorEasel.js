
function AnimatorEasel( subject )
{
  this.reset( subject );
  this.dynamics = new FastMap();
}

Class.extend( AnimatorEasel, Animator,
{

  placeAttrimator: function( attrimator )
  {
    this._placeAttrimator( attrimator );

    // Place any dynamic function on this animator.
    var attr = attrimator.attribute;
    var attribute = this.getAttribute( attr );
    var dynamic = attribute.dynamic;

    if ( dynamic )
    {
      this.dynamics.put( attr, dynamic );
    }

    return this;
  },

  apply: function()
  {
    // If a dynamic attribute has been updated, call the dynamic function and
    // mark the attribute as not needing to be updated.
    for (var attr in this.frame)
    {
      var dynamic = this.dynamics.get( attr );

      if ( this.updated[ attr ] && dynamic )
      {
        dynamic( this.frame[ attr ], this.subject );

        this.updated[ attr ] = false;
      }
    }

    // Call the parent apply
    this._apply();

    return this;
  }

});
