type outPutTypes = {
  name: string;
  lastName: string;
  email: string;
  age: string;
};

export default class Customer {
  constructor(
    private name: string,
    private lastName: string,
    private email: string,
    private age: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}
export class CustomerList {
  customerList?: object[];
  constructor() {
    this.customerList = [];
  }
  addCustomer(newCustomer: object) {
    return this.customerList?.push(newCustomer);
  }
  makeCustomerList() {
    return this.customerList;
  }
}
