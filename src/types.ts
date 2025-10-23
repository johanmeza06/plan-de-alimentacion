export interface MealData {
  hora: string;
  items: string[];
  sustitutos?: string[];
  alternativa?: {
    descripcion?: string;
    items: string[];
  };
}

export interface DayPlan {
  desayuno: MealData | null;
  colacionMedioDia?: MealData | null;
  almuerzo: MealData | null;
  colacionTarde: MealData | null;
  preEntreno?: MealData | null;
  cena: MealData | null;
  colacionNocturna?: MealData | null;
  alternativa?: MealData | null;
}

export type WeekPlan = {
  [key: string]: DayPlan;
};

export interface MealWithStatus extends MealData {
  name: string;
  done: boolean;
}

export type DoneMap = {
  [day: string]: {
    [mealName: string]: boolean;
  };
};
