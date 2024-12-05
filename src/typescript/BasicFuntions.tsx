const addTwNumbers = (a: number, b: number): number => {
  return a + b;
};
export default function BasicFuntions() {
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de la suma es: {addTwNumbers(1,6)}</span>
    </>
  );
}
