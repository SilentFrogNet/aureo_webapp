import log from 'loglevel'
import { Pages } from '~overmindApp/Router/routes'

namespace Misc {
  export const pad = (num: number, size: number) => {
    var s = String(num);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
  }

  Number.prototype.pad = function (size: number): string {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
  }

  export const escalateParentId = (elem: Element, starts_with: string = null): string => {
    starts_with = starts_with || ""
    if (elem.id.startsWith(starts_with))
      return elem.id.slice(starts_with.length)
    return escalateParentId(elem.parentElement, starts_with)
  }

  export const getRowsRange = <T>(rows: T[], from: number, to: number): T[] => {
    return rows.slice(from, from + to)
  }

  export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  export const getQueryParameterByName = (name, url = null) => {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  export const getPageByString = (page: string): Pages => {
    Object.keys(Pages).forEach(e => {
      if (page === e)
        return e
    })
    return null
  }

}

export = Misc
