export {};
// let seat;
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat == 0) {
// }

enum SeatChoice {
  AISLE = "Aisle",
  MIDDLE = 6,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  startTrailFn(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const ali: Admin = {
  dbId: 22,
  email: "ali",
  userId: 2,
  startTrail: () => {
    return "trail stated";
  },
  startTrailFn: () => {
    return "ali";
  },
  getCoupon: (name: "feyza", off: 2) => {
    return 10;
  },
  githubToken: "223",
  role: "learner",
};

console.log(ali);

// ali.dbId = 23; // ? Cannot assign to 'dbId' because it is a read-only property.

// ?? Type ile Interface arasında ki

//! 1) Extend (Genişletme) ve Implement (Uygulama):
//*** interface: Birden çok interface'i birleştirebilirsiniz (extend). Ayrıca, sınıfları ve nesneleri implement ile uygulayabilirsiniz.
//*** type: type'ları birleştiremezsiniz ve sınıfları veya nesneleri uygulayamazsınız. //?? type Dog = Animal & {breed: string;}; bu şekilde olur
// ! 2) Yinelemeli Türler (Recursive Types):
//*** interface: Yinelemeli türleri desteklemez.
//*** type: Yinelemeli türleri destekler.

//! 3)İmplementasyon İşlevi (Declaration Merging):
//*** interface: Aynı isimde birden çok interface tanımlamanız durumunda, TypeScript bu tanımlamaları birleştirir (declaration merging). Bu, aynı isimdeki interface'lerin tüm özellikleri tek bir interface altında birleştirilerek ortak bir tür olarak kullanılmasını sağlar.
//*** type: type'lar için implementasyon işlevi yoktur; bu nedenle aynı isimde birden çok type tanımlamanız mümkün değildir.

// ! 4) Readonly Modifikatörü:
//*** interface: readonly anahtar kelimesi ile sadece okunabilir özellikleri tanımlayabilirsiniz.
//*** type: readonly modifikatörünü kullanarak doğrudan bir türü tanımlayamazsınız, ancak type ile union veya intersection kullanarak readonly özellikler ekleyebilirsiniz.