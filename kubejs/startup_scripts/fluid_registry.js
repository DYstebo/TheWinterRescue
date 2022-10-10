console.info('[KUBEJS_THE_WINTER_RESCUE] TWR Fluids Registered!')

onEvent('fluid.registry', event => {
  /*const generalFluids = [
      
  ];
  
  generalFluids.forEach((fluid) => {
    if (fluid.type == 'thick') {
        event.create(fluid.id).textureThick(fluid.texture).bucketColor(fluid.texture); //.displayName(fluid.display);
    }
    else if (fluid.type == 'thin') {
        event.create(fluid.id).textureThin(fluid.texture).bucketColor(fluid.texture); //.displayName(fluid.display);
    }
    else if (fluid.type == 'custom') {
        event.create(fluid.id).displayName(fluid.display).textureStill(fluid.still).textureFlowing(fluid.flowing).bucketColor(fluid.color)
    }
  });
*/
  event.create('lime_water').textureThin(0xB0C4DE)
  event.create('magnesium_chlorine').textureThin(0xB0C4DE)
  event.create('sulfuric_acid').textureThin(0xEEE8AA)
  event.create('hydrochloric_acid').textureThin(0xAAFFAA)
  event.create('cryolite').textureThin(0x90EE90)
  event.create('tar').textureThick(0x000000).viscosity(1150).density(950)
  event.create('protein').textureStill("kubejs:block/protein_fluid").textureFlowing("kubejs:block/protein_fluid").viscosity(200).density(200)
})
