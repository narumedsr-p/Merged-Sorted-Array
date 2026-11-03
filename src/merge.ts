export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;
  let k = collection3.length - 1;

  while (i < collection1.length || j < collection2.length || k >= 0) {
    let pick = 0;
    let best = 0;

    if (i < collection1.length) {
      pick = 1;
      best = collection1[i];
    }
    if (j < collection2.length && (pick === 0 || collection2[j] < best)) {
      pick = 2;
      best = collection2[j];
    }
    if (k >= 0 && (pick === 0 || collection3[k] < best)) {
      pick = 3;
      best = collection3[k];
    }

    result.push(best);
    if (pick === 1) i++;
    else if (pick === 2) j++;
    else k--;
  }

  return result;
}
