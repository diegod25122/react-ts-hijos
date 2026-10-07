import { Link } from "react-router";
import { calcularDanio } from "../utils/CalcularDanio";
export const Modulo1Page = () => {
  //inferencia vs anotacion 
  let saga: string = "Saiyan Saga"; //inferido
  let horasEntrenamiento: number = 36; //valor anotado 
  // tipos basicos
  let guerrero: string = "Goku";
  const ki: number = 9001; //enteros o decimales 
  const enCombate: boolean = true;
  // arrays
  const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"];
  //tuplas
  const coordenadas: [number, number, string] = [42, 17, "Hola"];
  //funciones tipadad(parametros + retorno)
  //function calcularDanio(base: number, multiplicador: number): number {
    //return base * multiplicador;
  //}
  //funcnion flecha tipada
  const calcularDanioFlecha = (base: number, multiplicador: number): number => {
    return base * multiplicador;
  }
  // null y undefined
  let transformacion: string | null = null;
  transformacion = "Super Saiyan";
  let estrategia: string | undefined = undefined;
  estrategia = "Transformarse a ultra instinto";
  //any y unknown
  let variableLibre: any = "Semilla del ermitanio";
  variableLibre = 2;
  let evento: unknown = "Refuerzo";
  let eventoMayus: string | null= null;
  if (typeof evento === "string") {
    eventoMayus = evento.toUpperCase();
  }




  return (
    <main className="min-h-screen bg-neutral-950 
    text-neutral-100 antialiased">
      <div className="mx-auto max-w-3xl p-8">
        <header className="mb-8 border-b border-neutral-800 pb-4">
          <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
            Volver a Home
          </Link>

          <h1 className="text-3xl font-semibold text-blue-500">
            React + TypeScript: Modulo 1
          </h1>
          <p className="text-sm text-neutral-400">
            Fundamentos: tipos basicos, arrays y tuplas
          </p>
        </header>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Inferencia y basicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
            <div>
              Saga:<span> {saga}</span>
            </div>
            <div>
              Horas de entrenamiento:<span> {horasEntrenamiento}</span>
            </div>
            <div>
              Guerrero:<span> {guerrero}</span>
            </div>
            <div>
              Ki:<span> {ki}</span>
            </div>
            <div>
              En combate:<span> {enCombate ? "Si" : "No"}</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Arrays
          </h2>
          <div>
            Equipo Z: {equipoZ.join(", ")}
          </div>
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Tuplas
          </h2>
          <div>
            Coordenadas [x,y,hola]: x= {coordenadas[0]},
            y={coordenadas[1]},
            Saludo= {coordenadas[2]}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Funciones tipadas
          </h2>
          <div>
            <p>Danio (base 450 * mult.2): {calcularDanio(450, 2)}</p>
            <p>Danio (flecha, base 450 * mult.2): {calcularDanioFlecha(450, 2)}</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Null y undefined
          </h2>
          <div>
            Transformacion: {transformacion}
          </div>
          <div>
            Estrategia: {estrategia}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-medium text-blue-300 mb-2">
            Any y unknown
          </h2>
          <div>
            Any: {variableLibre}</div>
          <div>
            Evento: {eventoMayus}
          </div>
        </section>
      </div>

    </main>
  );
};