type OrderedBooksType = {
  bookId: string
  quantity: number
}

export type OrderType = {
  userId: string;
  orderedBooks: OrderedBooksType[];
  status: string;
  createdAt: Date;
}
