import { comments, fruits } from "./constants";

const answer1 = () => {
  const answer1 = fruits.map(fruit => fruit.fruitName);

  const crock = fruits.map(item => item.fruitType)
    .filter((fruit, i, arr) => arr.indexOf(fruit) == i);

  const fruitsInCrock = crock.map(item => {
    return fruits.filter(fruit => fruit.fruitType == item)
      .map(item => item.fruitName)
  })

  const answer3 = () => {
    console.log('Jawaban 3: ')
    return crock.map((item, i) => {
      let tempStock = 0;
      fruits.filter(fruit => fruit.fruitType == item)
        .map(item => tempStock += item.stock)
      console.log(`Wadah ${i + 1} stock: ${tempStock}`)
    })
  }

  console.log('Jawaban 1: ', answer1);
  console.log(`Jawaban 2.0: Ada ${crock.length} wadah`);
  console.log('Jawaban 2.1: ', fruitsInCrock);
  answer3()
  console.log(`Jawaban 4: Komentar saya terkait kasus ini yaitu:
    Penamaan nama key saya sarankan agar konsisten, misal jika depannya fruit maka seharusnya yang lain mengikuti, contoh perubahan pada key "stock" menjadi "fruitStock"
    Lalu fruitId harusnya menggunakkan unique value, contoh array diatas ada beberapa fruitId yang memiliki value yang sama.
    Lalu untuk value dari fruitName saya sarankan juga konsisten untuk value penggunaan huruf besar & kecilnya.`)
}

const answer2 = () => {
  let count = 0;

  const checkReplies = (replies) => {
    replies?.map(reply => {
      if (reply?.commentContent) {
        reply.commentContent && count++;
        checkReplies(reply?.replies)
      }
    })
  }

  comments.map(comment => {
    comment.commentContent && count++;
    checkReplies(comment?.replies)
  })

  console.log(`Jawaban 5 | Total komentar ada: ${count}`)
}

answer1();
answer2();