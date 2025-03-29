const Benchmark = require('benchmark');
const { spawnSync } = require('child_process');

const suite = new Benchmark.Suite();

suite
  .add('Tauri Startup Time', {
    defer: true,
    fn: function (deferred) {
      const proc = spawnSync('src-tauri/target/release/circuitverse-desktop', [], { stdio: 'ignore' });
      deferred.resolve();
    },
    onCycle: () => console.log('Ran startup test'),
  })
  .add('Memory Usage', {
    defer: true,
    fn: function (deferred) {
      const proc = spawnSync('src-tauri/target/release/circuitverse-desktop', ['--version'], { stdio: 'pipe' });
      deferred.resolve();
    },
    onCycle: () => console.log('Ran memory test'),
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log('Benchmark complete');
  })
  .run({ async: true });
