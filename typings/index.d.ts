export interface SingleCaseObj {
  exp: string,
  res: number
}

export interface EveryCaseObj {
  exp: string[],
  res: number[],
  data: {
    [key: string]: number,
    res: number
  }[]
}
