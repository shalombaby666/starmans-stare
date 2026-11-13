import test from 'node:test';
import assert from 'node:assert/strict';
import { parseProgress, diameterRatio } from '../src/domain.ts';
import { planets, moons } from '../src/data.ts';
test('saved progress recovers from corruption and removes unknown or duplicated objects', () => {
 assert.deepEqual(parseProgress('{oops'), []);
 assert.deepEqual(parseProgress('{"earth":true}'), []);
 assert.deepEqual(parseProgress('["earth","earth","missing",null,"europa"]'), ['earth','europa']);
});
test('comparison handles self-comparison and rejects invalid measurements', () => {
 assert.equal(diameterRatio(12756,12756),1);
 assert.ok(Math.abs(diameterRatio(142984,12756)-11.2098)<0.001);
 assert.throws(()=>diameterRatio(1,0),RangeError);
});
test('catalog ids are unique and every moon belongs to an existing planet', () => {
 const ids=[...planets,...moons].map(item=>item.id);
 assert.equal(new Set(ids).size,ids.length);
 assert.equal(planets.length,8);
 for(const moon of moons) assert.ok(planets.some(planet=>planet.id===moon.parent));
 for(const planet of planets) assert.ok(planet.source.startsWith('https://science.nasa.gov/'));
});
