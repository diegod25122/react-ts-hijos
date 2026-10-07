import { useState } from "react";

type ContadorProps={
    initial?: number;
    step?: number;
}
export const Modulo2Page = ({initial = 0, step = 1}:ContadorProps) => {
const [count,setCount ] = useState<number>(initial);
const inc = () => setCount((c) => c + step);
const dec = () => setCount((c) => c - step);
    //inferidos
    const [tazas, setTazas] = useState(1);
    type Ingredientes = "agua" | "cafe" | "azucar"; //tipado explicito extricto
    type RecetaCafe = {
        agua?: number;
        cafe?: number;
        azucar?: number;
    };
    type CafePreparado = {
        mensaje: string;
        intensidad: "suave" | "fuerte";
    }
    //explicito con union literal
    const[intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]>("suave");
    //explicito cpn valores nulos
    const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null>(null);
    //valores que pueden ser undefined
    const [azucarIn, setAzucarIn] = useState<number | undefined>(undefined);



    //interface
    //padre
    interface RecetaBase {
        agua: number;
        cafe: number
    }
    //HIJ
    interface RecetaAzucar extends RecetaBase {
        azucar: number;
    }// extendiendo del padre>hijo

    interface MaquinaCafe {
        modelo: string;
    }
    interface MaquinaCafe {
        aguaMax: number
    }
    const maquina: MaquinaCafe = {
        modelo: "Kame-500",
        aguaMax: 500
    };
    const ingredientes: Ingredientes[] = ["agua", "cafe", "azucar"];


    function prepararCafe({ agua=0, cafe=0, azucar=0 }: RecetaCafe): CafePreparado {

        const intensidad = cafe > 10 ? "fuerte" : "suave";
        return {
            mensaje: `Cafe listo con ${agua} ml de agua y ${cafe} gramos de cafe` + (azucar ? `+${azucar} gramos de azucar` : ""),
            intensidad,
        }
    }
    interface CafePreparadoI {
        mensaje: string;
        intensidad: "suave" | "fuerte";
    }
    function prepararCafeI(receta: RecetaAzucar): CafePreparadoI {
        const intensidad: CafePreparadoI["intensidad"] = receta.cafe > 10 ? "fuerte" : "suave";
        return {
            mensaje: `Cafe listo (INTF) con ${receta.agua} ml de agua y ${receta.cafe} gramos de cafe` + (receta.azucar ? `+${receta.azucar} gramos de azucar` : ""),
            intensidad,
        }
    }
    const onCafe = () => {
        const resultado = prepararCafe({ agua: 200, cafe: 5, azucar: 5 });
        alert(resultado.mensaje + " con Intensidad: " + resultado.intensidad);
    }
    //funcion interface
    const onCafeInterface = () => {
        const resultado = prepararCafeI({ agua: 100, cafe: 5, azucar: 5 });
        alert(resultado.mensaje + " con Intensidad: " + resultado.intensidad);
    }
    //intersecciones
    type A = {nombre: string};
    type B = {edad: number};
    type C = {state:boolean}
    type Persona = A & B & C;
    const juanObject: Persona = {nombre: "Juan", edad: 30, state: true};

    return (
        <div className="h-screen bg-amber-300 text-black  flex flex-col p-4 gap-4">
            <span>Modulo2Page</span>
            <button className="bg-amber-950 text-white rounded-2xl" onClick={onCafe}>Hacer Café con type</button>
             <span>Interface</span>
            <button className="bg-black text-white rounded-2xl" onClick={onCafeInterface}>Hacer Café con interface</button>
           <span> State tipados</span>
           {intensidadUI}
           <button onClick={() => setIntensidadUI("fuerte")} className="bg-black text-white rounded-2xl">Cambiar intensidad a fuerte</button>
           <span >Contador</span>
           <button onClick={dec} className="bg-black text-white rounded-2xl">-</button>
           <span className="min-w-[3ch] text-center text-2xl font-semibold text-black">{count}</span>
           <button onClick={inc} className="bg-black text-white rounded-2xl">+</button>
           <h2>Interseccion (&)</h2>
           {juanObject.nombre} - {juanObject.edad}

           <pre>{JSON.stringify(juanObject, null, 2)}</pre>
        </div>

    )
}