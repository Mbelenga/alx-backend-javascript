console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const tee = process.stdin.read();
  if (tee !== null) {
    process.stdout.write(`Your name is: ${tee}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});