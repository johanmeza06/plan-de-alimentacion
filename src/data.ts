import { WeekPlan } from "./types";

/**************************************
 *  DATOS
 **************************************/

export const NOMBRE_USUARIO = "Johan Meza";
export const HORAS = {
  desayuno: { lunVie: "09:00–10:00", sabDom: "10:00–11:00" },
  colacionMedioDia: { sabDom: "13:00" },
  almuerzo: { lunVie: "13:00", sabDom: "15:00" },
  colacionTarde: { lunVie: "16:00", sabDom: "17:30" },
  preEntreno: { lunVie: "19:00" },
  cena: { lunVie: "22:30", sabDom: "19:00–20:00" },
  colacionNocturna: { sabDom: "22:30" },
};

export const PLAN: WeekPlan = {
  Lunes: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 galletas salmas (maíz/maíz morado)",
        "2 huevos revueltos",
        "1 taza (200 ml) café con 1/2 taza (100 ml) leche descremada sin lactosa + agua",
      ],
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Sopa de lentejas (2 tazas de lentejas + aliños)",
        "1 taza de arroz",
        "Pollo en salsa con verduras: 3 trozos 6x6x1 (~150 g crudos) pechuga, 6 cdas crema 10% sin lactosa, 1/2 tz pimentón, 1/2 tz zanahoria, 1 tz brócoli",
        "Agua o agua saborizada/jugo en polvo (200 ml)",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + 1 taza frutillas + 30 maní sin sal"],
      sustitutos: [
        "Yoghurt protein + 1/2 taza avena instantánea + 20 pasas",
        "Yoghurt protein + 1 taza frutillas",
      ],
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["2 plátanos chicos o 1 regular"],
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "2 wraps XL integrales",
        "1 lata de atún lomitos/jurel (160 g neto, 104 g drenado; lavado)",
        "4 tazas lechuga + 1 tomate en cubos + 1 1/2 taza palmitos",
        "1 taza café con 1/2 taza leche descremada sin lactosa",
      ],
    },
    colacionNocturna: null,
  },
  Martes: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "1 lámina de queso llanero + 1 lámina de jamón acaramelado/mortadela",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Salpicón: 1 lata (160 g neto, 104 g drenado) atún/jurel (lavado)",
        "2 tazas choclo + 1 huevo duro en rodajas + 1 1/2 taza zanahoria rallada + 2 tazas lechuga/repollo",
        "Limón a gusto + 200 ml jugo en polvo/agua sabor sin gas",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + 1/2 taza avena + 20 pasas"],
      sustitutos: [
        "Yoghurt protein + frutillas",
        "Proteína whey en agua + plátano en rodajas",
      ],
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: [
        "2 manzanas chicas o 1 manzana/plátano regular",
        "+ 1 taza café con 1/2 taza leche descremada sin lactosa",
      ],
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "Pulpa/lomo de cerdo al horno: 3 trozos 6x6x1 (~150 g crudos)",
        "Puré: 1 1/2 taza (papa + leche descremada sin lactosa + mantequilla sin lactosa)",
        "Ensalada: betarraga (1 tz) o brócoli (2 tz) + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
    },
    colacionNocturna: null,
  },
  Miércoles: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "2 huevos revueltos",
        "Café con leche descremada sin lactosa (1 taza café + 1/2 taza leche)",
      ],
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Pulpa/lomo de cerdo al horno: 4 trozos 6x6x1 (~200 g crudos)",
        "2 tazas puré de papas",
        "Ensalada: 1 taza betarraga cocida o 2 tazas brócoli + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + frutillas (1 taza)"],
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["2 plátanos chicos o 1 regular"],
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "Spaghetti (2 tazas) + boloñesa vacuno (carne magra 200 g crudos, sofrito zanahoria 1/2 tz + cebolla 3/4 tz, 4–6 cdas salsa tomate, laurel)",
        "Ensalada: 2 tazas repollo o apio + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
    },
    colacionNocturna: null,
  },
  Jueves: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "1 lámina jamón acaramelado/mortadela",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Spaghetti (2 tazas) + boloñesa vacuno (200 g crudos, sofrito, 4–6 cdas salsa tomate, laurel)",
        "Ensalada: 2 tazas repollo o apio + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + 1/2 taza avena + 20 pasas"],
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["2 tazas sandía/melón o 1 taza mango"],
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "1 1/2 marraqueta o 18 salmas",
        "Atún con mayonesa: 1 1/2 lata (240 g neto, 156 g drenado) + 2–3 cdas mayonesa",
        "1 taza café con 1/2 taza leche descremada sin lactosa",
      ],
    },
    colacionNocturna: null,
  },
  Viernes: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "2 huevos revueltos",
        "Café con leche descremada sin lactosa",
      ],
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Ensalada de lentejas: 3 tazas lentejas (o 2 envases 760 g neto / 460 g drenado; lavadas) + zanahoria rallada (1 tz) + lechuga (2 tz) + limón",
        "Bebida: jugo en polvo/agua sabor sin gas (200 ml)",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Proteína whey en agua + plátano (rodajas)"],
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["Yoghurt protein (140 g) + 1/2 taza avena"],
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "Picoteo: 2 1/2 tazas (62,5 g) Detodito original + pollo 150 g (pechuga en cubos al sartén) + 12 salmas o 20 crackelet",
        "1–2 vasos (200–400 ml) bebida sin azúcar (preferir blancas: Sprite Zero)",
      ],
    },
    colacionNocturna: null,
  },
  Sábado: {
    desayuno: {
      hora: HORAS.desayuno.sabDom,
      items: [
        "1 marraqueta o 12 salmas",
        "6–14 cdtas mermelada 0% azúcar (Regimel)",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
    },
    colacionMedioDia: {
      hora: HORAS.colacionMedioDia.sabDom,
      items: ["2 tazas de frutillas"],
      sustitutos: ["2 manzanas chicas o 1 regular"],
    },
    almuerzo: {
      hora: HORAS.almuerzo.sabDom,
      items: [
        "Bistec vacuno magro: 3 trozos 6x6x1 (~200 g crudos)",
        "2 tazas arroz graneado",
        "1 1/2 taza porotos negros (o 1 envase 380 g neto / 230 g drenado; lavados)",
        "Ensalada: 1/2 taza betarraga + limón",
        "Bebida/jugo en polvo (200 ml)",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.sabDom,
      items: ["2 tazas sandía/melón o 1 taza mango"],
    },
    preEntreno: null,
    cena: {
      hora: HORAS.cena.sabDom,
      items: ["Libre"],
    },
    colacionNocturna: {
      hora: HORAS.colacionNocturna.sabDom,
      items: ["Yoghurt protein (140 g)"],
    },
  },
  Domingo: {
    desayuno: {
      hora: HORAS.desayuno.sabDom,
      items: [
        "1 marraqueta o 12 salmas",
        "1 lámina queso llanero + 1 lámina jamón acaramelado/mortadela",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
    },
    colacionMedioDia: {
      hora: HORAS.colacionMedioDia.sabDom,
      items: ["2 manzanas chicas o 1 regular"],
      sustitutos: ["2 tazas de frutillas"],
    },
    almuerzo: {
      hora: HORAS.almuerzo.sabDom,
      items: [
        "Spaghetti (2 tazas) con sardinas (3 latas: 375 g neto / 225 g drenado; lavadas) + 4–6 cdas salsa de tomate + laurel",
        "Ensalada: 2 tazas brócoli cocido o 1 taza betarraga + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.sabDom,
      items: ["Yoghurt protein (140 g) + plátano (2 chicos o 1 regular)"],
    },
    preEntreno: null,
    cena: {
      hora: HORAS.cena.sabDom,
      items: [
        "Pechuga de pollo (3 trozos 6x6x1 ~150 g crudos) al sartén",
        "Ensaladas: papas con cebolla (3 papas + 3/4 tz cebolla), 4 cdas palta (sin aceite), brócoli (1 tz) o tomate (1 un)",
        "Limón + Bebida/jugo en polvo (200 ml)",
      ],
    },
    colacionNocturna: {
      hora: HORAS.colacionNocturna.sabDom,
      items: ["5 unidades de nuez (10 mariposas)"],
    },
  },
};

export const DAY_INITIALS: Record<string, string> = {
  Lunes: "L",
  Martes: "M",
  Miércoles: "M",
  Jueves: "J",
  Viernes: "V",
  Sábado: "S",
  Domingo: "D",
};

export const MEAL_ICONS: Record<string, string> = {
  Desayuno: "breakfast",
  "Colación (medio día)": "snack",
  Almuerzo: "lunch",
  "Colación de tarde": "snack",
  "Pre‑entreno": "snack",
  Cena: "dinner",
  "Colación nocturna": "snack",
};

export const PLAN_CON_ALTERNATIVAS: WeekPlan = {
  Lunes: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 galletas salmas (maíz/maíz morado)",
        "2 huevos revueltos",
        "1 taza (200 ml) café con 1/2 taza (100 ml) leche descremada sin lactosa + agua",
      ],
      alternativa: {
        descripcion: "Equivalente por porciones",
        items: [
          "2 tortillas Rapiditas M o 1 wrap XL integral",
          "120 g pechuga de pavo a la plancha (equiv. a 2 huevos) o 6 claras",
          "1 yoghurt descremado 120–125 g en lugar de la 1/2 taza de leche",
        ],
      },
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Sopa de lentejas (2 tazas de lentejas + aliños)",
        "1 taza de arroz",
        "Pollo en salsa con verduras: 3 trozos 6x6x1 (~150 g crudos) pechuga, 6 cdas crema 10% sin lactosa, 1/2 tz pimentón, 1/2 tz zanahoria, 1 tz brócoli",
        "Agua o agua saborizada/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Porotos o garbanzos cocidos 2 tazas (en vez de lentejas 2 tazas)",
          "Fideos cocidos 1 taza o 1 papa mediana cocida (en vez de arroz 1 taza)",
          "Atún al agua 1–1½ latas drenadas o reineta 160–200 g en vez de pollo",
          "Verduras equivalentes: brócoli/repollo/zanahoria en mismas porciones",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + 1 taza frutillas + 30 maní sin sal"],
      sustitutos: [
        "Yoghurt protein + 1/2 taza avena instantánea + 20 pasas",
        "Yoghurt protein + 1 taza frutillas",
      ],
      alternativa: {
        items: ["Yoghurt descremado 120–125 g + 1 manzana chica + 5 nueces"],
      },
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["2 plátanos chicos o 1 regular"],
      alternativa: {
        items: [
          "Frutillas 2 tazas o 2 manzanas chicas; opcional 1 taza café + 1/2 taza leche descremada",
        ],
      },
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "2 wraps XL integrales",
        "1 lata de atún lomitos/jurel (160 g neto, 104 g drenado; lavado)",
        "4 tazas lechuga + 1 tomate en cubos + 1 1/2 taza palmitos",
        "1 taza café con 1/2 taza leche descremada sin lactosa",
      ],
      alternativa: {
        items: [
          "1½ marraqueta o 2 Rapiditas M + pechuga de pollo 120–150 g",
          "Ensalada equivalente: repollo 2 tazas + zanahoria 1/2 taza + tomate 1",
          "Yoghurt descremado 120–125 g en lugar de la taza de café con leche",
        ],
      },
    },
    colacionNocturna: null,
  },

  Martes: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "1 lámina de queso llanero + 1 lámina de jamón acaramelado/mortadela",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
      alternativa: {
        items: [
          "3 rebanadas pan molde blanco o 2 integrales",
          "Quesillo/queso fresco light 60 g + pechuga de pavo 40–60 g",
          "1 yoghurt descremado 120–125 g en vez de whey",
        ],
      },
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Salpicón: 1 lata (160 g neto, 104 g drenado) atún/jurel (lavado)",
        "2 tazas choclo + 1 huevo duro en rodajas + 1 1/2 taza zanahoria rallada + 2 tazas lechuga/repollo",
        "Limón a gusto + 200 ml jugo en polvo/agua sabor sin gas",
      ],
      alternativa: {
        items: [
          "Reineta/merluza 160–200 g o pechuga de pollo 150 g",
          "Arroz 3/4–1 taza en lugar de choclo 2 tazas (equivalencia cereal)",
          "Verduras equivalentes: brócoli 2 tazas + tomate 1",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + 1/2 taza avena + 20 pasas"],
      sustitutos: [
        "Yoghurt protein + frutillas",
        "Proteína whey en agua + plátano en rodajas",
      ],
      alternativa: {
        items: ["Leche descremada 200 ml + 1 plátano chico + 5 nueces"],
      },
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: [
        "2 manzanas chicas o 1 manzana/plátano regular",
        "+ 1 taza café con 1/2 taza leche descremada sin lactosa",
      ],
      alternativa: {
        items: ["Sandía/melón 2 tazas o 1 taza mango + 1 taza melón"],
      },
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "Pulpa/lomo de cerdo al horno: 3 trozos 6x6x1 (~150 g crudos)",
        "Puré: 1 1/2 taza (papa + leche descremada sin lactosa + mantequilla sin lactosa)",
        "Ensalada: betarraga (1 tz) o brócoli (2 tz) + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Vacuno magro 150 g o pechuga pollo 150 g",
          "Fideos cocidos 1 taza o arroz 1 taza en vez de puré",
          "Ensalada equivalente: repollo 2 tazas + zanahoria 1/2 taza",
        ],
      },
    },
    colacionNocturna: null,
  },

  Miércoles: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "2 huevos revueltos",
        "Café con leche descremada sin lactosa (1 taza café + 1/2 taza leche)",
      ],
      alternativa: {
        items: [
          "2 Rapiditas M o 1 wrap XL integral",
          "Atún al agua 1/2–1 lata drenada (como proteína) o 6 claras",
          "Yoghurt descremado 120–125 g",
        ],
      },
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Pulpa/lomo de cerdo al horno: 4 trozos 6x6x1 (~200 g crudos)",
        "2 tazas puré de papas",
        "Ensalada: 1 taza betarraga cocida o 2 tazas brócoli + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Pescado magro 200–240 g o pechuga pollo 180–200 g",
          "Arroz 1½ tazas o fideos 1½ tazas (equivalente al puré 2 tazas)",
          "Ensalada: repollo 2 tazas + tomate 1",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + frutillas (1 taza)"],
      alternativa: {
        items: ["Leche descremada 200 ml + 1 manzana chica"],
      },
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["2 plátanos chicos o 1 regular"],
      alternativa: { items: ["Mango 1 taza + melón 1 taza"] },
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "Spaghetti (2 tazas) + boloñesa vacuno (carne magra 200 g crudos, sofrito zanahoria 1/2 tz + cebolla 3/4 tz, 4–6 cdas salsa tomate, laurel)",
        "Ensalada: 2 tazas repollo o apio + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Arroz 2 tazas + carne magra 200 g salteada con verduras",
          "Ensalada: lechuga 2 tazas + zanahoria 1/2 taza + tomate 1",
        ],
      },
    },
    colacionNocturna: null,
  },

  Jueves: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "1 lámina jamón acaramelado/mortadela",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
      alternativa: {
        items: [
          "3 rebanadas pan molde blanco o 2 integrales",
          "Pechuga de pavo 60–80 g o queso fresco light 60 g",
          "Yoghurt descremado 120–125 g",
        ],
      },
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Spaghetti (2 tazas) + boloñesa vacuno (200 g crudos, sofrito, 4–6 cdas salsa tomate, laurel)",
        "Ensalada: 2 tazas repollo o apio + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Puré de papa 2 tazas o arroz 2 tazas + vacuno magro 200 g",
          "Ensalada: lechuga 2 tazas + tomate 1 + zanahoria 1/2 taza",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Yoghurt protein (140 g) + 1/2 taza avena + 20 pasas"],
      alternativa: {
        items: ["Yoghurt descremado 120–125 g + 1 taza frutillas + 5 nueces"],
      },
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["2 tazas sandía/melón o 1 taza mango"],
      alternativa: { items: ["2 manzanas chicas o 1 plátano regular"] },
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "1 1/2 marraqueta o 18 salmas",
        "Atún con mayonesa: 1 1/2 lata (240 g neto, 156 g drenado) + 2–3 cdas mayonesa",
        "1 taza café con 1/2 taza leche descremada sin lactosa",
      ],
      alternativa: {
        items: [
          "2 Rapiditas M o 1 wrap XL integral",
          "Pechuga de pollo 150 g + 1 cda mayonesa light o palta 2 cdas",
          "Yoghurt descremado 120–125 g",
        ],
      },
    },
    colacionNocturna: null,
  },

  Viernes: {
    desayuno: {
      hora: HORAS.desayuno.lunVie,
      items: [
        "1 marraqueta o 12 salmas",
        "2 huevos revueltos",
        "Café con leche descremada sin lactosa",
      ],
      alternativa: {
        items: [
          "Pan pita 1–1½ unid. o 2 Rapiditas M",
          "Atún al agua 1/2–1 lata o pavo 120 g",
          "Yoghurt descremado 120–125 g",
        ],
      },
    },
    colacionMedioDia: null,
    almuerzo: {
      hora: HORAS.almuerzo.lunVie,
      items: [
        "Ensalada de lentejas: 3 tazas lentejas (o 2 envases 760 g neto / 460 g drenado; lavadas) + zanahoria rallada (1 tz) + lechuga (2 tz) + limón",
        "Bebida: jugo en polvo/agua sabor sin gas (200 ml)",
      ],
      alternativa: {
        items: [
          "Porotos negros 3 tazas o garbanzos 3 tazas",
          "Arroz 1 taza añadido si prefieres parte de cereal (mantén equivalencia total)",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.lunVie,
      items: ["Proteína whey en agua + plátano (rodajas)"],
      alternativa: {
        items: ["Yoghurt descremado 120–125 g + manzana chica + 5 almendras"],
      },
    },
    preEntreno: {
      hora: HORAS.preEntreno.lunVie,
      items: ["Yoghurt protein (140 g) + 1/2 taza avena"],
      alternativa: {
        items: [
          "2 frutas chicas (p. ej., 1 manzana + 1 mandarina) o 1 plátano regular",
        ],
      },
    },
    cena: {
      hora: HORAS.cena.lunVie,
      items: [
        "Picoteo: 2 1/2 tazas (62,5 g) Detodito original + pollo 150 g (pechuga en cubos al sartén) + 12 salmas o 20 crackelet",
        "1–2 vasos (200–400 ml) bebida sin azúcar (preferir blancas: Sprite Zero)",
      ],
      alternativa: {
        items: [
          "Crackers integrales 10–12 unid. + hummus 1/2 taza + pechuga pollo 150 g",
          "Opcional 1 porción de palta (2–4 cdas) en lugar de otras grasas",
        ],
      },
    },
    colacionNocturna: null,
  },

  Sábado: {
    desayuno: {
      hora: HORAS.desayuno.sabDom,
      items: [
        "1 marraqueta o 12 salmas",
        "6–14 cdtas mermelada 0% azúcar (Regimel)",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
      alternativa: {
        items: [
          "Pan molde 3 rebanadas o 2 integrales + fruta 1 porción en vez de mermelada",
          "Yoghurt descremado 120–125 g en lugar de whey",
        ],
      },
    },
    colacionMedioDia: {
      hora: HORAS.colacionMedioDia.sabDom,
      items: ["2 tazas de frutillas"],
      sustitutos: ["2 manzanas chicas o 1 regular"],
      alternativa: { items: ["Sandía/melón 2 tazas o mango 1 taza"] },
    },
    almuerzo: {
      hora: HORAS.almuerzo.sabDom,
      items: [
        "Bistec vacuno magro: 3 trozos 6x6x1 (~200 g crudos)",
        "2 tazas arroz graneado",
        "1 1/2 taza porotos negros (o 1 envase 380 g neto / 230 g drenado; lavados)",
        "Ensalada: 1/2 taza betarraga + limón",
        "Bebida/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Pechuga pollo 200 g o pescado magro 220–240 g",
          "Puré 2 tazas o fideos 2 tazas (equivalente al arroz 2 tazas)",
          "Legumbre equivalente: lentejas 1½ taza",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.sabDom,
      items: ["2 tazas sandía/melón o 1 taza mango"],
      alternativa: { items: ["2 manzanas chicas o 1 plátano regular"] },
    },
    preEntreno: null,
    cena: {
      hora: HORAS.cena.sabDom,
      items: ["Libre"],
      alternativa: {
        descripcion: "Marco de equivalencias",
        items: [
          "Elegir 1 proteína magra (~150–200 g) + 1 cereal (1–2 porciones) + verduras libres",
        ],
      },
    },
    colacionNocturna: {
      hora: HORAS.colacionNocturna.sabDom,
      items: ["Yoghurt protein (140 g)"],
      alternativa: {
        items: ["Leche descremada 200 ml o yoghurt descremado 120–125 g"],
      },
    },
  },

  Domingo: {
    desayuno: {
      hora: HORAS.desayuno.sabDom,
      items: [
        "1 marraqueta o 12 salmas",
        "1 lámina queso llanero + 1 lámina jamón acaramelado/mortadela",
        "1 scoop (30 g) whey cookies & cream en 240 ml de agua",
      ],
      alternativa: {
        items: [
          "2 Rapiditas M o 1 wrap XL",
          "Queso fresco light 60 g + pavo 40–60 g",
          "Yoghurt descremado 120–125 g",
        ],
      },
    },
    colacionMedioDia: {
      hora: HORAS.colacionMedioDia.sabDom,
      items: ["2 manzanas chicas o 1 regular"],
      sustitutos: ["2 tazas de frutillas"],
      alternativa: { items: ["Sandía/melón 2 tazas o 1 taza mango"] },
    },
    almuerzo: {
      hora: HORAS.almuerzo.sabDom,
      items: [
        "Spaghetti (2 tazas) con sardinas (3 latas: 375 g neto / 225 g drenado; lavadas) + 4–6 cdas salsa de tomate + laurel",
        "Ensalada: 2 tazas brócoli cocido o 1 taza betarraga + limón",
        "Agua/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Arroz 2 tazas + atún al agua 1½–2 latas drenadas o pollo 180–200 g",
          "Ensalada: repollo 2 tazas + tomate 1",
        ],
      },
    },
    colacionTarde: {
      hora: HORAS.colacionTarde.sabDom,
      items: ["Yoghurt protein (140 g) + plátano (2 chicos o 1 regular)"],
      alternativa: {
        items: ["Leche descremada 200 ml + manzana chica + 5 nueces"],
      },
    },
    preEntreno: null,
    cena: {
      hora: HORAS.cena.sabDom,
      items: [
        "Pechuga de pollo (3 trozos 6x6x1 ~150 g crudos) al sartén",
        "Ensaladas: papas con cebolla (3 papas + 3/4 tz cebolla), 4 cdas palta (sin aceite), brócoli (1 tz) o tomate (1 un)",
        "Limón + Bebida/jugo en polvo (200 ml)",
      ],
      alternativa: {
        items: [
          "Reineta/merluza 180–200 g o vacuno magro 150–180 g",
          "Cereal equivalente: arroz 1 taza o fideos 1 taza en vez de papas",
          "Grasa equivalente: 5 nueces en lugar de 4 cdas de palta",
        ],
      },
    },
    colacionNocturna: {
      hora: HORAS.colacionNocturna.sabDom,
      items: ["5 unidades de nuez (10 mariposas)"],
      alternativa: { items: ["Maní 30 unidades o almendras 26 unidades"] },
    },
  },
};
