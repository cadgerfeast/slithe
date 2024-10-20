import { Arguments } from 'yargs';

export type CLICommandHandler = (args: Arguments) => void;
export type CLICommandOption = {
	name: string;
	handler: CLICommandHandler;
};
export class CLICommand {
	// Attributes
	public name: string;
	public handler: CLICommandHandler;
	// Constructor
	constructor (options: CLICommandOption) {
		this.name = options.name;
		this.handler = options.handler;
	}
	// Methods
	public execute (args: Arguments): void {
		this.handler(args);
	}
};

export function isCLICommand (toCheck: unknown) {
	if (!toCheck) {
		return false;
	}
	if (typeof toCheck !== 'object') {
		return false;
	}
	if (!('name' in toCheck) || typeof toCheck.name !== 'string') {
		return false;
	}
	if (!('handler' in toCheck) || typeof toCheck.handler !== 'function') {
		return false;
	}
	return true;
}
