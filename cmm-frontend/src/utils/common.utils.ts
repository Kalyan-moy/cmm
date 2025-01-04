export const _hexToRgba = (hex: string, alpha: number = 1): string => {
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  const [r, g, b] = hex
    .replace(/^#/, "")
    .match(/.{2}/g)!
    .map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const _generateHtmlId = (prefix = "component") =>
  `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
