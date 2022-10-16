// Longest Substring Without Repeating Characters
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s: string): number {
  let a = 0,
    b = 0;
  let length = 0;
  const characters = {};

  while (b < s.length) {
    if (!(s[b] in characters)) {
      characters[s[b]] = b;
      b++;
      length = Math.max(length, Object.keys(characters).length);
    } else {
      delete characters[s[a]];
      a++;
    }
  }
  console.log(characters);
  return length;
}
// ------------------------------------------------------

// two sum
function twoSum(nums: number[], target: number): number[] | never {
  let hash = {};
  let indicesArray: number[] = [];
  if (!nums.length) return [];
  nums.forEach((singleNumber, idx) => {
    if (hash.hasOwnProperty(`${target - singleNumber}`)) {
      return (indicesArray = [hash[target - singleNumber], idx]);
    }
    hash[singleNumber] = idx;
  });
  return indicesArray;
}
//-----------------------------------------------------------

//Add Two Numbers
// Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(list: ListNode | null): ListNode | null {
  let cur = list;
  let prev: ListNode | null = null,
    next: ListNode | null = null;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let addedList = new ListNode(undefined);
  let head = addedList;
  let carry = 0;

  while (l1 || l2 || carry) {
    let currentL1 = l1 ? l1.val : 0;
    let currentL2 = l2 ? l2.val : 0;

    let initialSum = carry + currentL1 + currentL2;
    let actualSum = initialSum % 10;
    carry = Math.floor(initialSum / 10);
    const newNode = new ListNode(actualSum);
    head.next = newNode;
    head = head.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    head.next = new ListNode(carry);
  }
  return addedList.next;
}
//-----------------------------------------------------------

// Palindrome Number
// Easy

// Given an integer x, return true if x is palindrome integer.

function isPalindrome(x: number): boolean {
  const numberString = `${x}`;
  if (!numberString.length) return false;
  let reversedString = "";

  for (let i = numberString.length - 1; i >= 0; i--) {
    reversedString += numberString[i];
  }

  return reversedString === numberString;
}
//----------------------------------------------------------

// Roman to Integer
function romanToInt(s: string): number {
  let num = 0;
  const notationArray = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (notationArray[s[i]] < notationArray[s[i + 1]]) {
      num -= notationArray[s[i]];
    } else {
      num += notationArray[s[i]];
    }
  }

  return num;
}

//------------------------------------------------------------
