var BinaryHeapTest = TestCase("BinaryHeapTest");

BinaryHeapTest.prototype.testBasic = function () {
  var heap = new BinaryHeap(BinaryHeap.stdLess);
  heap.add(2);
  heap.add(1);
  heap.add(3);

  assertEquals(3, heap.getSize());
  assertEquals(1, heap.popLeast());
  assertEquals(2, heap.getSize());
  assertEquals(2, heap.popLeast());
  assertEquals(1, heap.getSize());

  heap.add(18);
  heap.add(15);
  heap.add(32);
  heap.add(14);

  assertEquals(5, heap.getSize());

  assertEquals(3, heap.popLeast());

  var arr = [];
  while (heap.getSize()) {
    arr.push(heap.popLeast());
  }

  assertEquals([14,15,18,32], arr);
}

BinaryHeapTest.prototype.testClean = function () {
  var heap = new BinaryHeap(BinaryHeap.stdLess);
  heap.add(2);
  heap.add(1);
  heap.add(3);

  assertEquals(3, heap.getSize())

  heap.clear();

  assertEquals(0, heap.getSize());

  assert(heap.isEmpty());

  assertEquals(undefined, heap.elements[0]);
}
