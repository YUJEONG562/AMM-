
export interface StepData {
  id: number;
  title: string;
  description: string;
  placeholder: string;
  value: string;
}

export interface SheetState {
  steps: Record<number, string>;
}
