export const cx = (...classes: Array<string | boolean | undefined>) => {
  const newVlasses = [];
  for (const c of classes) {
    if (typeof c === "string") {
      newVlasses.push(c.trim());
    }
  }
  return newVlasses.join(" ");
};
