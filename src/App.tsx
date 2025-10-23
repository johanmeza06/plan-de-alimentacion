import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MealDetailModal from "./MealDetailModal";
import Action from "./components/Action";
import Icon from "./components/Icon";
import DarkModeToggle from "./components/DarkModeToggle";
import type { DayPlan, DoneMap, MealData, MealWithStatus } from "./types";
import {
  MEAL_ICONS,
  PLAN,
  DAY_INITIALS,
  NOMBRE_USUARIO,
  PLAN_CON_ALTERNATIVAS,
} from "./data";

/**
 * TABLERO PWA – MINUTA NUTRICIONAL
 * TypeScript + View Transitions API + Diseño Moderno
 */

/**************************************
 *  UTILIDADES
 **************************************/
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [val, setVal] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, val]);

  return [val, setVal];
}

const withViewTransition = (cb: () => void) => {
  if (typeof document !== "undefined" && document.startViewTransition) {
    return document.startViewTransition(() => cb());
  }
  return cb();
};

const DAYS = Object.keys(PLAN_CON_ALTERNATIVAS);
export default function App() {
  const [day, setDay] = useState(DAYS[0]);
  const [doneMap, setDoneMap] = useLocalStorage<DoneMap>("minuta_done_v3", {});
  const [selectedMeal, setSelectedMeal] = useState<MealWithStatus | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dayData: DayPlan = PLAN_CON_ALTERNATIVAS[day];

  const meals = useMemo(() => {
    if (!dayData) return [];

    return [
      ["Desayuno", dayData.desayuno],
      ["Colación (medio día)", dayData.colacionMedioDia],
      ["Almuerzo", dayData.almuerzo],
      ["Colación de tarde", dayData.colacionTarde],
      ["Pre‑entreno", dayData.preEntreno],
      ["Cena", dayData.cena],
      ["Colación nocturna", dayData.colacionNocturna],
    ].filter(([_, data]) => data !== null && data !== undefined) as Array<
      [string, MealData]
    >;
  }, [dayData]);

  const progress = useMemo(() => {
    const total = meals.length;
    const done = meals.filter(([label]) => doneMap?.[day]?.[label]).length;
    return total > 0 ? Math.round((done / total) * 100) : 0;
  }, [meals, doneMap, day]);

  const toggleDone = (mealKey: string) => {
    withViewTransition(() => {
      setDoneMap((prev) => ({
        ...prev,
        [day]: { ...(prev[day] || {}), [mealKey]: !prev?.[day]?.[mealKey] },
      }));
    });
  };

  const openMealDetail = (mealName: string, mealData: MealData) => {
    withViewTransition(() => {
      setSelectedMeal({
        name: mealName,
        ...mealData,
        done: !!doneMap?.[day]?.[mealName],
      });
      setIsModalOpen(true);
    });
  };

  const resetDay = () =>
    withViewTransition(() => setDoneMap((prev) => ({ ...prev, [day]: {} })));

  const resetAll = () => withViewTransition(() => setDoneMap({}));

  return (
    <div className="min-h-screen bg-background font-display text-text">
      <div className="mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl px-3 sm:px-4 py-6">
        {/* Header */}
        <header className="mb-3 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            Plan Nutricional - {NOMBRE_USUARIO}
          </h1>
          <DarkModeToggle />
        </header>

        {/* Tabs de día */}
        <nav className="mb-4">
          <div className="flex border-b border-border">
            {DAYS.map((d) => (
              <button
                key={d}
                onClick={() => withViewTransition(() => setDay(d))}
                className={`flex-1 py-2.5 text-sm font-bold tracking-wide border-b-[3px] transition-colors ${
                  d === day
                    ? "border-primary text-text"
                    : "border-transparent text-text-secondary"
                }`}
              >
                {DAY_INITIALS[d]}
              </button>
            ))}
          </div>
        </nav>

        {/* Acciones */}
        <div className="w-full">
          <div className="flex flex-wrap justify-center gap-14">
            {/* <Action
                icon="print"
                label="Imprimir"
                onClick={() => window.print()}
              />
              <Action
                icon="download"
                label="Exportar"
                onClick={exportJSON}
              /> */}
            <Action icon="reload" label="Reiniciar día" onClick={resetDay} />
            <Action icon="trash" label="Reiniciar todo" onClick={resetAll} />
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="mt-4 rounded-xl p-4 ">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold">Progreso del día</p>
            <p className="text-lg font-bold text-primary">{progress}%</p>
          </div>
          <div className="h-2.5 rounded-full bg-border overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Tarjetas de comidas */}
        <main className="mt-4 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {meals.length > 0 ? (
              <motion.div
                key={day}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.01,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="flex flex-col gap-4"
              >
                {meals.map(([label, data]) => {
                  const isDone = !!doneMap?.[day]?.[label];
                  return (
                    <motion.div
                      key={label}
                      layout
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 20,
                          scale: 0.8,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                          },
                        },
                        exit: {
                          opacity: 0,
                          y: -30,
                          scale: 0.9,
                          transition: {
                            duration: 0.2,
                          },
                        },
                      }}
                      className={`bg-card rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg  ${
                        isDone ? "opacity-90" : ""
                      }`}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openMealDetail(label, data)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary-dark rounded-full mt-1">
                          <Icon
                            name={MEAL_ICONS[label] || "restaurant"}
                            className="text-white"
                          />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-bold ${
                              isDone ? "line-through text-text-secondary" : ""
                            }`}
                          >
                            {label} - {data.hora}
                          </h3>
                          <ul
                            className={`list-disc list-inside mt-2 text-sm text-text-secondary ${
                              isDone ? "line-through" : ""
                            }`}
                          >
                            {data.items.slice(0, 2).map((item, i) => (
                              <li key={i}>
                                {item.length > 50
                                  ? item.slice(0, 50) + "..."
                                  : item}
                              </li>
                            ))}
                            {data.items.length > 2 && (
                              <li className="text-primary font-medium">
                                + {data.items.length - 2} más...
                              </li>
                            )}
                          </ul>
                        </div>
                        <label
                          className="flex items-center cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => toggleDone(label)}
                            className="sr-only"
                          />
                          <div
                            className={`
                            w-6 h-6 rounded-md border-2 transition-all duration-200 flex items-center justify-center
                            ${
                              isDone
                                ? "bg-primary border-primary"
                                : "bg-card border-border hover:border-primary"
                            }
                          `}
                          >
                            {isDone && (
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                        </label>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-12 text-text-secondary">
                No hay comidas registradas para este día.
              </div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Modal de Detalle */}
      <MealDetailModal
        meal={selectedMeal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onToggleComplete={() => {
          if (selectedMeal) {
            toggleDone(selectedMeal.name);
            setSelectedMeal({ ...selectedMeal, done: !selectedMeal.done });
          }
        }}
      />

      <style>{`
        @media print {
          nav, .px-1, .mt-4.rounded-xl { display: none !important; }
        }
      `}</style>
    </div>
  );
}
