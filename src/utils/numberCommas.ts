export function numberCommas(number: number): string {
  return new Intl.NumberFormat('en-US').format(number)
}