/**
 * This is the main cde
 *
 * By:      Lily Liu
 * Version: 1.0
 * Since:   2022-10-31
 */

import Stack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new Stack()

while (true) {
  const tempInput = prompt(
    'Enter a number to add to the stack then pop or peek: '
  )

  // Process
  if (tempInput === 'pop') {
    break
  } else if (tempInput === 'peek') {
    console.log(myStack.peekStack())
  } else {
    const tempNum = Number(tempInput)
    myStack.pushStack(tempNum)
  }
}

console.log('\nOriginal Stack:')
console.log(myStack.getStack())
console.log('\nPopped Item:')
console.log(myStack.popStack())

console.log('\nDone.')
