// 朝の挨拶を出力する
const sayGoodMorning = () => {
  console.log('おはようございます!');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう！');
}

// 夜の挨拶を出力する関数を定義する
const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れ様でした。');
}

// 朝の挨拶を出力する関数を呼び出す
sayGoodMorning();

// 夜の挨拶を出力吸える関数を呼び出す
sayGoodEvening();


// 与えられる引数priceに送料を加算し、その値を出力する関数を定義する
const calculateTotal = (price) => {
  console.log(price + 500 + '円');
}
calculateTotal(1200);

// 与えられる引数priceに送料を加算し、その値を出力する関数を定義する
const addTwoArgrments = (price, shippingFee) => {
  console.log(price + shippingFee + '円');
}
addTwoArgrments(1200, 500);

// 与えられる引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num) => {
  return num * 2;
}
console.log(double(30));

// 定数を宣言する
// const userName = '侍太郎';

// 定数の値を出力する
// console.log(userName);

// 関数の中で定数を宣言し、関数の中で定数を使う
const useVariable = () => {
  const userName = '侍太郎'
  console.log(userName);
}

// 関数を呼び出す
useVariable();

// 関数の中で宣言した定数を関数の外で使う
console.log(userName);
