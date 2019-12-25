class Action {
  actions = [];

  constructor() {}

  addAction({ updateHandle, overHandle, time = 0.2, autoMove = true }) {
    let cur = {
      updateHandle,
      overHandle,
      time,
      isMove: false,
      curTime: 0,
      autoMove,
      run() {
        this.curTime = 0;
        this.isMove = true;
      }
    };

    this.actions.push(cur);
    return cur;
  }

  update(deltaTime: number) {
    let dels: Array<number> = [];
    this.actions.forEach((element, index) => {
      if (element.isMove) {
        element.curTime += deltaTime;
        if (element.curTime > element.time) {
          // end
          element.isMove = false;
          if (element.autoMove) dels.push(index);
          element.overHandle && element.overHandle();
        } else {
          element.updateHandle &&
            element.updateHandle(element.curTime / element.time, deltaTime);
        }
      }
    });
    this.actions = this.actions.filter(item => !dels.includes(item));
  }
}

export default new Action();
