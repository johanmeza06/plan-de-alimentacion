// Safe Areas Handler para iOS
// Este script se asegura de que las safe areas funcionen correctamente

export const initSafeAreas = (): void => {
  // Detectar si estamos en iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

  if (isIOS && isStandalone) {
    // Obtener las safe areas
    const root = document.documentElement;
    const html = document.documentElement;
    const body = document.body;

    // Función para actualizar las variables CSS
    const updateSafeAreas = () => {
      // Obtener los valores de safe area
      const safeAreaTop =
        getComputedStyle(root).getPropertyValue("env(safe-area-inset-top)") ||
        "0px";
      const safeAreaBottom =
        getComputedStyle(root).getPropertyValue(
          "env(safe-area-inset-bottom)"
        ) || "0px";
      const safeAreaLeft =
        getComputedStyle(root).getPropertyValue("env(safe-area-inset-left)") ||
        "0px";
      const safeAreaRight =
        getComputedStyle(root).getPropertyValue("env(safe-area-inset-right)") ||
        "0px";

      // Aplicar las safe areas al root
      root.style.setProperty("--safe-area-inset-top", safeAreaTop);
      root.style.setProperty("--safe-area-inset-bottom", safeAreaBottom);
      root.style.setProperty("--safe-area-inset-left", safeAreaLeft);
      root.style.setProperty("--safe-area-inset-right", safeAreaRight);

      console.log("Safe areas aplicadas:", {
        top: safeAreaTop,
        bottom: safeAreaBottom,
        left: safeAreaLeft,
        right: safeAreaRight,
      });
    };

    // Aplicar inmediatamente
    updateSafeAreas();

    // Escuchar cambios de orientación
    window.addEventListener("orientationchange", () => {
      setTimeout(updateSafeAreas, 100);
    });

    // Escuchar cambios de viewport
    window.addEventListener("resize", updateSafeAreas);

    // Aplicar clases específicas para iOS
    html.classList.add("ios-pwa");
    body.classList.add("ios-pwa");

    // Asegurar que el HTML tenga el color correcto
    const isDark = html.classList.contains("dark");
    html.style.backgroundColor = isDark ? "#0f1323" : "#607AFB";
  }
};

// Función para manejar el dark mode en safe areas
export const updateSafeAreaColors = (isDark: boolean): void => {
  const html = document.documentElement;
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;

  if (isStandalone) {
    html.style.backgroundColor = isDark ? "#0f1323" : "#607AFB";
  }
};
