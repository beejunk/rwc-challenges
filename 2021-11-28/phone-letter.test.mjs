import assert from "assert/strict";
import phoneLetter from "./phone-letter.mjs";

const ERROR_MESSAGE = "Argument must be a string containing only the digits 2-9.";

assert.deepEqual(
  phoneLetter("9"),
  ["w", "x", "y", "z"],
  "Handles a single number."
);

assert.deepEqual(
  phoneLetter('23'),
  [
    "ad", "ae", "af",
    "bd", "be", "bf",
    "cd", "ce", "cf",
  ],
  "Handles two numbers"
);

assert.deepEqual(
  phoneLetter('234'),
  [
    "adg", "adh", "adi",
    "aeg", "aeh", "aei",
    "afg", "afh", "afi",
    "bdg", "bdh", "bdi",
    "beg", "beh", "bei",
    "bfg", "bfh", "bfi",
    "cdg", "cdh", "cdi",
    "ceg", "ceh", "cei",
    "cfg", "cfh", "cfi",
  ],
  "Handles three numbers."
);

assert.deepEqual(
  phoneLetter("274"),
  [
    "apg", "aph", "api",
    "aqg", "aqh", "aqi",
    "arg", "arh", "ari",
    "asg", "ash", "asi",
    "bpg", "bph", "bpi",
    "bqg", "bqh", "bqi",
    "brg", "brh", "bri",
    "bsg", "bsh", "bsi",
    "cpg", "cph", "cpi",
    "cqg", "cqh", "cqi",
    "crg", "crh", "cri",
    "csg", "csh", "csi",
  ],
  "Handles digits with four letters."
);

assert.deepEqual(
  phoneLetter("724"),
  [
    "pag", "pah", "pai",
    "pbg", "pbh", "pbi",
    "pcg", "pch", "pci",
    "qag", "qah", "qai",
    "qbg", "qbh", "qbi",
    "qcg", "qch", "qci",
    "rag", "rah", "rai",
    "rbg", "rbh", "rbi",
    "rcg", "rch", "rci",
    "sag", "sah", "sai",
    "sbg", "sbh", "sbi",
    "scg", "sch", "sci",
  ],
  "Handles four letter digit as first digit."
);

assert.deepEqual(
  phoneLetter("247"),
  [
    "agp", "agq", "agr", "ags",
    "ahp", "ahq", "ahr", "ahs",
    "aip", "aiq", "air", "ais",
    "bgp", "bgq", "bgr", "bgs",
    "bhp", "bhq", "bhr", "bhs",
    "bip", "biq", "bir", "bis",
    "cgp", "cgq", "cgr", "cgs",
    "chp", "chq", "chr", "chs",
    "cip", "ciq", "cir", "cis",
  ],
  "Handles four letter digit as last digit."
);

assert.throws(
  () => {
    phoneLetter();
  },
  {
    message: ERROR_MESSAGE
  },
  "Throws when no arguments are passed."
);

assert.throws(
  () => {
    phoneLetter("");
  },
  {
    message: ERROR_MESSAGE
  },
  "Throws when an empty string is passed."
);

[{}, [], 345, false].forEach(nonString => {
  assert.throws(
    () => {
      phoneLetter(nonString)
    },
    {
      message: ERROR_MESSAGE
    },
    `Throws when ${typeof nonString} is passed as an argument.`
  )
});

["1q9", "a37", "25-"].forEach(combination => {
  assert.throws(
    () => {
      phoneLetter(combination)
    },
    {
      message: ERROR_MESSAGE
    },
    `Throws with combination ${combination}`
  );
})

console.log("All tests passed.");