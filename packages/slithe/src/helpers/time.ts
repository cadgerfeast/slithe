export async function delay (ms = 1) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}

export class Deferred<T = void> {
  // Attributes
  private _resolve: (value: T | PromiseLike<T>) => void;
  private _reject: (err: Error) => void;
  public promise: Promise<T>;
  // Constructor
  constructor () {
    this.promise = new Promise<T>((resolve, reject)=> {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  // Methods
  public resolve (value?: T) {
    this._resolve(value);
  }
  public reject (err: Error) {
    this._reject(err);
  }
}

export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) {
  const deferreds = new Set<Deferred<ReturnType<T>>>();
	let timer: number;
	return (...args: Parameters<T>) => {
    const deferred = new Deferred<ReturnType<T>>();
		window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      try {
        const output = callback(...args);
        for (const deferred of deferreds) {
          deferred.resolve(output);
        }
      } catch (err) {
        deferred.reject(err);
      }
    }, delay);
    deferreds.add(deferred);
		return deferred.promise;
	};
}
