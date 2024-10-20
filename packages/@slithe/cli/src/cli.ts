// Helpers
import yargs, { Arguments } from 'yargs';
import { hideBin } from 'yargs/helpers';
import c from 'picocolors';
import { CLICommand, isCLICommand } from './index.js';
// Types
interface Options {
  help?: boolean;
  version?: boolean;
}
// Constants
const peerDependencyKeys = ['@slithe/playground/cli'];
const help = [
  `${c.green(`@slithe/cli v${__VERSION__} in use.`)}`,
  '',
  'Usage:',
  `  slithe ${c.cyan('[cmd]')} ${c.yellow('{args}')}`,
  '',
  `${c.cyan('Commands')}:`,
  `  ${c.cyan('help')}: Show those helpful notes.`,
  `  ${c.cyan('version')}: Shows @slithe/cli version in use.`,
  '',
  `${c.yellow('Arguments')}:`,
  `  ${c.yellow('--help')}: Shows the help for a ${c.cyan('command')}.`,
  `  ${c.yellow('--version')}: Shows @slithe/cli version in use.`
].join('\n');
const commands: CLICommand[] = [
  new CLICommand({
    name: 'help',
    handler: () => {
      console.info(help);
    }
  }),
  new CLICommand({
    name: 'version',
    handler: () => {
      console.info(__VERSION__);
    }
  })
];

(async () => {
  for (const peerDependencyKey of peerDependencyKeys) {
    try {
      const peerDependency = await import(peerDependencyKey);
      if (isCLICommand(peerDependency.default)) {
        commands.push(peerDependency.default);
      }
    } catch {
      // Nevermind
    }
  }
  const argv: Arguments<Options> = await yargs(hideBin(process.argv)).help(false).argv;
  if (argv._.length === 0) {
    if (argv.version) {
      console.info(__VERSION__);
    } else {
      console.info(help);
    }
  }
  let hasExecuted = false;
  for (const command of commands) {
    if (command.name === argv._[0]) {
      hasExecuted = true;
      command.handler(argv);
      break;
    }
  }
  if (!hasExecuted) {
    console.error(`Command ${c.yellow(argv._[0].toString())} does not exist.`);
  }
})();
