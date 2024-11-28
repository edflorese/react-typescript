export default function BasicTypes() {
  const name: string = "Esteban Flores";
  const age: number = 23;
  const isActive: boolean = false;
  const people = ["Ana", "Carlos", "Samantha"];
  return (
    <>
      <h3>Tipos basicos</h3>
      {name}-{age}-{isActive ? "Activo" : "No Activo"}-{people.join(", ")}
    </>
  );
}
