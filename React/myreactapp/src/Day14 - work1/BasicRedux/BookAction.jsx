import React from "react";

const purchase_book = () => {
  return {
    type: "BUY_BOOK",
    payload: 10
  }
}

const sell_book = (count) => {
  return {
    type: "SELL_BOOK",
    payload: Number(count)
  }
}

export { purchase_book, sell_book };