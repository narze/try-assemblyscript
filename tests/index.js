import assert from "assert";
import { add, multiply } from "../build/debug.js";
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(multiply(10, 2), 20);

console.log("ok");
