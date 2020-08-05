
import '@tensorflow/tfjs-backend-wasm/dist/index';
import * as tf from '@tensorflow/tfjs-core';

tf.ready().then(() => {
  const res = tf.max([1, 2, 3, 4]);
  console.log('Max result', res.dataSync());
});
