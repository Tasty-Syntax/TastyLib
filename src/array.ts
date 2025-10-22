/**
 * Converts mod.Array to typescript array
 * @param array - Tyescript array to convert
 * @returns mod.Array
 */
export function toTsArray(array: mod.Array): any[] {
  let v = [];
  let n = mod.CountOf(array);

  for (let i = 0; i < n; i++) {
    let currentElement = mod.ValueInArray(array, i);
    v.push(currentElement);
  }

  return v;
}

/**
 * Converts typescript array to mod.Array
 * @param array - Tyescript array to convert
 * @returns mod.Array
 */
export function toModArray(array: any[]): mod.Array {
  let v = mod.EmptyArray();
  let n = array.length;

  for (let i = 0; i < n; i++) {
    mod.AppendToArray(v, array[i]);
  }

  return v;
}
