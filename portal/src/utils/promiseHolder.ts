export class PromiseHolder {
  isLocked = false;
  promise?: Promise<void>;
  private resolve?: () => void;
  private reject?: () => void;

  hold() {
    this.promise = new Promise((resolve, reject) => Object.assign(this, { reject, resolve }));
    this.isLocked = true;
  }

  successRelease() {
    if (!this.promise) return;
    this.resolve!();
    this.isLocked = false;
  }

  failRelease() {
    if (!this.promise) return;
    this.reject!();
    this.isLocked = false;
  }
}
