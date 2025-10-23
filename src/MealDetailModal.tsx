import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MealWithStatus } from "./types";
import Icon from "./components/Icon";

type Props = {
  meal: MealWithStatus | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleComplete: () => void;
};

const startVT = (fn: () => void) => {
  if (typeof document !== "undefined" && document.startViewTransition) {
    return document.startViewTransition(fn);
  }
  return fn();
};

export default function MealDetailModal({
  meal,
  isOpen,
  onClose,
  onToggleComplete,
}: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [isSustitutosOpen, setIsSustitutosOpen] = useState(false);
  const [isAlternativasOpen, setIsAlternativasOpen] = useState(false);

  // Manejo de foco y tecla ESC
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => closeBtnRef.current?.focus(), 10);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        startVT(onClose);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  if (!meal) return null;

  // Handlers con View Transitions
  const handleClose = () => startVT(onClose);
  const handleToggle = () => startVT(onToggleComplete);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Cerrar"
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm outline-none"
          />

          {/* Modal (pestaña lateral) */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed inset-0 z-50 flex flex-col bg-background"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-background/95 backdrop-blur p-4 pb-2 border-b border-border">
              <button
                ref={closeBtnRef}
                onClick={handleClose}
                className="text-text flex size-12 shrink-0 items-center justify-center focus:outline-none rounded-lg active:scale-90 transition-all duration-150 "
              >
                <Icon name="back" className="" size={24} />
              </button>
              <h2 className="flex-1 text-center text-lg font-bold  text-text">
                Detalle de Comida
              </h2>
              <div className="flex size-12 shrink-0 items-center" />
            </div>

            {/* Content */}
            <main className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
              <h1 className="pb-1 text-left text-2xl font-bold leading-tight tracking-tight text-text">
                {meal.name}
              </h1>
              <p className="pb-6 text-sm font-medium text-primary">
                {meal.hora}
              </p>

              {/* Ingredientes */}
              <section className="mb-6">
                <h3 className="pb-2 text-xl font-bold tracking-[-0.015em] text-text">
                  Ingredientes
                </h3>
                <div className="rounded-lg bg-card p-4 shadow-sm ">
                  {meal.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-x-6 py-2.5 ${
                        index < meal.items.length - 1
                          ? "border-b border-border"
                          : "pt-2.5"
                      }`}
                    >
                      <p className="flex-1 text-sm font-medium text-text-secondary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sustitutos */}
              {!!meal.sustitutos?.length && (
                <section className="mb-6">
                  <div className="rounded-lg">
                    <button
                      onClick={() => setIsSustitutosOpen(!isSustitutosOpen)}
                      className="flex cursor-pointer w-full items-center justify-between py-2 rounded-lg px-2 transition-colors"
                    >
                      <h3 className="text-lg font-bold tracking-[-0.015em] text-text">
                        Sustitutos
                      </h3>
                      <motion.div
                        animate={{ rotate: isSustitutosOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          name="down"
                          className="text-text-secondary"
                          size={24}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isSustitutosOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.2,
                            ease: "easeOut",
                            opacity: { duration: 0.2 },
                          }}
                          style={{ originY: 0 }}
                          className="overflow-hidden p-2"
                        >
                          <motion.div
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 0.1, duration: 0.1 }}
                            className="mt-2 rounded-lg bg-card p-4 shadow-sm"
                          >
                            {meal.sustitutos?.map((s, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                  delay: 0.15 + i * 0.03,
                                  duration: 0.3,
                                }}
                                className={`flex gap-x-6 py-2.5 ${
                                  i < (meal.sustitutos?.length || 0) - 1
                                    ? "border-b border-border"
                                    : "pt-2.5"
                                }`}
                              >
                                <p className="flex-1 text-sm text-text-secondary">
                                  {s}
                                </p>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </section>
              )}

              {/* Alternativas */}
              {!!meal.alternativa?.items?.length && (
                <section>
                  <div className="rounded-xl">
                    <button
                      onClick={() => setIsAlternativasOpen(!isAlternativasOpen)}
                      className="flex cursor-pointer w-full items-center justify-between py-2 rounded-lg px-2 transition-colors"
                    >
                      <h3 className="text-lg font-bold tracking-[-0.015em] text-text">
                        Alternativas
                      </h3>
                      <motion.div
                        animate={{ rotate: isAlternativasOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon
                          name="down"
                          className="text-text-secondary"
                          size={24}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isAlternativasOpen && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden p-2"
                        >
                          <motion.div
                            initial={{}}
                            animate={{}}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="mt-2 rounded-lg bg-card p-4 shadow-md"
                          >
                            {meal.alternativa?.descripcion && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="mb-3 pb-3 border-b border-border"
                              >
                                <p className="text-sm font-medium text-primary italic">
                                  {meal.alternativa.descripcion}
                                </p>
                              </motion.div>
                            )}
                            {meal.alternativa?.items?.map((alt, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                  delay: 0.15 + i * 0.05,
                                  duration: 0.2,
                                }}
                                className={`flex gap-x-6 py-2.5 ${
                                  i < (meal.alternativa?.items?.length || 0) - 1
                                    ? "border-b border-border"
                                    : "pt-2.5"
                                }`}
                              >
                                <p className="flex-1 text-sm text-text-secondary">
                                  {alt}
                                </p>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </section>
              )}
            </main>

            {/* Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background p-4">
              <button
                onClick={handleToggle}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 font-bold text-white transition-all hover:bg-primary-dark active:scale-95"
              >
                {meal.done ? (
                  <Icon name="checkDoneNo" className="text-white" size={24} />
                ) : (
                  <Icon name="checkDone" className="text-white" size={24} />
                )}
                {meal.done ? "Marcar como pendiente" : "Marcar como completada"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
