# testing rollup bundling

1. Download, run yarn and then yarn bundle. This should call rollup and produce no errors.
2. In your tfjs dev folder. Checkout master or tfjs-2.1.0. cd tfjs-backend-wasm and run yarn build-npm
3. Then run "yarn link" in tfjs-backend-wasm
4. Then run "yarn link @tensorflow/tfjs-backend-wasm" in this folder to symlink to what you just built
5. Run yarn bundle again. Do you get an error?