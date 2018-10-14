'use strict';
const memo = new Map(); //連想配列のオブジェクト呼び出し
memo.set(0, 0); //n=0の時の値を初期値としてセット
memo.set(1, 0); //n=1の時の値を初期値としてセット
memo.set(2, 1); //n=2の時の値を初期値としてセット
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    } //nが記録済みの値の時は、連想配列から引っ張り出す
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value); //初めてのnなら、連想配列にセットする
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}