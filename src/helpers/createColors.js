import randomColor from 'randomcolor'

export default (num) => {
  return randomColor({
    count: num,
    hue: 'blue',
    format: 'rgb'
  })
}
