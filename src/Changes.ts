import { Change } from './Change'

export class Changes {
  changes: Change[] = []

  constructor(...changes: Change[]) {
    this.changes.push(...changes)
  }

  add(change: Change) {
    let alreadyIncluded = false

    for (let existingChange of this.changes) {
      if (existingChange.equals(change)) {
        alreadyIncluded = true
        break
      }
    }

    if (! alreadyIncluded) {
      this.changes.push(change)
    }
  }

  isRelevantFor(changes: Change|Change[]): boolean {
    for (let change of this.changes) {
      if (change.isRelevantFor(changes)) {
        return true
      }
    }

    return false
  }
}
