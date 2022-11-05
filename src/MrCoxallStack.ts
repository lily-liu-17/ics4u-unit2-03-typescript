/**
 * Mr Coxall Stack
 *
 * By       Lily Liu
 * Version  1.0
 * Since    2022-10-31
 */

class MrCoxallStack {
  private readonly stack: number[] = []

  // getter method - returns the stack
  getStack(): number[] {
    return this.stack
  }

  // push method
  pushStack(tempNum: number): void {
    if (!isNaN(tempNum)) {
      this.stack.push(tempNum)
    } else {
      console.log('Not a Number')
    }
  }

  // pop method
  popStack(): number | undefined | string {
    if (this.stack.length === 0) {
      return 'NaN'
    } else {
      return this.stack.pop()
    }
  }

  // peek method
  peekStack(): number | undefined | string {
    if (this.stack.length === 0) {
      return 'NaN'
    } else {
      return this.stack[this.stack.length - 1]
    }
  }
}

export = MrCoxallStack
