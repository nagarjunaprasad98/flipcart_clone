// sort
export function sortAlphabetical(data) {
  return data.slice().sort((a, b) => a.value.localeCompare(b.value));
}
