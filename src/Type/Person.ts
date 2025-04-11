export interface Person {
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: number;
  };
  age: number;
  bank: {
    cardExpire: number;
    cardNumber: number;
    cardType: string;
    currency: string;
    iban: string;
  };
  birthDate: number;
  bloodGroup: number;
  company: {
    department: string;
    name: string;
    title: string;
  };
  crypto: {
    coin: string;
    wallet: string | number;
    network: string;
  };
  ein: number;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: string;
  hair: { color: string; type: string };
  height: number;
  id: number;
  image: string | number;
  ip: number;
  lastName: string;
  macAddress: string & number;
  maidenName: string;
  password: string | number;
  phone: number;
  role: string | number;
  ssn: number;
  university: string;
  userAgent: string | number;
  username: string;
  weight: number;
}
