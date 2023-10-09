const Cube = require("./../models/Cube.js")
let cubes  = []
exports.create =async (cubeData)=>{
  const cube  =  Cube(cubeData)
  await cube.save();
  return cube
}
exports.getAll = (search,from,to) =>{
    let filterdCubes = [...cubes]
    if (search) {
        filterdCubes = filterdCubes.filter((cube) =>
          cube.name.toLowerCase().includes(search.toLowerCase())
        );
      }
    
      if (from) {
        filterdCubes = filterdCubes.filter(
          (cube) => cube.difficultyLevel >= Number(from)
        );
      }
    
      if (to) {
        filterdCubes = filterdCubes.filter(
          (cube) => cube.difficultyLevel <= Number(to)
        );
      }
    return filterdCubes
}

exports.getSingleCube = (id)=>{
    return cubes.find((cube) => cube.id === id)
}