export default function getCurrentDate() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString('pt-BR').split(' ')[0].replace(':', 'h').slice(0, -3)

  return date.toISOString().split('T')[0].split('-').reverse().join('/') + ' às ' + currentTime
}
