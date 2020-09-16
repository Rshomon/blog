import * as ActionsContance from "../Contance";

const counter = (state = 0, action) => {
  switch (action.type) {
    // 修改状态鸡中的数据
    case ActionsContance.TEST:
      return state;
    default:
      return state;
  }
};

export default counter;
