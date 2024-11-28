export default function ObjectLiterals() {
    const person={
        age: 23,
        firstName:'Esteban',
        lastName: 'Flores',
        address:{
            country: 'Ecuador',
            houseNo: 90
        }

    }
  return (
    <>
    <h3>Objetos</h3>
    {JSON.stringify(person, null, 2)}
    </>
  )
}
