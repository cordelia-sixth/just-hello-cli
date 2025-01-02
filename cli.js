#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Hello, buddy!👋");
} else if (args.length === 1) {
  const name = args[0];
  console.log(`Hello, ${name}!👋`);
} else {
  console.error(
    "Sorry, there are too many arguments😢\nCould you limit it to just one?\nUsage: npx just-hello <name>",
  );
  process.exit(1);
}
