export class EventBus {
  static events = [];

  static on(name: string, handle: Function) {
    if (!this.events[name]) {
      this.events = [handle];
    } else {
      this.events[name].push(handle);
    }
  }

  static off(name: string, handle: Function) {
    if (!this.events[name]) {
      return;
    } else {
      let index = this.events.indexOf(handle);
      if (index !== -1) this.events.splice(index, 1);
    }
  }

  static emit(name: string, ...args) {
    if (!this.events[name]) return;
    let handles = this.events[name];
    handles.forEach(element => {
      element(...args);
    });
  }

  static once(name: string, handle: Function) {
    this.on(name, () => {
      handle();
      this.off(name, handle);
    });
  }
}
