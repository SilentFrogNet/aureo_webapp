import { Operator, map, pipe, mutate, filter } from 'overmind'

// export const getDay: () => Operator<{id:number, day:Day}> = () =>
//   map(async ({state, actions}, {id}) {
//     return await actions.getDay(id)
//   })


export const lengthGreaterThan = (length) =>
  filter(function lengthGreaterThan(_, value: string) {
    return value.length > length
  })

export const lengthGreaterOrEqualThan = (length) =>
  filter(function lengthGreaterOrEqualThan(_, value: string) {
    return value.length >= length
  })

export const lengthLessThan = (length) =>
  filter(function lengthLessThan(_, value: string) {
    return value.length < length
  })

export const lengthLessOrEqualThan = (length) =>
  filter(function lengthLessOrEqualThan(_, value: string) {
    return value.length <= length
  })

export const lengthEqualThan = (length) =>
  filter(function lengthEqualThan(_, value: string) {
    return value.length == length
  })
