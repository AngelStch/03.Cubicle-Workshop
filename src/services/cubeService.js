const uniqid = require("uniqid")

const cubes = [{
    id: '4uvzq2mklncxswai',
    name: 'An723',
    description: 'xcsf',
    imageUrl: 'https://media.istockphoto.com/id/483822467/photo/classic-rubiks-cube.jpg?s=612x612&w=0&k=20&c=KQnGh21FJAN7dLFWT0lm05VGniAHHp9Uv-nzda9zyRo=',
    difficultyLevel: 1
}


 , {
    id: '4uvzq2mklncxswai',
    name: 'Angel723',
    description: 'xf',
    imageUrl: 'https://media.istockphoto.com/id/483822467/photo/classic-rubiks-cube.jpg?s=612x612&w=0&k=20&c=KQnGh21FJAN7dLFWT0lm05VGniAHHp9Uv-nzda9zyRo=',
    difficultyLevel: 5
  }
]
exports.create = (cubeData)=>{
    const Newcube ={
        id:uniqid(),
        ...cubeData
    } 
    cubes.push(Newcube)
    return Newcube
}
exports.getAll = () =>{
    return [...cubes]
}