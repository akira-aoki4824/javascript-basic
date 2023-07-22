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

