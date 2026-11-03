import { merge } from "../src/merge";

describe("merge", () => {
  it("merges the example from the requirement", () => {
    expect(merge([1, 4, 7, 10], [2, 5, 8], [9, 6, 3, 0])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([2, 7, 19], [], [])).toEqual([2, 7, 19]);
    expect(merge([], [], [23, 11, 4])).toEqual([4, 11, 23]);
  });

  it("keeps duplicates across collections", () => {
    expect(merge([2, 2, 5], [2, 6], [6, 2, 2])).toEqual([
      2, 2, 2, 2, 2, 5, 6, 6,
    ]);
  });

  it("handles negative numbers", () => {
    expect(merge([-17, 4, 9], [-23, -2], [12, -8, -31])).toEqual([
      -31, -23, -17, -8, -2, 4, 9, 12,
    ]);
  });

  it("handles non-overlapping ranges", () => {
    expect(merge([50, 52], [18, 19], [9, 5])).toEqual([5, 9, 18, 19, 50, 52]);
  });

  it("does not mutate the input arrays", () => {
    const a = [3, 11];
    const b = [4, 19];
    const c = [20, 6];
    merge(a, b, c);
    expect(a).toEqual([3, 11]);
    expect(b).toEqual([4, 19]);
    expect(c).toEqual([20, 6]);
  });
});
