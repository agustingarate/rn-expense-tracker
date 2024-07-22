class Expense {
  constructor(
    public id: string,
    public title: string,
    public date: Date,
    public expense: string,
  ) {}
}

export const expenses = [
  new Expense("1", "Expense 1", new Date("2024-07-22"), "14.5"),
  new Expense("2", "Expense 2", new Date("2024-07-14"), "12.5"),
  new Expense("3", "Expense 3", new Date("2024-10-15"), "3.0"),
  new Expense("4", "Expense 4", new Date("2024-08-02"), "1.0"),
  new Expense("5", "Expense 5", new Date("2024-07-27"), "14.5"),
  new Expense("6", "Expense 6", new Date("2024-01-13"), "12.78"),
  new Expense("7", "Expense 7", new Date("2024-11-08"), "6.1"),
  new Expense("8", "Expense 8", new Date("2024-07-1"), "4.4"),
];

export default Expense;
