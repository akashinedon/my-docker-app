// Super simple test - just check if 2+2 = 4

function add(a, b) {
  return a + b;
}

// Run the test
if (add(2, 2) === 4) {
  console.log('✅ Test passed!');
  process.exit(0); // Exit with success
} else {
  console.log('❌ Test failed!');
  process.exit(1); // Exit with error
}