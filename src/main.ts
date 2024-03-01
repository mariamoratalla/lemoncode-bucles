type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

/* APARTADO 1 */
console.log(
  "%cAPARTADO 1",
  "color: #646cff; font-weight: bold; font-size: 16px"
);

/* Extraer la lista de pacientes que están asignados a la especialidad de Pediatría */

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAsignadosAPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsignadosAPediatria.push(pacientes[i]);
    }
  }

  return pacientesAsignadosAPediatria;
};

console.log(
  "Los pacientes asignados a pediatría son: ",
  obtenPacientesAsignadosAPediatria(pacientes)
);

/* Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años */

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesAsignadosAPediatriaYMenorDeDiezAnios.push(pacientes[i]);
    }
  }

  return pacientesAsignadosAPediatriaYMenorDeDiezAnios;
};

console.log(
  "Los pacientes asignados a Pediatría y menores de 10 años son: ",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

/* APARTADO 2 */
console.log(
  "%cAPARTADO 2",
  "color: #646cff; font-weight: bold; font-size: 16px"
);

/* Crear una función que devuelve true si la frecuencia cardíaca es superior a 100ppm y la temperatura corporal superior a 39 grados*/

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }

  return activarProctolo;
};

console.log(
  "¿Se debería activar el protocolo de urgencia?",
  activarProtocoloUrgencia(pacientes)
);

/* APARTADO 3 */
console.log(
  "%cAPARTADO 3",
  "color: #646cff; font-weight: bold; font-size: 16px"
);

/* Reasignar a los pacientes de Pediatría a Médico de familia */

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let reasignacionPacientes: Pacientes[] = [...pacientes];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      reasignacionPacientes[i] = {
        ...reasignacionPacientes[i],
        especialidad: "Medico de familia",
      };
    }
  }

  return reasignacionPacientes;
};

console.log(
  "Lista de pacientes con la modificación: ",
  reasignaPacientesAMedicoFamilia(pacientes)
);
