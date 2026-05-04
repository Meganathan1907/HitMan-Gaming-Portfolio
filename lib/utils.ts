type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

interface ClassDictionary {
  [id: string]: unknown;
}

type ClassArray = Array<ClassValue>;

function classNames(...inputs: ClassValue[]) {
  const classes: string[] = [];

  const handleInput = (input: ClassValue) => {
    if (!input && input !== 0) return;

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      input.forEach(handleInput);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key) && (input as ClassDictionary)[key]) {
          classes.push(key);
        }
      }
    }
  };

  inputs.forEach(handleInput);
  return classes.join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return classNames(...inputs);
}

export const neonColor = {
  cyan: "#00f5ff",
  purple: "#bf00ff",
  green: "#39ff14",
  orange: "#ff6b00",
};

export const glowStyle = (color: keyof typeof neonColor) => ({
  textShadow: `0 0 20px ${neonColor[color]}`,
  color: neonColor[color],
});
