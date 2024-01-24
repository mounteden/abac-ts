import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { VERSION } from "../src/index.ts";

describe("abac-ts", () => {
  it("exports a version string", () => {
    assert.equal(typeof VERSION, "string");
  });
});
