// src/__tests__/counterSlice.test.js
import counterReducer, { increment, decrement, incrementByAmount } from "./counterSlice";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, { type: undefined })).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    const initialState = { value: 0 };
    expect(counterReducer(initialState, increment())).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    const initialState = { value: 2 };
    expect(counterReducer(initialState, decrement())).toEqual({ value: 1 });
  });

  it("should handle incrementByAmount", () => {
    const initialState = { value: 3 };
    expect(counterReducer(initialState, incrementByAmount(5))).toEqual({ value: 8 });
  });
});
