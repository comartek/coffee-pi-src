/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires

const rpio = require("rpio");

const PIN = 12;
const PULSE_WIDTH = 25; // ms
const TIMEOUT_TO_END_COMMAND = PULSE_WIDTH * 10;

rpio.close(PIN);

/**
 *
 * @param {*} status
 */
const sendStatusSignal = (status) => {
  console.log("Device status", status);
  // todo:
};

const sendMoneySignal = async (val) => {
  console.log("val=>>>>>>>>>>>>>>>>>>>", val);
  if (val == 0) {
    rpio.close(PIN);
    return;
  }
  rpio.open(PIN, rpio.OUTPUT, rpio.LOW);
  rpio.msleep(TIMEOUT_TO_END_COMMAND);

  for (let i = 0; i < val; i++) {
    rpio.open(PIN, rpio.OUTPUT, rpio.LOW);
    rpio.msleep(PULSE_WIDTH * 4);

    rpio.open(PIN, rpio.OUTPUT, rpio.HIGH);
    rpio.msleep(PULSE_WIDTH);
  }
  rpio.open(PIN, rpio.OUTPUT, rpio.LOW);
  rpio.msleep(TIMEOUT_TO_END_COMMAND);
  
  rpio.close(PIN);
};


module.exports = {
  sendMoneySignal,
  sendStatusSignal,
};
