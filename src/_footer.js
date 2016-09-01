

  // Register Factory
  anim8.Factories['easel'] = new FactoryEasel();

  // Classes
  anim8.AnimatorEasel = AnimatorEasel;
  anim8.FactoryEasel = FactoryEasel;

  // Namespace
  anim8.easel = {
    Attributes:           Attributes,
    attribute:            $attribute,
    Dynamics:             Dynamics,
    dynamic:              $dynamic
  };

  return anim8;

}));
